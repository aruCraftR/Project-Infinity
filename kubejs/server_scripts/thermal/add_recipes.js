ServerEvents.recipes(event => {
  event.recipes.thermal.crucible(
    Fluid.of('kubejs:molten_basalz', 1000),
    'thermal:basalz_rod'
  )
  event.recipes.thermal.crucible(
    Fluid.of('kubejs:molten_blizz', 1000),
    'thermal:blizz_rod'
  )
  event.recipes.thermal.crucible(
    Fluid.of('kubejs:molten_blitz', 1000),
    'thermal:blitz_rod'
  )

  event.recipes.thermal.smelter('kubejs:infinity_2', ['3x kubejs:infinity_1', 'enderio:vibrant_alloy_block', 'mekanism:alloy_atomic'])

  event.recipes.thermal.press('kubejs:infinity_3', '9x kubejs:infinity_2').id('kubejs:infinity_3_2')

  event.recipes.thermal.pulverizer('kubejs:azure_electrum_dust', 'kubejs:azure_electrum_ingot')
  event.recipes.thermal.pulverizer('kubejs:blaze_gold_dust', 'kubejs:blaze_gold_ingot')
  event.recipes.thermal.pulverizer('kubejs:azure_silver_dust', 'kubejs:azure_silver_ingot')

  event.recipes.thermal
    .bottler('kubejs:infinity_5', [
      Fluid.of('kubejs:molten_basalz', 500),
      '3x kubejs:infinity_4'
    ])
    .energy(10000)
  event.recipes.thermal
    .bottler('kubejs:infinity_6', [
      Fluid.of('kubejs:molten_blizz', 500),
      '3x kubejs:infinity_5'
    ])
    .energy(10000)
  event.recipes.thermal
    .bottler('kubejs:infinity_7', [
      Fluid.of('kubejs:molten_blitz', 500),
      '3x kubejs:infinity_6'
    ])
    .energy(10000)


  const ingots = [
    'common_ore_library:cobalt_ingot',
    'common_ore_library:iridium_ingot',
    'common_ore_library:platinum_ingot',
    'common_ore_library:tungsten_ingot',
    'common_ore_library:zinc_ingot',
    'common_ore_library:brass_ingot',
    'common_ore_library:manyullyn_ingot'
  ];

  const plates = [
    'common_ore_library:cobalt_plate',
    'common_ore_library:iridium_plate',
    'common_ore_library:platinum_plate',
    'common_ore_library:tungsten_plate',
    'common_ore_library:zinc_plate',
    'common_ore_library:brass_plate',
    'common_ore_library:manyullyn_plate'
  ];

  event.recipes.thermal.press('common_ore_library:aluminum_plate', 'common_ore_library:aluminum_ingot');

  for (let i = 0; i < ingots.length; i++) {
    event.recipes.thermal.press(plates[i], ingots[i]);
  }

})
