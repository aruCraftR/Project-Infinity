//the name of the file and the structures ID
let fileName = 'name';
//the controller used
let controllerID = 'name';
//the name of your machine
let displayName = 'name';


//Commands Rigster
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    //Commans SetFile, allow you to name the machine, change controllerID, and change the fileName
    event.register(Commands.literal('setFile') // The name of the command
        .then(Commands.argument('variables', Arguments.STRING.create(event))
            .suggests((ctx, builder) => {
                return builder
                    .suggest('fileName')
                    .suggest('controllerID')
                    .suggest('displayName')
                    .buildFuture();
            })
            .then(Commands.argument('arg2', Arguments.STRING.create(event))
                .executes(ctx => {
                    const variables = Arguments.STRING.getResult(ctx, 'variables');
                    const arg2 = Arguments.STRING.getResult(ctx, 'arg2');

                    switch (variables) {
                        case 'fileName':
                            fileName = arg2;
                            console.log(`The fileName as been set as : ${fileName}`);
                            ctx.source.player.tell(`The fileName as been set as : ${fileName}`);
                            break;
                        case 'controllerID':
                            controllerID = arg2;
                            console.log(`The controllerID as been set as : ${controllerID}`);
                            ctx.source.player.tell(`The controllerID as been set as : ${controllerID}`);
                            break;
                        case 'displayName':
                            displayName = arg2;
                            console.log(`The displayName as been set as : ${displayName}`);
                            ctx.source.player.tell(`The displayName as been set as : ${displayName}`);
                            break;
                    }
                    return 1;
                })
            )
        )
    );


    //Allow you to register new block on the blackList
    //Warning!!!!!!!!!!
    //If you reload you need to remake this command to add the block in blackList
    event.register(
        Commands.literal("black_listed_blocks") // The name of the command
            .then(
                Commands.argument("block_to_blacklist", Arguments.registry(event, "block").create(event))
                    .executes((ctx) => {
                        /** @type {Internal.Holder$Reference<Internal.Block>} */
                        let block = Arguments.registry(event, "block").getResult(ctx, "block_to_blacklist")
                        ctx.source.player.tell(Text.of("Blacklisted block: ").append(Text.blue(block.get().name)))
                        blacklistedBlocks.push(block.get().id);

                        return 1;
                    })
            )
    )

    //List all blacklisted BLock
    event.register(
        Commands.literal('List_BlackListed_Block')
            .executes((ctx) => {
                ctx.source.player.tell('BlackListed Block list : \n');
                blacklistedBlocks.forEach(function (item) {
                    ctx.source.player.tell(Text.of(item + "\n").color(0xFFFFFF));
                    return 1;
                })
            })
    )


    //Start the process to generate the layer
    event.register(Commands.literal('startProcess')
        .executes((ctx) => {
            startGenerating = true;
            ctx.source.player.tell(startGenerating);
            return 1;
        })
    )


});


//item use to set up the layer
const itemIDs = {
    setFirstPosition: 'minecraft:nether_star',
    setSecondPosition: 'minecraft:amethyst_shard',
};

//blacklisted Block (the block in this array is not considerate as structures block)
let blacklistedBlocks = [
    'minecraft:air',
    'minecraft:white_wool',
];

// All variables use to setUp the layer for the structures 
let pos1 = null;
let pos2 = null;
let pos3 = null;
let debounce = false;
let currentLayer = 0;
let layers = [];
let keyMap = {};
let firstLayerDimensions = null;
let controllerSet = false;
let usedKeys = new Set();
let startGenerating = false;
let layerPattern = "";



//Set the position 
function setPos(pos, bool, player, name) {

    if (bool) {
        pos1 = pos;
    } else {
        pos2 = pos;
    }
    player.tell(Text.of(name + " position set at " + pos).color(0x5555FF));
    console.log(name + " position set at " + pos);
}


// Detecte when you use the IDsItem on a block 
BlockEvents.rightClicked(event => {
    const player = event.getPlayer();
    const heldItem = player.getMainHandItem();

    if (debounce) {
        return;
    }

    debounce = true;
    setDebounceTimeout();


    if (heldItem.getId() === itemIDs.setFirstPosition) {
        // Set the first position if holding the specified item
        setPos(event.getBlock().getPos(), true, player, "first");
        console.log("Right-click detected with item: " + heldItem.getId());
        player.tell(Text.of("Right-click detected with item: " + heldItem.getId()).color(0x55FFFF));

    } else if (heldItem.getId() === itemIDs.setSecondPosition) {
        // Generate layout for the current layer after both positions are set
        setPos(event.getBlock().getPos(), false, player, "Second");
        console.log("Right-click detected with item: " + heldItem.getId());
        player.tell(Text.of("Right-click detected with item: " + heldItem.getId()).color(0x55FFFF));

        if (pos1 && pos2 && startGenerating) {
            pos3 = pos1 - pos2;
            console.log("Generate the Layer and the Key");
            player.tell(Text.of("Generate the Layer and the Key").color(0x00FF00));
            generateLayer(event.getLevel(), pos1, pos2, pos3, player);
            startGenerating = false;
        }
    }
});


//Generate the layer by X,Y,Z
function generateLayer(level, pos1, pos2, player) {
    let minY = Math.min(pos1.getY(), pos2.getY());
    let maxY = Math.max(pos1.getY(), pos2.getY());
    let minX = Math.min(pos1.getX(), pos2.getX());
    let maxX = Math.max(pos1.getX(), pos2.getX());
    let minZ = Math.min(pos1.getZ(), pos2.getZ());
    let maxZ = Math.max(pos1.getZ(), pos2.getZ());

    if (!firstLayerDimensions) {
        firstLayerDimensions = { minX: minX, maxX: maxX, minZ: minZ, maxZ: maxZ, minY: minY, maxY: maxY };
    } else {
        minX = firstLayerDimensions.minX;
        maxX = firstLayerDimensions.maxX;
        minZ = firstLayerDimensions.minZ;
        maxZ = firstLayerDimensions.maxZ;
        minY = firstLayerDimensions.minY;
        maxY = firstLayerDimensions.maxY;
    }

    for (let y = minY; y <= maxY; y++) {
        let layer = [];
        for (let z = maxZ; z >= minZ; z--) {
            let row = '';
            for (let x = minX; x <= maxX; x++) {
                let block = level.getBlock(x, y, z);
                let blockId = block.getId();

                if (blacklistedBlocks.includes(blockId)) {
                    row += ' ';
                } else if (blockId === controllerID) {
                    row += 'C';
                    controllerSet = true;
                } else {
                    if (!keyMap[blockId]) {
                        let key;
                        for (let i = 65; i < 91; i++) {
                            key = String.fromCharCode(i);

                            if (key !== 'C' && !usedKeys.has(key)) {
                                usedKeys.add(key);
                                break;
                            }
                        }
                        keyMap[blockId] = key;
                    }
                    row += keyMap[blockId];
                }
            }
            layer.push(row);
        }
        layers.push(layer);
    }
    generateFile(player);
}

//Generate the file in the console.log();
function generateFile(player) {
    layers.reverse();

    let layerStr = layers.map(layer =>
        layer.map(row => `      "${row}"`).join(",\n")
    ).join("\n    ],\n    [\n");

    let keyStr = Object.entries(keyMap).map(([blockId, key]) => {
        if (blockId.includes("input") || blockId.includes("output")) {
            const isInput = blockId.includes("input");
            const portId = blockId.replace("_input", "").replace("_output", "");
            return `    "${key}": {\n      "port": "${portId}",\n      "input": ${isInput}\n    },`;
        } else {
            return `    "${key}": {\n      "block": "${blockId}"\n    },`;
        }
    }).join("\n");


    layerPattern = `
{
  "name": "${displayName}",
  "controllerIds": "${controllerID}",
  "layout": [
    [
${layerStr}
    ]
  ],
  "key": {
${keyStr.slice(0, -1)} // Remove the last comma for valid JSON
  }
}
    `;

    console.log(layerPattern);
    resetAll();
}

const Commands = Java.loadClass('net.minecraft.commands.Commands');
const CommandSourceStack = Java.loadClass('net.minecraft.commands.CommandSourceStack');
const Command = Java.loadClass('com.mojang.brigadier.Command');

//Create a command that generate the Json File 
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;


    event.register(
        Commands.literal('genjson')
            .requires(source => source.hasPermission(2)) // Niveau de permission pour exécuter cette commande (2 = tous les OPs)
            .executes(ctx => {

                const filePath = `kubejs/data/project_infinity/mm/structures/${fileName}.json`;
                try {
                    JsonIO.write(filePath, layerPattern);

                    ctx.getSource().sendSuccess(Text.of(`The JSON file was successfully generated at: ${filePath}`), false);
                } catch (e) {
                    ctx.getSource().sendFailure(Text.of(`An error occurred while generating the JSON file: ${e.message}`));
                }

                return Command.SINGLE_SUCCESS;
            })
    );
});


function setDebounceTimeout() {
    const delay = 2; // Debounce time in ticks (1 tick = 50ms)
    setTimeout(() => {
        debounce = false;
    }, delay * 50); // Convert ticks to milliseconds
}

function resetAll() {
    pos1 = null;
    pos2 = null;
    debounce = false;
    currentLayer = 0;
    layers = [];
    keyMap = {};
    firstLayerDimensions = null;
    controllerSet = false;
    usedKeys.clear();
    console.log("All data reset");
}