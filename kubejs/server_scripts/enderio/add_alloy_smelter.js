ServerEvents.recipes(event => {
    event.recipes.enderio.alloy_smelting(
        ('kubejs:infinity_2'),
        [Ingredient.of('kubejs:infinity_1', 3),
        ('enderio:vibrant_alloy_block'),
        ('mekanism:alloy_atomic')]
    ).energy(10000);
    event.recipes.enderio.alloy_smelting(
        ('kubejs:crystalline_alloy'),
        [('minecraft:gold_ingot'), 'enderio:pulsating_powder', 'actuallyadditions:diamatine_crystal_shard'],
    ).energy(10000);
    event.recipes.enderio.alloy_smelting(
        ('kubejs:azure_silver_ingot'),
        [('kubejs:azure_silver_ore')],
    ).energy(10000);

    event.recipes.enderio.alloy_smelting(
        ('thermal:steel_ingot'),
        [('3x minecraft:coal'), ('minecraft:iron_ingot')],
    ).energy(10000);

});
