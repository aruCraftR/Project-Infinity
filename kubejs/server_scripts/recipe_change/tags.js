ServerEvents.tags('item', event => {
  event.add('forge:plastic', 'pneumaticcraft:plastic')
  event.add('mysticalagriculture:essences', [
    'mysticalagriculture:boron_essence',
    'mysticalagriculture:cognizant_dust_essence',
    'mysticalagriculture:dark_metal_ingot_essence',
    'mysticalagriculture:iesnium_essence',
    'mysticalagriculture:ignitium_essence',
    'mysticalagriculture:niter_essence',
    'mysticalagriculture:plastic_essence',
    'mysticalagriculture:sky_steel_essence',
    'mysticalagriculture:allthemodium_essence',
    'mysticalagriculture:unobtainium_essence',
    'mysticalagriculture:vibranium_essence',
    'mysticalagriculture:plutonium_essence',
    'mysticalagriculture:lithium_essence'
  ])

  event.add('mysticalagriculture:seeds', [
    'mysticalagriculture:boron_seeds',
    'mysticalagriculture:dark_metal_ingot_seeds',
    'mysticalagriculture:niter_seeds',
    'mysticalagriculture:plastic_seeds',
    'mysticalagriculture:sky_steel_seeds',
    'mysticalagriculture:allthemodium_seeds',
    'mysticalagriculture:unobtainium_seeds',
    'mysticalagriculture:vibranium_seeds',
    'mysticalagriculture:plutonium_seeds',
    'mysticalagriculture:lithium_seeds'
  ])
  event.add('forge:clay_balls', 'minecraft:clay_ball')
  event.add('forge:fruits/chorus', 'minecraft:chorus_fruit')
  event.add('forge:vegetables/beetroot', 'minecraft:beetroot')
  event.add('forge:rubber', 'thermal:cured_rubber')

  event.add('nuclearcraft:uranium', [
    'nuclearcraft:fuel_uranium_leu_235',
    'nuclearcraft:fuel_uranium_leu_233_za',
    'nuclearcraft:fuel_uranium_leu_235_ox',
    'nuclearcraft:fuel_uranium_heu_235_ox',
    'nuclearcraft:fuel_uranium_heu_233_za',
    'nuclearcraft:fuel_uranium_heu_233',
    'nuclearcraft:fuel_uranium_leu_233',
    'nuclearcraft:fuel_uranium_leu_235_za',
    'nuclearcraft:fuel_uranium_heu_235_za',
    'nuclearcraft:fuel_uranium_heu_235',
    'nuclearcraft:fuel_uranium_leu_233_ni',
    'nuclearcraft:fuel_uranium_leu_235_ni',
    'nuclearcraft:fuel_uranium_heu_235_ni',
    'nuclearcraft:fuel_uranium_leu_233_ox',
    'nuclearcraft:fuel_uranium_heu_233_ox',
    'nuclearcraft:fuel_uranium_heu_233_ni'
  ])
})


ServerEvents.tags('block', event => {
  event.add('minecraft:beacon_base_blocks', [
    'allthemodium:vibranium_allthemodium_alloy_block',
    'allthemodium:unobtainium_allthemodium_alloy_block',
    'allthemodium:unobtainium_vibranium_alloy_block'
  ])

  event.add('draconicevolution:core_stabilizer', [
    'draconicevolution:energy_core_stabilizer',
    'draconicevolution:structure_block'
  ])
})

const hammer = [
  'thermal_extra:signalum_hammer',
  'thermal_extra:lumium_hammer',
  'thermal_extra:enderium_hammer',
  'thermal_extra:soul_infused_hammer',
  'thermal_extra:shellite_hammer',
  'thermal_extra:twinite_hammer',
  'thermal_extra:dragonsteel_hammer',
  'thermal_extra:abyssal_hammer'
]

//add Tags to Items
ServerEvents.tags('item', event => {
  hammer.forEach(hammer => {
    event.add('exdeorum:hammers', hammer)
  })
  event.add('minecraft:wooden_slabs', 'minecraft:wooden_slabs')

  event.add('exdeorum:sieve', [
    'exdeorum:oak_sieve',
    'exdeorum:spruce_sieve',
    'exdeorum:birch_sieve',
    'exdeorum:jungle_sieve',
    'exdeorum:acacia_sieve',
    'exdeorum:dark_oak_sieve',
    'exdeorum:mangrove_sieve',
    'exdeorum:cherry_sieve',
    'exdeorum:bamboo_sieve',
    'exdeorum:crimson_sieve',
    'exdeorum:warped_sieve',
    'exdeorum:skyroot_sieve'
  ])
})


//add Tags to Fluids
ServerEvents.tags('fluid', event => {
  event.add('forge:uranium_hexafluoride', 'mekanism:uranium_hexafluoride')
  event.add('mekanism:bio', 'mekanism:bio')
  event.add('forge:chlorine', 'mekanism:chlorine')
  event.add('mekanism:water_vapor', ['mekanism:water_vapor', 'mekanism:steam'])
  event.add('mekanism:steam', ['mekanism:water_vapor', 'mekanism:steam', 'bigreactors:steam'])
  event.add('forge:heavy_water', ['mekanism:heavy_water', 'nuclearcraft:heavy_water'])
  event.add('forge:hydrogen_chloride', 'mekanism:hydrogen_chlorine')
  event.add('forge:sulfur_trioxide', 'mekanism:sulfur_trioxide')
  event.add('minecraft:water', 'minecraft:water')
  event.add('bloodmagic:life_essence_fluid', 'bloodmagic:life_essence_fluid')
  event.add('forge:steam', ['bigreactors:steam', 'bigreactors:steam_vapor'])
})

//add Tags to Blocks
ServerEvents.tags('block', event => {
  //add_auto_sieve_tags
  //item input
  event.add('mm:auto_sieve_item_input', 'mm:tiny_item_port_input')
  event.add('mm:auto_sieve_item_input', 'mm:small_item_port_input')
  event.add('mm:auto_sieve_item_input', 'mm:normal_item_port_input')
  event.add('mm:auto_sieve_item_input', 'mm:big_item_port_input')
  event.add('mm:auto_sieve_item_input', 'mm:enormous_item_port_input')
  event.add('mm:auto_sieve_item_input', 'mm:gigantic_item_port_input')
  event.add('mm:auto_sieve_item_input', 'mm:colossal_item_port_input')
  event.add('mm:auto_sieve_item_input', 'mm:titanic_item_port_input')
  //energy input
  event.add('mm:auto_sieve_energy_input', 'mm:normal_energy_port_input')
  event.add('mm:auto_sieve_energy_input', 'mm:big_energy_port_input')
  event.add('mm:auto_sieve_energy_input', 'mm:enormous_energy_port_input')
  event.add('mm:auto_sieve_energy_input', 'mm:gigantic_energy_port_input')
  //item output
  event.add('mm:auto_sieve_item_output', 'mm:big_item_port_output')
  event.add('mm:auto_sieve_item_output', 'mm:enormous_item_port_output')
  event.add('mm:auto_sieve_item_output', 'mm:gigantic_item_port_output')
  event.add('mm:auto_sieve_item_output', 'mm:colossal_item_port_output')
  event.add('mm:auto_sieve_item_output', 'mm:titanic_item_port_output')

  //add_auto_crusher_tags
  //item input
  event.add('mm:auto_crusher_item_input', 'mm:tiny_item_port_input')
  event.add('mm:auto_crusher_item_input', 'mm:small_item_port_input')
  event.add('mm:auto_crusher_item_input', 'mm:normal_item_port_input')
  event.add('mm:auto_crusher_item_input', 'mm:big_item_port_input')
  event.add('mm:auto_crusher_item_input', 'mm:gigantic_item_port_input')
  event.add('mm:auto_crusher_item_input', 'mm:enormous_item_port_input')
  event.add('mm:auto_crusher_item_input', 'mm:colossal_item_port_input')
  event.add('mm:auto_crusher_item_input', 'mm:titanic_item_port_input')
  //item output
  event.add('mm:auto_crusher_item_output', 'mm:big_item_port_output')
  event.add('mm:auto_crusher_item_output', 'mm:enormous_item_port_output')
  event.add('mm:auto_crusher_item_output', 'mm:gigantic_item_port_output')
  event.add('mm:auto_crusher_item_output', 'mm:colossal_item_port_output')
  event.add('mm:auto_crusher_item_output', 'mm:titanic_item_port_output')
  //energy input
  event.add('mm:auto_crusher_energy_input', 'mm:tiny_energy_port_input')
  event.add('mm:auto_crusher_energy_input', 'mm:small_energy_port_input')
  event.add('mm:auto_crusher_energy_input', 'mm:normal_energy_port_input')
  event.add('mm:auto_crusher_energy_input', 'mm:big_energy_port_input')
  event.add('mm:auto_crusher_energy_input', 'mm:gigantic_energy_port_input')
  event.add('mm:auto_crusher_energy_input', 'mm:enormous_energy_port_input')

  //energy output
  event.add('mm:all_energy_output', ['mm:tiny_energy_port_output', 'mm:small_energy_port_output', 'mm:normal_energy_port_output', 'mm:big_energy_port_output', 'mm:gigantic_energy_port_output', 'mm:enormous_energy_port_output'])

  //fluid input
  event.add('mm:fluid_port_input', ['mm:small_fluid_port_input', 'mm:normal_fluid_port_input', 'mm:big_fluid_port_input', 'mm:enormous_fluid_port_input', 'mm:gigantic_fluid_port_input'])
  //fluid output
  event.add('mm:fluid_port_output', ['mm:small_fluid_port_output', 'mm:normal_fluid_port_output', 'mm:big_fluid_port_output', 'mm:enormous_fluid_port_output', 'mm:gigantic_fluid_port_output'])

  //add_auto_inscriber_tags
  //item input
  event.add('mm:auto_inscriber_item_input', ['mm:small_item_port_input', 'mm:normal_item_port_input', 'mm:big_item_port_input', 'mm:gigantic_item_port_input', 'mm:enormous_item_port_input', 'mm:colossal_item_port_input', 'mm:titanic_item_port_input'])
  //item output
  event.add('mm:auto_inscriber_item_output', ['mm:small_item_port_output', 'mm:big_item_port_output', 'mm:enormous_item_port_output', 'mm:gigantic_item_port_output', 'mm:colossal_item_port_output', 'mm:titanic_item_port_output'])
  //energy input
  event.add('mm:auto_inscriber_energy_input', ['mm:small_energy_port_input', 'mm:normal_energy_port_input', 'mm:big_energy_port_input', 'mm:gigantic_energy_port_input', 'mm:enormous_energy_port_input'])
})