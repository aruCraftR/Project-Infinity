//String Mesh --> Crushed Netherrack
ServerEvents.recipes((event) => {
    const drops = {
        'mysticalagriculture:inferium_essence': 0.001,
        'minecraft:quartz': 0.005,
        'minecraft:gold_nugget': 0.05,
        'minecraft:gunpowder': 0.08,
        'minecraft:magma_cream': 0.01,
        'minecraft:blaze_powder': 0.01,
    };

    Object.entries(drops).forEach(([drops, base_chance]) => {
        event.custom({
            'type': 'exdeorum:sieve',
            'ingredient': { 'item': 'exdeorum:crushed_netherrack' },
            'mesh': `exdeorum:string_mesh`,
            'result': drops,
            'result_amount': {
                'type': 'minecraft:binomial',
                'n': 1.0,
                'p': base_chance
            }
        });
    });
});

//Flint Mesh --> Crushed Netherrack
ServerEvents.recipes((event) => {
    const drops = {
        'mysticalagriculture:inferium_essence': 0.05,
        'exdeorum:uranium_ore_chunk': 0.08,
        'exdeorum:platinum_ore_chunk': 0.08,
        'exdeorum:boron_ore_chunk': 0.08,
        'exdeorum:lithium_ore_chunk': 0.08,
        'exdeorum:iridium_ore_chunk': 0.08,
        'exdeorum:thorium_ore_chunk': 0.08,
        'exdeorum:magnesium_ore_chunk': 0.08,
        'exdeorum:crimson_nylium_spores': 0.04,
        'minecraft:quartz': 0.08,
        'exdeorum:cobalt_ore_chunk': 0.08,
        'minecraft:gold_nugget': 0.10,
        'minecraft:gunpowder': 0.15,
        'minecraft:magma_cream': 0.07,
        'minecraft:blaze_powder': 0.03,
        'exdeorum:warped_nylium_spores': 0.04,
    };

    Object.entries(drops).forEach(([drops, base_chance]) => {
        event.custom({
            'type': 'exdeorum:sieve',
            'ingredient': { 'item': 'exdeorum:crushed_netherrack' },
            'mesh': `exdeorum:flint_mesh`,
            'result': drops,
            'result_amount': {
                'type': 'minecraft:binomial',
                'n': 1.0,
                'p': base_chance
            }
        });
    });
});

//Iron Mesh --> Crushed Netherrack
ServerEvents.recipes((event) => {
    const drops = {
        'mysticalagriculture:inferium_essence': 0.10,
        'exdeorum:uranium_ore_chunk': 0.15,
        'exdeorum:platinum_ore_chunk': 0.15,
        'exdeorum:boron_ore_chunk': 0.15,
        'exdeorum:lithium_ore_chunk': 0.15,
        'exdeorum:iridium_ore_chunk': 0.15,
        'exdeorum:thorium_ore_chunk': 0.15,
        'exdeorum:magnesium_ore_chunk': 0.15,
        'exdeorum:crimson_nylium_spores': 0.09,
        'minecraft:quartz': 0.20,
        'exdeorum:cobalt_ore_chunk': 0.15,
        'minecraft:gold_nugget': 0.25,
        'minecraft:gunpowder': 0.23,
        'minecraft:magma_cream': 0.13,
        'minecraft:blaze_powder': 0.10,
        'exdeorum:warped_nylium_spores': 0.09,
    };

    Object.entries(drops).forEach(([drops, base_chance]) => {
        event.custom({
            'type': 'exdeorum:sieve',
            'ingredient': { 'item': 'exdeorum:crushed_netherrack' },
            'mesh': `exdeorum:iron_mesh`,
            'result': drops,
            'result_amount': {
                'type': 'minecraft:binomial',
                'n': 1.0,
                'p': base_chance
            }
        });
    });
});

//Golden Mesh --> Crushed Netherrack
ServerEvents.recipes((event) => {
    const drops = {
        'mysticalagriculture:inferium_essence': 0.15,
        'exdeorum:uranium_ore_chunk': 0.22,
        'exdeorum:platinum_ore_chunk': 0.22,
        'exdeorum:boron_ore_chunk': 0.22,
        'exdeorum:lithium_ore_chunk': 0.22,
        'exdeorum:iridium_ore_chunk': 0.22,
        'exdeorum:thorium_ore_chunk': 0.22,
        'exdeorum:magnesium_ore_chunk': 0.22,
        'exdeorum:crimson_nylium_spores': 0.15,
        'minecraft:quartz': 0.30,
        'exdeorum:cobalt_ore_chunk': 0.22,
        'minecraft:gold_nugget': 0.35,
        'minecraft:gunpowder': 0.35,
        'minecraft:magma_cream': 0.20,
        'minecraft:blaze_powder': 0.19,
        'exdeorum:warped_nylium_spores': 0.15,
    };

    Object.entries(drops).forEach(([drops, base_chance]) => {
        event.custom({
            'type': 'exdeorum:sieve',
            'ingredient': { 'item': 'exdeorum:crushed_netherrack' },
            'mesh': `exdeorum:golden_mesh`,
            'result': drops,
            'result_amount': {
                'type': 'minecraft:binomial',
                'n': 1.0,
                'p': base_chance
            }
        });
    });
});

//Diamond Mesh --> Crushed Netherrack
ServerEvents.recipes((event) => {
    const drops = {
        'mysticalagriculture:inferium_essence': 0.35,
        'exdeorum:uranium_ore_chunk': 0.30,
        'exdeorum:platinum_ore_chunk': 0.30,
        'exdeorum:boron_ore_chunk': 0.30,
        'exdeorum:lithium_ore_chunk': 0.30,
        'exdeorum:iridium_ore_chunk': 0.30,
        'exdeorum:thorium_ore_chunk': 0.30,
        'exdeorum:magnesium_ore_chunk': 0.30,
        'exdeorum:crimson_nylium_spores': 0.25,
        'minecraft:quartz': 0.35,
        'exdeorum:cobalt_ore_chunk': 0.30,
        'minecraft:gold_nugget': 0.45,
        'minecraft:gunpowder': 0.45,
        'minecraft:magma_cream': 0.25,
        'minecraft:blaze_powder': 0.22,
        'exdeorum:warped_nylium_spores': 0.25,
    };

    Object.entries(drops).forEach(([drops, base_chance]) => {
        event.custom({
            'type': 'exdeorum:sieve',
            'ingredient': { 'item': 'exdeorum:crushed_netherrack' },
            'mesh': `exdeorum:diamond_mesh`,
            'result': drops,
            'result_amount': {
                'type': 'minecraft:binomial',
                'n': 1.0,
                'p': base_chance
            }
        });
    });
});

//Netherite Mesh --> Crushed Netherrack
ServerEvents.recipes((event) => {
    const drops = {
        'mysticalagriculture:inferium_essence': 0.45,
        'exdeorum:uranium_ore_chunk': 0.40,
        'exdeorum:platinum_ore_chunk': 0.40,
        'exdeorum:boron_ore_chunk': 0.40,
        'exdeorum:lithium_ore_chunk': 0.40,
        'exdeorum:iridium_ore_chunk': 0.40,
        'exdeorum:thorium_ore_chunk': 0.40,
        'exdeorum:magnesium_ore_chunk': 0.40,
        'exdeorum:crimson_nylium_spores': 0.01,
        'minecraft:quartz': 0.40,
        'exdeorum:cobalt_ore_chunk': 0.40,
        'minecraft:gold_nugget': 0.55,
        'minecraft:gunpowder': 0.50,
        'minecraft:magma_cream': 0.30,
        'minecraft:blaze_powder': 0.35,
        'exdeorum:warped_nylium_spores': 0.01,
    };

    Object.entries(drops).forEach(([drops, base_chance]) => {
        event.custom({
            'type': 'exdeorum:sieve',
            'ingredient': { 'item': 'exdeorum:crushed_netherrack' },
            'mesh': `exdeorum:netherite_mesh`,
            'result': drops,
            'result_amount': {
                'type': 'minecraft:binomial',
                'n': 1.0,
                'p': base_chance
            }
        });
    });
});

//Allthemodium Mesh --> Crushed Netherrack
ServerEvents.recipes((event) => {
    const drops = {
        'mysticalagriculture:inferium_essence': 0.60,
        'exdeorum:uranium_ore_chunk': 0.50,
        'exdeorum:platinum_ore_chunk': 0.50,
        'exdeorum:boron_ore_chunk': 0.50,
        'exdeorum:lithium_ore_chunk': 0.50,
        'exdeorum:iridium_ore_chunk': 0.50,
        'exdeorum:thorium_ore_chunk': 0.50,
        'exdeorum:magnesium_ore_chunk': 0.50,
        'exdeorum:crimson_nylium_spores': 0.01,
        'minecraft:quartz': 0.50,
        'exdeorum:cobalt_ore_chunk': 0.50,
        'minecraft:gold_nugget': 0.65,
        'minecraft:gunpowder': 0.60,
        'minecraft:magma_cream': 0.40,
        'minecraft:blaze_powder': 0.45,
        'exdeorum:warped_nylium_spores': 0.02,
    };

    Object.entries(drops).forEach(([drops, base_chance]) => {
        event.custom({
            'type': 'exdeorum:sieve',
            'ingredient': { 'item': 'exdeorum:crushed_netherrack' },
            'mesh': `kubejs:allthemodium_mesh`,
            'result': drops,
            'result_amount': {
                'type': 'minecraft:binomial',
                'n': 1.0,
                'p': base_chance
            }
        });
    });
});

//Vibranium Mesh --> Crushed Netherrack
ServerEvents.recipes((event) => {
    const drops = {
        'mysticalagriculture:inferium_essence': 0.75,
        'exdeorum:uranium_ore_chunk': 0.60,
        'exdeorum:platinum_ore_chunk': 0.60,
        'exdeorum:boron_ore_chunk': 0.60,
        'exdeorum:lithium_ore_chunk': 0.60,
        'exdeorum:iridium_ore_chunk': 0.60,
        'exdeorum:thorium_ore_chunk': 0.60,
        'exdeorum:magnesium_ore_chunk': 0.60,
        'exdeorum:crimson_nylium_spores': 0.01,
        'minecraft:quartz': 0.60,
        'exdeorum:cobalt_ore_chunk': 0.60,
        'minecraft:gold_nugget': 0.75,
        'minecraft:gunpowder': 0.65,
        'minecraft:magma_cream': 0.50,
        'minecraft:blaze_powder': 0.55,
        'exdeorum:warped_nylium_spores': 0.05,
    };

    Object.entries(drops).forEach(([drops, base_chance]) => {
        event.custom({
            'type': 'exdeorum:sieve',
            'ingredient': { 'item': 'exdeorum:crushed_netherrack' },
            'mesh': `kubejs:vibranium_mesh`,
            'result': drops,
            'result_amount': {
                'type': 'minecraft:binomial',
                'n': 1.0,
                'p': base_chance
            }
        });
    });
});