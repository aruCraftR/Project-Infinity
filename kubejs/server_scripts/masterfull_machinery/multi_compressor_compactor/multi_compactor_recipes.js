priority: 1;
const ENERGY = 50000;
const COUNT = 4;

const firstCategory = [
  "projecte:alchemical_coal",
  "projecte:mobius_fuel",
  "projecte:aeternalis_fuel",
  "projectexpansion:magenta_fuel",
  "projectexpansion:pink_fuel",
  "projectexpansion:purple_fuel",
  "projectexpansion:violet_fuel",
  "projectexpansion:blue_fuel",
  "projectexpansion:cyan_fuel",
  "projectexpansion:green_fuel",
  "projectexpansion:lime_fuel",
  "projectexpansion:yellow_fuel",
  "projectexpansion:orange_fuel",
  "projectexpansion:white_fuel",
];

const secondCategory = [
  "mysticalagriculture:prudentium_essence",
  "mysticalagriculture:tertium_essence",
  "mysticalagriculture:imperium_essence",
  "mysticalagriculture:supremium_essence",
  "mysticalagriculture:awakened_supremium_essence",
  "mysticalagradditions:insanium_essence",
  "mysticalexpansion:extremium_essence",
  "mysticalexpansion:etherium_essence",
  "mysticalexpansion:divinium_essence",
];

MMEvents.createProcesses(event => {
  createSingleRecipe(event, "minecraft:coal", firstCategory[0]);
  for (let i = 0; i < firstCategory.length - 1; i++) {
    createSingleRecipe(event, firstCategory[i], firstCategory[i + 1]);
  }

  createSingleRecipe(
    event,
    "mysticalagriculture:inferium_essence",
    secondCategory[0]
  );
  for (let i = 0; i < secondCategory.length - 1; i++) {
    const input = secondCategory[i];
    const output = secondCategory[i + 1];

    if (output === "mysticalagradditions:insanium_essence") {
      createSingleRecipe(
        event,
        "mysticalagriculture:supremium_essence",
        output
      );
    } else {
      createSingleRecipe(event, input, output);
    }
  }
});

function createSingleRecipe(event, input, output) {
  const sanitizedOutput = output.replace(":", "_");
  event
    .create(`mm:multi_compactor_${sanitizedOutput}`)
    .structureId("mm:multi_compactor_structure")
    .ticks(8)
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:item",
        item: input,
        count: COUNT,
      },
    })
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:energy",
        amount: ENERGY,
      },
    })
    .output({
      type: "mm:output/simple",
      ingredient: {
        type: "mm:item",
        item: output,
        count: 1,
      },
    });
}
