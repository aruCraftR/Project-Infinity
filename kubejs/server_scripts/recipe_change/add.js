ServerEvents.recipes(event => {
  create323(event, '8x aether:cold_aercloud', [
    'mysticalagriculture:aercloud_essence'
  ])
  create323(event, '4x mysticalagriculture:cognizant_dust', [
    'mysticalagriculture:cognizant_dust_essence'
  ])
  create323(event, '4x born_in_chaos_v1:dark_metal_ingot', [
    'mysticalagriculture:dark_metal_ingot_essence'
  ])
  create323(event, '4x occultism:iesnium_ingot', [
    'mysticalagriculture:iesnium_essence'
  ])
  create323(event, '4x cataclysm:ignitium_ingot', [
    'mysticalagriculture:ignitium_essence'
  ])
  create323(event, 'avaritia:pileof_neutrons', [
    'mysticalagriculture:neutronium_essence'
  ])
  create323(event, '2x industrialforegoing:plastic', [
    'mysticalagriculture:plastic_essence'
  ])
  create323(event, 'allthemodium:vibranium_nugget', [
    'mysticalagriculture:vibranium_essence'
  ])
  create323(event, 'allthemodium:unobtainium_nugget', [
    'mysticalagriculture:unobtainium_essence'
  ])
  create323(event, '4x thermal:niter', ['mysticalagriculture:niter_essence'])
  create323(event, '8x nuclearcraft:boron_ingot', [
    'mysticalagriculture:boron_essence'
  ])
  create323(event, 'allthemodium:allthemodium_nugget', [
    'mysticalagriculture:allthemodium_essence'
  ])
  create323(event, 'thermal:cured_rubber', [
    'mysticalagriculture:rubber_essence'
  ])

  create3x3same(event, '4x bigreactors:yellorium_ingot', [
    'mysticalagriculture:yellorium_essence'
  ])

  create3x3(event, 'telepastries:custom_cake', [
    'minecraft:oak_log',
    'minecraft:oak_log',
    'minecraft:oak_log',
    'minecraft:oak_log',
    'minecraft:cake',
    'minecraft:oak_log',
    'minecraft:oak_log',
    'minecraft:oak_log',
    'minecraft:oak_log'
  ])

  create3x3(event, 'minecraft:bell', [
    'minecraft:gold_nugget',
    'minecraft:gold_nugget',
    'minecraft:gold_nugget',
    'minecraft:gold_nugget',
    'minecraft:cobblestone',
    'minecraft:gold_nugget',
    'minecraft:gold_nugget',
    'minecraft:gold_nugget',
    'minecraft:gold_nugget'
  ])

  create3x3(event, Item.of('sophisticatedstorage:iron_chest', '{woodType:"oak"}'), [
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'minecraft:chest',
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'minecraft:iron_ingot'
  ])

  create3x3(event, Item.of('sophisticatedstorage:gold_chest', '{woodType:"oak"}'), [
    'minecraft:gold_ingot',
    'minecraft:gold_ingot',
    'minecraft:gold_ingot',
    'minecraft:gold_ingot',
    Item.of('sophisticatedstorage:iron_chest', '{woodType:"oak"}'),
    'minecraft:gold_ingot',
    'minecraft:gold_ingot',
    'minecraft:gold_ingot',
    'minecraft:gold_ingot'
  ])

  create3x3(event, Item.of('sophisticatedstorage:diamond_chest', '{woodType:"oak"}'), [
    'minecraft:diamond',
    'minecraft:diamond',
    'minecraft:diamond',
    'minecraft:diamond',
    Item.of('sophisticatedstorage:gold_chest', '{woodType:"oak"}'),
    'minecraft:diamond',
    'minecraft:diamond',
    'minecraft:diamond',
    'minecraft:diamond'
  ])

  shapeless(event, Item.of('sophisticatedstorage:netherite_chest', '{woodType:"oak"}'), [
    'minecraft:netherite_ingot', Item.of('sophisticatedstorage:diamond_chest', '{woodType:"oak"}')
  ])

  shapeless(event, 'compactmekanismmachines:compressed_wind_generator_x532480', [
    'compactmekanismmachines:compressed_wind_generator_x131072',
    'compactmekanismmachines:compressed_wind_generator_x131072',
    'kubejs:infinity_10'
  ])

  create3x3(event, 'kubejs:chaotic_essence', [
    'draconicevolution:medium_chaos_frag',
    'draconicevolution:medium_chaos_frag',
    'draconicevolution:medium_chaos_frag',
    'draconicevolution:medium_chaos_frag',
    'draconicevolution:large_chaos_frag',
    'draconicevolution:medium_chaos_frag',
    'draconicevolution:medium_chaos_frag',
    'draconicevolution:medium_chaos_frag',
    'draconicevolution:medium_chaos_frag'
  ])

  create3x3(event, 'mekanismgenerators:wind_generator', [
    'minecraft:iron_ingot',
    'mekanism:ingot_osmium',
    'minecraft:iron_ingot',
    'mekanism:ingot_osmium',
    'mekanism:alloy_infused',
    'mekanism:ingot_osmium',
    'mekanism:alloy_infused',
    'mekanism:basic_control_circuit',
    'mekanism:alloy_infused'
  ])

  shapeless(event, 'kubejs:vibranium_mesh', [
    'cataclysm:ignitium_upgrade_smithing_template',
    'kubejs:allthemodium_mesh',
    'allthemodium:vibranium_nugget'
  ])

  shapeless(event, '8x ironfurnaces:rainbow_plating', [
    'ironfurnaces:item_xmas',
    'ironfurnaces:iron_furnace',
    'ironfurnaces:gold_furnace',
    'ironfurnaces:diamond_furnace',
    'ironfurnaces:emerald_furnace',
    'ironfurnaces:obsidian_furnace',
    'ironfurnaces:crystal_furnace',
    'ironfurnaces:netherite_furnace'
  ])

  create3x3(event, 'ironfurnaces:rainbow_core', [
    'minecraft:red_stained_glass',
    'minecraft:orange_stained_glass',
    'minecraft:yellow_stained_glass',
    'ironfurnaces:allthemodium_furnace',
    'ironfurnaces:vibranium_furnace',
    'ironfurnaces:unobtainium_furnace',
    'minecraft:blue_stained_glass',
    'minecraft:purple_stained_glass',
    'minecraft:magenta_stained_glass'
  ])

  shapeless(event, 'kubejs:allthemodium_mesh', [
    'born_in_chaos_v1:dark_upgrade',
    'exdeorum:netherite_mesh',
    'allthemodium:allthemodium_nugget'
  ])

  event.smelting('armorplus:lava_crystal', 'armorplus:ore_lava_crystal_stone')
  event.smelting('armorplus:frost_crystal', 'armorplus:ore_frost_crystal_stone')
  event.smelting('2x armorplus:lava_crystal', 'armorplus:ore_lava_crystal')
  event.smelting('2x armorplus:frost_crystal', 'armorplus:ore_frost_crystal')
  event.smelting('bigreactors:benitoite_crystal', 'bigreactors:benitoite_ore')
  event.smelting(
    'born_in_chaos_v1:dark_metal_ingot',
    'born_in_chaos_v1:pileof_dark_metal'
  )
  event.smelting(
    'actuallyadditions:black_quartz',
    'botania:quartz_dark'
  )

  event.smelting(
    'chisel_chipped_integration:technical_fan',
    'chisel_chipped_integration:technical_caution_framed_plates'
  )

  event.smelting('chisel_chipped_integration:factory_blue_framed_circuit',
    'chisel_chipped_integration:factory_dotted_rusty_plate'
  )

  create3x3(event, 'mm:tiny_item_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:small_item_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:tiny_item_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:normal_item_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:small_item_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:big_item_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:normal_item_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:enormous_item_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:big_item_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:gigantic_item_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:enormous_item_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:colossal_item_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:gigantic_item_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:titanic_item_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:colossal_item_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:tiny_item_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:small_item_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:tiny_item_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:normal_item_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:small_item_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:big_item_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:normal_item_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:enormous_item_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:big_item_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:gigantic_item_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:enormous_item_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:colossal_item_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:gigantic_item_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:titanic_item_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:colossal_item_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:chest',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:small_fluid_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:bucket',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:normal_fluid_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:bucket',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:small_fluid_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:big_fluid_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:bucket',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:normal_fluid_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:enormous_fluid_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:bucket',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:big_fluid_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:gigantic_fluid_port_input', [
    '#forge:ingots/cobalt',
    'minecraft:bucket',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:enormous_fluid_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:small_fluid_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:bucket',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:normal_fluid_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:small_fluid_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:bucket',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:big_fluid_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:normal_fluid_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:bucket',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:enormous_fluid_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:big_fluid_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:bucket',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:gigantic_fluid_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:enormous_fluid_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:bucket',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:tiny_energy_port_input', [
    '#forge:ingots/cobalt',
    'enderio:conductive_conduit',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:small_energy_port_input', [
    '#forge:ingots/cobalt',
    'enderio:conductive_conduit',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:tiny_energy_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:normal_energy_port_input', [
    '#forge:ingots/cobalt',
    'enderio:enderium_conduit',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:small_energy_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:big_energy_port_input', [
    '#forge:ingots/cobalt',
    'enderio:enderium_conduit',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:normal_energy_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:enormous_energy_port_input', [
    '#forge:ingots/cobalt',
    'enderio:sculk_superconductor_conduit',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:big_energy_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:gigantic_energy_port_input', [
    '#forge:ingots/cobalt',
    'enderio:sculk_superconductor_conduit',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:enormous_energy_port_input',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:tiny_energy_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'enderio:conductive_conduit',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:small_energy_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:tiny_energy_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'enderio:conductive_conduit',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:normal_energy_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:small_energy_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'enderio:enderium_conduit',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:big_energy_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:normal_energy_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'enderio:enderium_conduit',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:enormous_energy_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:big_energy_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'enderio:sculk_superconductor_conduit',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:gigantic_energy_port_output', [
    '#forge:ingots/cobalt',
    'minecraft:hopper',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'mm:enormous_energy_port_output',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'enderio:sculk_superconductor_conduit',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:colossal_gas_port_input', [
    '#forge:ingots/cobalt',
    'mekanism:basic_chemical_tank',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'mekanism:upgrade_gas',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:colossal_gas_port_output', [
    '#forge:ingots/cobalt',
    'mekanism:upgrade_gas',
    '#forge:ingots/cobalt',
    'minecraft:redstone',
    'minecraft:diamond',
    'minecraft:redstone',
    '#forge:ingots/cobalt',
    'mekanism:basic_chemical_tank',
    '#forge:ingots/cobalt'
  ])

  create3x3(event, 'mm:auto_crusher_controller', [
    'thermal:redstone_servo',
    'mekanism:ultimate_crushing_factory',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'actuallyadditions:crusher_double',
    'thermal:redstone_servo'
  ])

  create3x3(event, 'mm:event_horizon_antimatter_synthesizer_controller', [
    'thermal:redstone_servo',
    'evolvedmekanism:quantum_purifying_factory',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'mekanism:antiprotonic_nucleosynthesizer',
    'thermal:redstone_servo'
  ])

  create3x3(event, 'mm:multi_compressor_controller', [
    'thermal:redstone_servo',
    'functionalstorage:compacting_drawer',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'compacter:compacter',
    'thermal:redstone_servo'
  ])

  create3x3(event, 'mm:infinity_crucible_controller', [
    'thermal:redstone_servo',
    'kubejs:starmetal_block',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'dimdoors:black_fabric',
    'thermal:redstone_servo'
  ])

  create3x3(event, 'mm:pinky_controller', [
    'thermal:redstone_servo',
    'industrialforegoing:pink_slime_ingot',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'industrialforegoing:dissolution_chamber',
    'thermal:redstone_servo'
  ])

  create3x3(event, 'mm:advanced_awakening_altar_controller', [
    'thermal:redstone_servo',
    'draconicevolution:awakened_draconium_block',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'mysticalagriculture:awakening_altar',
    'thermal:redstone_servo'
  ])

  create3x3(event, 'mm:auto_sieve_controller', [
    'thermal:redstone_servo',
    '#exdeorum:sieve',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'exdeorum:mechanical_sieve',
    'thermal:redstone_servo'
  ])

  create3x3(event, 'mm:fire_attuned_controller', [
    'thermal:redstone_servo',
    'occultism:spirit_attuned_gem',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'occultism:purified_ink',
    'thermal:redstone_servo'
  ])

  create3x3(event, 'mm:mechanical_empowerer_controller', [
    'thermal:redstone_servo',
    'actuallyadditions:empowered_emeradic_crystal_block',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'actuallyadditions:empowered_diamatine_crystal_block',
    'thermal:redstone_servo'
  ])

  create3x3(event, 'mm:water_condenser_controller', [
    'thermal:redstone_servo',
    'industrialforegoing:simple_black_hole_tank',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'mekanism:elite_fluid_tank',
    'thermal:redstone_servo'
  ])

  create3x3(event, 'mm:fission_reactor_controller', [
    'thermal:redstone_servo',
    'nuclearcraft:decay_hastener',
    'thermal:rf_coil',
    'common_ore_library:cobalt_block',
    'botania:elementium_ingot',
    'common_ore_library:cobalt_block',
    'thermal:rf_coil',
    'nuclearcraft:basic_electric_circuit',
    'thermal:redstone_servo'
  ])


  shapeless(event, 'minecraft:wheat_seeds', ['minecraft:wheat'])
  event.shapeless('thermal:steel_ingot', ['minecraft:iron_ingot', 'minecraft:coal', 'minecraft:coal', 'minecraft:coal', 'minecraft:coal', '#exdeorum:hammers']).damageIngredient('#exdeorum:hammers', 1)
  shapeless(event, 'cyclic:gem_obsidian', ['cyclic:gem_amber', 'minecraft:amethyst_block', 'minecraft:emerald', 'tconstruct:earth_slime_bucket'])
  shapeless(event, 'cyclic:gem_obsidian', ['cyclic:gem_amber', 'minecraft:chorus_fruit', 'minecraft:emerald', 'tconstruct:earth_slime_bucket'])
  shapeless(event, 'cyclic:gem_obsidian', ['cyclic:gem_amber', 'minecraft:obsidian', 'minecraft:wither_rose', 'tconstruct:earth_slime_bucket'])
  shapeless(event, '2x cyclic:gem_amber', ['tconstruct:magma_bucket', 'minecraft:fire_charge', 'minecraft:redstone_block', 'minecraft:gold_ingot'])
  shapeless(event, '2x cyclic:gem_amber', ['tconstruct:honey_bucket', 'minecraft:fire_charge', 'minecraft:magma_block', 'minecraft:redstone'])
  create3x3same(event, 'kubejs:sculk_alloy_block', ['kubejs:sculk_alloy_ingot'])
  shapeless(event, '9x kubejs:sculk_alloy_ingot', ['kubejs:sculk_alloy_block'])
  create3x3(event, 'cobblefordays:tier_2', [
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:water_bucket',
    'cobblefordays:tier_1',
    'minecraft:lava_bucket',
    'minecraft:cobblestone',
    'minecraft:cobblestone',
    'minecraft:cobblestone'
  ])
  create3x3(event, 'cobblefordays:tier_3', [
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'minecraft:water_bucket',
    'cobblefordays:tier_2',
    'minecraft:lava_bucket',
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'minecraft:iron_ingot'
  ])
  create3x3(event, 'cobblefordays:tier_4', [
    'minecraft:gold_ingot',
    'minecraft:gold_ingot',
    'minecraft:gold_ingot',
    'minecraft:water_bucket',
    'cobblefordays:tier_3',
    'minecraft:lava_bucket',
    'minecraft:gold_ingot',
    'minecraft:gold_ingot',
    'minecraft:gold_ingot'
  ])
  create3x3(event, 'cobblefordays:tier_5', [
    'minecraft:diamond',
    'minecraft:diamond',
    'minecraft:diamond',
    'minecraft:water_bucket',
    'cobblefordays:tier_4',
    'minecraft:lava_bucket',
    'minecraft:diamond',
    'minecraft:diamond',
    'minecraft:diamond'
  ])

  event.smelting('armorplus:ender_dragon_scale', 'minecraft:dragon_egg')
  event.smelting('4x dimdoors:world_thread', 'nuclearcraft:neutronium_ingot')
  shapeless(event, 'actuallyadditions:ender_star', ['minecraft:nether_star', 'minecraft:dragon_breath', 'actuallyadditions:black_quartz', 'minecraft:prismarine_shard'])

  event.smelting('kubejs:starmetal_ingot', 'kubejs:starmetal_dust')
  shapeless(event, '3x kubejs:starmetal_dust', [
    'kubejs:blaze_gold_dust',
    '2x kubejs:azure_silver_dust',
    'kubejs:azure_electrum_dust',
    'dimensionalpocketsii:nether_star_shard'
  ])

  create2x2(event, 'advanced_ae:adv_pattern_provider_upgrade', [
    'minecraft:iron_ingot',
    'ae2:capacity_card',
    'ae2:capacity_card',
    'ae2:engineering_processor'
  ])

  create2x2same(event, 'kubejs:starmetal_block', ['kubejs:starmetal_ingot'])

  create2x2same(event, 'kubejs:chaotic_essence_block', ['kubejs:chaotic_essence'])
  create2x2same(event, 'actuallyadditions:black_quartz_brick_block', ['actuallyadditions:black_quartz_block'])

  create2x2(event, 'advanced_ae:adv_pattern_provider_capacity_upgrade', [
    'minecraft:iron_ingot',
    'minecraft:redstone',
    'minecraft:ender_pearl',
    'ae2:logic_processor'
  ])

  create2x2same(event, 'common_ore_library:zinc_ore', ['exdeorum:zinc_ore_chunk'])
  create2x2same(event, 'common_ore_library:aluminum_ore', ['exdeorum:aluminum_ore_chunk'])
  create2x2same(event, 'thermal:nickel_ore', ['exdeorum:nickel_ore_chunk'])
  create2x2same(event, 'thermal:silver_ore', ['exdeorum:silver_ore_chunk'])
  create2x2same(event, 'thermal:lead_ore', ['exdeorum:lead_ore_chunk'])
  create2x2same(event, 'thermal:tin_ore', ['exdeorum:tin_ore_chunk'])
  create2x2same(event, 'mekanism:osmium_ore', ['exdeorum:osmium_ore_chunk'])
  create2x2same(event, 'common_ore_library:cobalt_ore', ['exdeorum:cobalt_ore_chunk'])
  create2x2same(event, 'common_ore_library:platinum_ore', ['exdeorum:platinum_ore_chunk'])
  create2x2same(event, 'mekanism:uranium_ore', ['exdeorum:uranium_ore_chunk'])
  create2x2same(event, 'common_ore_library:iridium_ore', ['exdeorum:iridium_ore_chunk'])

  create3x3(event, 'advanced_ae:adv_processing_pattern', [
    'ae2:charged_certus_quartz_crystal',
    'minecraft:redstone',
    'ae2:charged_certus_quartz_crystal',
    'ae2:blank_pattern',
    'advanced_ae:quantum_processor',
    'ae2:blank_pattern',
    'ae2:charged_certus_quartz_crystal',
    'minecraft:redstone',
    'ae2:charged_certus_quartz_crystal'
  ])

  create3x3(event, 'projectexpansion:basic_emc_link', [
    'projecte:low_covalence_dust',
    'projecte:medium_covalence_dust',
    'projecte:high_covalence_dust',
    'projecte:aeternalis_fuel',
    'projecte:alchemical_chest',
    'projecte:aeternalis_fuel',
    'projecte:high_covalence_dust',
    'projecte:medium_covalence_dust',
    'projecte:low_covalence_dust'
  ])

  create3x3(event, 'telepastries:lost_city_cake', [
    'minecraft:skeleton_skull',
    'minecraft:diamond_block',
    'minecraft:skeleton_skull',
    'minecraft:white_bed',
    'minecraft:cake',
    'minecraft:skeleton_skull',
    'minecraft:skeleton_skull',
    'minecraft:diamond_block',
    'minecraft:skeleton_skull'

  ])

  create3x3(event, 'allthemodium:teleport_pad', [
    'cyclic:netherite_pressure_plate',
    'allthemodium:vibranium_nugget',
    'cyclic:netherite_pressure_plate',
    'allthemodium:allthemodium_nugget',
    'cataclysm:abyss_eye',
    'allthemodium:allthemodium_nugget',
    'cyclic:netherite_pressure_plate',
    'allthemodium:vibranium_nugget',
    'cyclic:netherite_pressure_plate'
  ]

  )

  create3x3(event, 'industrialforegoing:mycelial_meatallurgic', [
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'industrialforegoing:meat_bucket',
    'minecraft:iron_ingot',
    'minecraft:redstone',
    'industrialforegoing:machine_frame_supreme',
    'minecraft:redstone'
  ])

  create3x3(event, 'advanced_ae:flight_card', [
    'advanced_ae:quantum_alloy_plate',
    Item.of('minecraft:elytra', '{Damage:0}'),
    'advanced_ae:quantum_alloy_plate',
    'minecraft:feather',
    'advanced_ae:quantum_upgrade_base',
    'minecraft:feather',
    'advanced_ae:quantum_alloy_plate',
    'kubejs:infinity_4',
    'advanced_ae:quantum_alloy_plate'
  ])

  event.smelting('kubejs:arcmetal_ingot', 'kubejs:raw_arcmetal')
  event.smelting('kubejs:arcmetal_ingot', 'kubejs:arcmetal_ore')
  create3x3same(event, 'kubejs:arcmetal_block', ['kubejs:arcmetal_ingot'])
  shapeless(event, '9x kubejs:arcmetal_ingot', ['kubejs:arcmetal_block'])

  event.smelting('kubejs:voidmetal_ingot', 'kubejs:raw_voidmetal')
  event.smelting('kubejs:voidmetal_ingot', 'kubejs:voidmetal_ore')
  create3x3same(event, 'kubejs:voidmetal_block', ['kubejs:voidmetal_ingot'])
  shapeless(event, '9x kubejs:voidmetal_ingot', ['kubejs:voidmetal_block'])

  create3x3(event, 'kubejs:bunny_steel_ingot', [
    'minecraft:air',
    'minecraft:rabbit_hide',
    'minecraft:air',
    'minecraft:rabbit_foot',
    '#forge:ingots/steel',
    'minecraft:rabbit_hide',
    'minecraft:air',
    'minecraft:rabbit_hide',
    'minecraft:air'
  ])
  create3x3same(event, '9x botania:life_essence', ['mysticalagriculture:gaia_spirit_essence'])
  create3x3same(event, 'allthemodium:unobtainium_ingot', ['allthemodium:unobtainium_nugget'])
  create3x3same(event, 'cataclysm:enderite_block', ['cataclysm:enderite_ingot'])
  shapeless(event, '9x cataclysm:enderite_ingot', ['cataclysm:enderite_block'])
  create3x3(event, Item.of('kubejs:tyrian_steel_ingot', 4), [
    'thermal_extra:twinite_dust',
    'thermal_extra:dragonsteel_dust',
    'thermal_extra:abyssal_dust',
    'kubejs:azure_electrum_ingot',
    'minecraft:netherite_scrap',
    'kubejs:crimson_steel_ingot',
    'kubejs:azure_electrum_ingot',
    'waystones:warp_dust',
    'kubejs:crimson_steel_ingot'
  ])

  create3x3(event, Item.of('kubejs:crimson_steel_ingot', 2), [
    'minecraft:blaze_rod',
    'minecraft:air',
    'minecraft:blaze_rod',
    'kubejs:crimson_iron_ingot',
    'minecraft:magma_cream',
    'kubejs:crimson_iron_ingot',
    'kubejs:crimson_iron_ingot',
    'minecraft:air',
    'kubejs:crimson_iron_ingot'
  ])
  event.smelting('kubejs:crimson_steel_ingot', 'kubejs:crimson_steel_dust')


  event.smelting('kubejs:crimson_iron_ingot', 'kubejs:crimson_iron_dust')

  create3x3(event, 'kubejs:midnight_iron_ingot', [
    'minecraft:air',
    'minecraft:blackstone',
    'minecraft:air',
    'minecraft:blackstone',
    'minecraft:iron_ingot',
    'minecraft:blackstone',
    'minecraft:air',
    'minecraft:blackstone',
    'minecraft:air'
  ])
  create3x3same(event, 'kubejs:midnight_iron_block', [
    'kubejs:midnight_iron_ingot'
  ])
  shapeless(event, '9x kubejs:midnight_iron_ingot', [
    'kubejs:midnight_iron_block'
  ])

  create3x3same(event, 'kubejs:bunny_steel_block', ['kubejs:bunny_steel_ingot'])
  shapeless(event, '9x kubejs:bunny_steel_ingot', ['kubejs:bunny_steel_block'])

  event.smelting('kubejs:solarmetal_ingot', 'kubejs:raw_solarmetal')
  event.smelting('kubejs:solarmetal_ingot', 'kubejs:solarmetal_ore')
  create3x3same(event, 'kubejs:solarmetal_block', ['kubejs:solarmetal_ingot'])
  shapeless(event, '9x kubejs:solarmetal_ingot', ['kubejs:solarmetal_block'])

  event.smelting('kubejs:plasteel_ingot', 'kubejs:raw_plasteel')
  event.smelting('kubejs:plasteel_ingot', 'kubejs:plasteel_ore')
  create3x3same(event, 'kubejs:plasteel_block', ['kubejs:plasteel_ingot'])
  shapeless(event, '9x kubejs:plasteel_ingot', ['kubejs:plasteel_block'])

  shapeless(event, 'kubejs:blaze_gold_ingot', [
    'minecraft:gold_ingot',
    '4x minecraft:blaze_powder'
  ])
  create3x3same(event, 'kubejs:blaze_gold_block', ['kubejs:blaze_gold_ingot'])
  shapeless(event, '9x kubejs:blaze_gold_ingot', ['kubejs:blaze_gold_block'])

  event.smelting('kubejs:azure_silver_ingot', 'kubejs:azure_silver_ore')
  create3x3same(event, 'kubejs:azure_silver_block', [
    'kubejs:azure_silver_ingot'
  ])
  shapeless(event, '9x kubejs:azure_silver_ingot', [
    'kubejs:azure_silver_block'
  ])

  event.smelting('kubejs:azure_electrum_ingot', 'kubejs:azure_electrum_dust')
  create3x3same(event, 'kubejs:azure_electrum_block', [
    'kubejs:azure_electrum_ingot'
  ])
  create3x3(event, 'kubejs:azure_electrum_ingot', [
    'minecraft:gold_ingot',
    'minecraft:air',
    'minecraft:gold_ingot',
    'kubejs:azure_silver_ingot',
    'minecraft:ender_pearl',
    'kubejs:azure_silver_ingot',
    'kubejs:azure_silver_ingot',
    'minecraft:air',
    'kubejs:azure_silver_ingot'
  ])
  create3x3(event, 'rsinfinitybooster:infinity_card', [
    'minecraft:ender_eye',
    'refinedstorage:range_upgrade',
    'minecraft:ender_eye',
    'refinedstorage:range_upgrade',
    'minecraft:nether_star',
    'refinedstorage:range_upgrade',
    'minecraft:netherite_ingot',
    'minecraft:netherite_ingot',
    'minecraft:netherite_ingot'
  ])

  create3x3(event, 'rsinfinitybooster:dimension_card', [
    'rsinfinitybooster:infinity_card',
    'minecraft:nether_star',
    'rsinfinitybooster:infinity_card',
    'minecraft:nether_star',
    'minecraft:ender_eye',
    'minecraft:nether_star',
    'rsinfinitybooster:infinity_card',
    'minecraft:nether_star',
    'rsinfinitybooster:infinity_card'
  ])

  create3x3(event, 'projecte:repair_talisman', [
    'projecte:low_covalence_dust',
    'projecte:medium_covalence_dust',
    'projecte:high_covalence_dust',
    'botania:manaweave_cloth',
    'minecraft:paper',
    'botania:manaweave_cloth',
    'projecte:high_covalence_dust',
    'projecte:medium_covalence_dust',
    'projecte:low_covalence_dust'
  ])

  create3x3same(event, 'allthemodium:allthemodium_ingot', ['allthemodium:allthemodium_nugget'])
  create3x3same(event, 'kubejs:double_compressed_iron_block', ['pneumaticcraft:compressed_iron_block'])
  create3x3same(event, 'kubejs:triple_compressed_iron_block', ['kubejs:double_compressed_iron_block'])
  create3x3same(event, 'kubejs:double_compressed_slate', ['kubejs:compressed_slate'])
  create3x3same(event, 'kubejs:pink_slime_block', ['industrialforegoing:pink_slime_ingot'])
  shapeless(event, '9x industrialforegoing:pink_slime_ingot', ['kubejs:pink_slime_block'])
  shapeless(event, '9x kubejs:compressed_slate', ['kubejs:double_compressed_slate'])

  create3x3same(event, 'kubejs:compressed_slate', ['bloodmagic:blankslate'])
  shapeless(event, '9x bloodmagic:blankslate', ['kubejs:compressed_slate'])

  shapeless(event, '9x kubejs:azure_electrum_ingot', [
    'kubejs:azure_electrum_block'
  ])
  create3x3(event, Item.of('extendedcrafting:black_iron_ingot', 27), [
    'kubejs:compressed_slate',
    'mekanism:hdpe_sheet',
    'kubejs:compressed_slate',
    'mekanism:hdpe_sheet',
    'draconicevolution:wyvern_core',
    'mekanism:hdpe_sheet',
    'kubejs:compressed_slate',
    'mekanism:hdpe_sheet',
    'kubejs:compressed_slate'
  ])

  create323(event, '8x minecraft:crying_obsidian', ['minecraft:obsidian'])
  create323(event, '8x nuclearcraft:lithium_ingot', ['mysticalagriculture:lithium_essence'])
  create3x3same(event, '8x minecraft:crying_obsidian', [
    'mysticalagriculture:obsidian_essence'
  ])
  create3x3same(event, 'mekanism:pellet_plutonium', ['mysticalagriculture:plutonium_essence'])

  shapeless(event, '2x allthemodium:vibranium_allthemodium_alloy_ingot', [
    'allthemodium:allthemodium_ingot',
    'allthemodium:vibranium_ingot'
  ])
  shapeless(event, 'botanypotstiers:creative_terracotta_hopper_botany_pot', [
    'botanypotstiers:creative_terracotta_botany_pot',
    'minecraft:hopper'
  ])

  shapeless(event, 'refinedstorage:creative_storage_block', ['refinedstorage:creative_storage_disk', 'refinedstorage:machine_casing'])
  shapeless(event, 'refinedstorage:creative_fluid_storage_block', ['refinedstorage:creative_fluid_storage_disk', 'refinedstorage:machine_casing'])
  shapeless(event, 'draconicevolution:dragon_heart', ['kubejs:left_dragon_heart', 'kubejs:right_dragon_heart'])

  shapeless(event, '2x allthemodium:unobtainium_vibranium_alloy_ingot', [
    'allthemodium:unobtainium_ingot',
    'allthemodium:vibranium_ingot'
  ])
  shapeless(event, '3x minecraft:paper', ['3x exdeorum:wood_chippings'])
  shapeless(event, '2x allthemodium:unobtainium_allthemodium_alloy_ingot', [
    'allthemodium:allthemodium_ingot',
    'allthemodium:unobtainium_ingot'
  ])
  shapeless(event, 'kubejs:infinity_1', [
    'botania:terrasteel_ingot',
    'extendedcrafting:black_iron_ingot',
    'nuclearcraft:neutronium_ingot',
    'draconicevolution:awakened_core',
    'enderio:end_steel_ingot',
    'mysticalagriculture:awakened_supremium_ingot',
    'occultism:iesnium_ingot',
    'cataclysm:ignitium_ingot',
    'pneumaticcraft:plastic'
  ])
  shapeless(event, '9x kubejs:infused_coin', [
    'kubejs:ascended_coin'
  ])
  shapeless(event, Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:project_infinity"}'), ['minecraft:book', 'voidminers:rubetine'])
  shapeless(event, '9x kubejs:apotheotic_coin', [
    'kubejs:infused_coin'
  ])
  create323(event, '6x common_ore_library:manyullyn_ingot', [
    'mysticalagriculture:manyullyn_essence'
  ])
  create323(event, '6x common_ore_library:cobalt_ingot', [
    'mysticalagriculture:cobalt_essence'
  ])
  create323(event, '6x thermal:rose_gold_ingot', [
    'mysticalagriculture:rose_gold_essence'
  ])
  create323(event, '24x minecraft:basalt', [
    'mysticalagriculture:basalt_essence'
  ])
  create323(event, '24x enviromats:marble', [
    'mysticalagriculture:marble_essence'
  ])
  create323(event, '8x silentgems:peridot', [
    'mysticalagriculture:peridot_essence'
  ])
  create323(event, '4x chemlib:titanium_ingot', [
    'mysticalagriculture:titanium_essence'
  ])
  create323(event, '8x common_ore_library:tungsten_ingot', [
    'mysticalagriculture:tungsten_essence'
  ])
  create323(event, '6x bigreactors:graphite_ingot', [
    'mysticalagriculture:graphite_essence'
  ])
  create323(event, '8x common_ore_library:zinc_ingot', [
    'mysticalagriculture:zinc_essence'
  ])
  create323(event, '24x enderio:silicon', [
    'mysticalagriculture:silicon_essence'
  ])
  create3x3same(event, '24x nuclearcraft:silicon_gem', [
    'mysticalagriculture:silicon_essence'
  ])
  create323(event, '4x megacells:sky_steel_ingot', [
    'mysticalagriculture:sky_steel_essence'
  ])
  create3x3same(event, 'kubejs:ascended_coin', ['kubejs:infused_coin'])
  create3x3same(event, 'kubejs:infused_coin', ['kubejs:apotheotic_coin'])
  create3x3same(event, 'kubejs:compressed_block_of_gunpowder', ['thermal:gunpowder_block'])
  create3x3same(event, '2x pneumaticcraft:plastic', ['mysticalagriculture:plastic_essence'])
  shapeless(event, '9x thermal:gunpowder_block', ['kubejs:compressed_block_of_gunpowder'])
  create3x3(event, 'angelblockrenewed:angel_block', [
    'minecraft:stick',
    'minecraft:feather',
    'minecraft:stick',
    'minecraft:feather',
    'minecraft:ender_eye',
    'minecraft:feather',
    'minecraft:stick',
    'minecraft:feather',
    'minecraft:stick'
  ])
  create3x3(event, 'enderio:alloy_smelter', [
    'enderio:dark_steel_ingot',
    'minecraft:furnace',
    'enderio:dark_steel_ingot',
    'minecraft:furnace',
    'enderio:void_chassis',
    'minecraft:furnace',
    '#forge:gears/iron',
    'enderio:primitive_alloy_smelter',
    '#forge:gears/iron'
  ])
  create3x3(event, 'enderio:primitive_alloy_smelter', [
    'minecraft:furnace',
    'minecraft:furnace',
    'minecraft:furnace',
    '#forge:stone',
    'enderio:grains_of_infinity',
    '#forge:stone',
    '#forge:stone',
    '#forge:stone',
    '#forge:stone'
  ])
  create3x3(event, 'extendedcrafting:redstone_ingot', [
    'minecraft:iron_ingot',
    'minecraft:redstone',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
  ])

  create3x3(event, 'projecte:medium_covalence_dust', [
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
    'minecraft:redstone',
    'minecraft:air',
    'minecraft:iron_ingot',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
  ])
  create3x3(event, 'mysticalagriculture:master_infusion_crystal', [
    'mysticalagriculture:prosperity_shard',
    'kubejs:infinity_4',
    'mysticalagriculture:prosperity_shard',
    'kubejs:infinity_4',
    'matc:supremium_crystal',
    'kubejs:infinity_4',
    'mysticalagriculture:prosperity_shard',
    'kubejs:infinity_4',
    'mysticalagriculture:prosperity_shard'
  ])
  create3x3(event, 'mysticalagriculture:master_infusion_crystal', [
    'kubejs:infinity_4',
    'mysticalagriculture:prosperity_shard',
    'kubejs:infinity_4',
    'mysticalagriculture:prosperity_shard',
    'matc:supremium_crystal',
    'mysticalagriculture:prosperity_shard',
    'kubejs:infinity_4',
    'mysticalagriculture:prosperity_shard',
    'kubejs:infinity_4'
  ])
  shapeless(event, 'allthemodium:alloy_sword', [
    'allthemodium:allthemodium_sword',
    'allthemodium:vibranium_sword',
    'allthemodium:unobtainium_sword'
  ])
  shapeless(event, 'allthemodium:alloy_axe', [
    'allthemodium:unobtainium_axe',
    'allthemodium:vibranium_axe',
    'allthemodium:allthemodium_axe'
  ])
  shapeless(event, Item.of('gateways:gate_pearl', '{gateway:"gateways:emerald_grove_easy"}'), [
    'minecraft:ender_pearl',
    '#minecraft:flowers',
    '#minecraft:flowers',
    '#minecraft:flowers'
  ])
  shapeless(event, 'allthemodium:alloy_pick', [
    'allthemodium:allthemodium_pickaxe',
    'allthemodium:vibranium_pickaxe',
    'allthemodium:unobtainium_pickaxe'
  ])
  shapeless(event, 'minecraft:oak_planks', [
    'minecraft:oak_slab',
    'minecraft:oak_slab'
  ])
  shapeless(event, 'allthemodium:alloy_shovel', [
    'allthemodium:unobtainium_shovel',
    'allthemodium:vibranium_shovel',
    'allthemodium:allthemodium_shovel'
  ])
  shapeless(event, 'allthemodium:alloy_paxel', [
    'allthemodium:alloy_sword',
    'allthemodium:alloy_axe',
    'allthemodium:alloy_pick',
    'allthemodium:alloy_shovel'
  ])
  create3x3(event, 'constructionwand:infinity_wand', [
    'minecraft:air',
    'minecraft:air',
    'botania:terrasteel_ingot',
    'minecraft:air',
    'minecraft:stick',
    'minecraft:air',
    'minecraft:stick',
    'minecraft:air',
    'minecraft:air'
  ])
  shapeless(event, 'kubejs:sculk_alloy_ingot', [
    'apotheosis:warden_tendril',
    'minecraft:echo_shard',
    'minecraft:echo_shard',
    'minecraft:obsidian'
  ])
  create_conduit_craft(event, '8x enderio:conductive_conduit', [
    'enderio:conduit_binder',
    'refinedstorage:quartz_enriched_iron'
  ])
  create_conduit_craft(event, '8x enderio:energetic_conduit', [
    'enderio:conduit_binder',
    'enderio:energetic_alloy_ingot'
  ])
  create_conduit_craft(event, '8x enderio:vibrant_conduit', [
    'enderio:conduit_binder',
    'enderio:vibrant_alloy_ingot'
  ])
  create_conduit_craft(event, '8x enderio:endsteel_conduit', [
    'enderio:conduit_binder',
    'enderio:end_steel_ingot'
  ])
  create_conduit_craft(event, '8x enderio:lumium_conduit', [
    'enderio:conduit_binder',
    'thermal:lumium_ingot'
  ])
  create_conduit_craft(event, '8x enderio:signalum_conduit', [
    'enderio:conduit_binder',
    'thermal:signalum_ingot'
  ])
  create_conduit_craft(event, '8x enderio:enderium_conduit', [
    'enderio:conduit_binder',
    'thermal:enderium_ingot'
  ])
  create_conduit_craft(event, '8x enderio:sculk_superconductor_conduit', [
    'enderio:conduit_binder',
    'kubejs:sculk_alloy_ingot'
  ])
  create_conduit_craft(event, '8x enderio:energy_conduit', [
    'enderio:conduit_binder',
    'mysticalagriculture:supremium_ingot'
  ])
  create_conduit_craft2(event, '2x enderio:energetic_conduit', [
    'enderio:conduit_binder',
    'enderio:conductive_conduit',
    'enderio:energetic_alloy_ingot'
  ])
  create_conduit_craft2(event, '2x enderio:vibrant_conduit', [
    'enderio:conduit_binder',
    'enderio:energetic_conduit',
    'enderio:vibrant_alloy_ingot'
  ])
  create_conduit_craft2(event, '2x enderio:endsteel_conduit', [
    'enderio:conduit_binder',
    'enderio:vibrant_conduit',
    'enderio:end_steel_ingot'
  ])
  create_conduit_craft2(event, '2x enderio:lumium_conduit', [
    'enderio:conduit_binder',
    'enderio:endsteel_conduit',
    'thermal:lumium_ingot'
  ])
  create_conduit_craft2(event, '2x enderio:signalum_conduit', [
    'enderio:conduit_binder',
    'enderio:lumium_conduit',
    'thermal:signalum_ingot'
  ])
  create_conduit_craft2(event, '2x enderio:enderium_conduit', [
    'enderio:conduit_binder',
    'enderio:signalum_conduit',
    'thermal:enderium_ingot'
  ])
  create_conduit_craft2(event, '2x enderio:sculk_superconductor_conduit', [
    'enderio:conduit_binder',
    'enderio:enderium_conduit',
    'kubejs:sculk_alloy_ingot'
  ])
  create_conduit_craft2(event, '2x enderio:energy_conduit', [
    'enderio:conduit_binder',
    'enderio:sculk_superconductor_conduit',
    'mysticalagriculture:supremium_ingot'
  ])
  create3x3(event, 'entangled:block', [
    'minecraft:ender_pearl',
    'minecraft:obsidian',
    'minecraft:ender_pearl',
    'minecraft:obsidian',
    'dimensionalpocketsii:nether_star_shard',
    'minecraft:obsidian',
    'minecraft:ender_pearl',
    'minecraft:obsidian',
    'minecraft:ender_pearl'
  ])
  create3x3(event, 'entangled:block', [
    'minecraft:obsidian',
    'minecraft:ender_pearl',
    'minecraft:obsidian',
    'minecraft:ender_pearl',
    'dimensionalpocketsii:nether_star_shard',
    'minecraft:ender_pearl',
    'minecraft:obsidian',
    'minecraft:ender_pearl',
    'minecraft:obsidian'
  ])

  create3x3(event, 'enderio:pulsating_crystal', [
    'redstone_arsenal:flux_ingot',
    'enderio:pulsating_alloy_ingot',
    'redstone_arsenal:flux_ingot',
    'enderio:pulsating_alloy_ingot',
    'actuallyadditions:empowered_diamatine_crystal',
    'enderio:pulsating_alloy_ingot',
    'redstone_arsenal:flux_ingot',
    'enderio:pulsating_alloy_ingot',
    'redstone_arsenal:flux_ingot'
  ])
  create3x3(event, 'extendedcrafting:basic_table', [
    'extendedcrafting:basic_component',
    'extendedcrafting:basic_catalyst',
    'extendedcrafting:basic_component',
    'avaritia:double_compressed_crafting_table',
    'minecraft:iron_block',
    'avaritia:double_compressed_crafting_table',
    'extendedcrafting:basic_component',
    'extendedcrafting:black_iron_slate',
    'extendedcrafting:basic_component'
  ])
  shapeless(event, 'kubejs:azure_silver_ore', [
    '4x kubejs:azure_silver_ore_chunk'
  ])

  shapeless(event, Item.of('patchouli:guide_book', '{"patchouli:book":"cyclic:guide_book"}'), [
    'minecraft:book',
    'compressium:cobblestone_1'
  ])

  create3x3(event, 'cyclic:user', [
    'minecraft:gold_ingot',
    'minecraft:dispenser',
    'minecraft:gold_ingot',
    'minecraft:tripwire_hook',
    'compressium:cobblestone_1',
    'minecraft:tripwire_hook',
    'cyclic:flint_block',
    'cyclic:flint_block',
    'cyclic:flint_block'
  ])

  create3x3(event, 'cyclic:anvil_magma', [
    'minecraft:magma_block',
    'minecraft:magma_block',
    'minecraft:magma_block',
    'minecraft:air',
    'compressium:cobblestone_1',
    'minecraft:air',
    'minecraft:obsidian',
    'cyclic:fireball',
    'minecraft:obsidian'
  ])


  create3x3(event, 'dimensionalpocketsii:dimensional_axe', ['dimensionalpocketsii:dimensional_ingot', 'dimensionalpocketsii:dimensional_gem', 'dimensionalpocketsii:dimensional_ingot', 'minecraft:netherite_ingot', Item.of('minecraft:netherite_axe', '{Damage:0}'), 'minecraft:netherite_ingot', 'dimensionalpocketsii:dimensional_ingot', 'dimensionalpocketsii:dimensional_gem', 'dimensionalpocketsii:dimensional_ingot'])
  create3x3(event, 'dimensionalpocketsii:dimensional_shovel', ['dimensionalpocketsii:dimensional_ingot', 'dimensionalpocketsii:dimensional_gem', 'dimensionalpocketsii:dimensional_ingot', 'minecraft:netherite_ingot', Item.of('minecraft:netherite_shovel', '{Damage:0}'), 'minecraft:netherite_ingot', 'dimensionalpocketsii:dimensional_ingot', 'dimensionalpocketsii:dimensional_gem', 'dimensionalpocketsii:dimensional_ingot'])
  create3x3(event, 'dimensionalpocketsii:dimensional_sword', ['dimensionalpocketsii:dimensional_ingot', 'dimensionalpocketsii:dimensional_gem', 'dimensionalpocketsii:dimensional_ingot', 'minecraft:netherite_ingot', Item.of('minecraft:netherite_sword', '{Damage:0}'), 'minecraft:netherite_ingot', 'dimensionalpocketsii:dimensional_ingot', 'dimensionalpocketsii:dimensional_gem', 'dimensionalpocketsii:dimensional_ingot'])
  create3x3(event, 'dimensionalpocketsii:dimensional_hoe', ['dimensionalpocketsii:dimensional_ingot', 'dimensionalpocketsii:dimensional_gem', 'dimensionalpocketsii:dimensional_ingot', 'minecraft:netherite_ingot', Item.of('minecraft:netherite_hoe', '{Damage:0}'), 'minecraft:netherite_ingot', 'dimensionalpocketsii:dimensional_ingot', 'dimensionalpocketsii:dimensional_gem', 'dimensionalpocketsii:dimensional_ingot'])
  create3x3(event, 'dimensionalpocketsii:dimensional_pickaxe', ['dimensionalpocketsii:dimensional_ingot', 'dimensionalpocketsii:dimensional_gem', 'dimensionalpocketsii:dimensional_ingot', 'minecraft:netherite_ingot', Item.of('minecraft:netherite_pickaxe', '{Damage:0}'), 'minecraft:netherite_ingot', 'dimensionalpocketsii:dimensional_ingot', 'dimensionalpocketsii:dimensional_gem', 'dimensionalpocketsii:dimensional_ingot'])
  create3x3(event, 'dimensionalpocketsii:dimensional_helmet', ['dimensionalpocketsii:dimensional_ingot', 'minecraft:netherite_ingot', 'dimensionalpocketsii:dimensional_ingot', 'dimensionalpocketsii:dimensional_gem', Item.of('minecraft:netherite_helmet', '{Damage:0}'), 'dimensionalpocketsii:dimensional_gem', 'minecraft:netherite_ingot', 'dimensionalpocketsii:dimensional_ingot', 'minecraft:netherite_ingot'])
  create3x3(event, 'dimensionalpocketsii:dimensional_chestplate', ['dimensionalpocketsii:dimensional_ingot', 'minecraft:netherite_ingot', 'dimensionalpocketsii:dimensional_ingot', 'dimensionalpocketsii:dimensional_gem', Item.of('minecraft:netherite_chestplate', '{Damage:0}'), 'dimensionalpocketsii:dimensional_gem', 'minecraft:netherite_ingot', 'dimensionalpocketsii:dimensional_ingot', 'minecraft:netherite_ingot'])
  create3x3(event, 'dimensionalpocketsii:dimensional_leggings', ['dimensionalpocketsii:dimensional_ingot', 'minecraft:netherite_ingot', 'dimensionalpocketsii:dimensional_ingot', 'dimensionalpocketsii:dimensional_gem', Item.of('minecraft:netherite_leggings', '{Damage:0}'), 'dimensionalpocketsii:dimensional_gem', 'minecraft:netherite_ingot', 'dimensionalpocketsii:dimensional_ingot', 'minecraft:netherite_ingot'])
  create3x3(event, 'dimensionalpocketsii:dimensional_boots', ['dimensionalpocketsii:dimensional_ingot', 'minecraft:netherite_ingot', 'dimensionalpocketsii:dimensional_ingot', 'dimensionalpocketsii:dimensional_gem', Item.of('minecraft:netherite_boots', '{Damage:0}'), 'dimensionalpocketsii:dimensional_gem', 'minecraft:netherite_ingot', 'dimensionalpocketsii:dimensional_ingot', 'minecraft:netherite_ingot'])
  create3x3(event, 'dimensionalpocketsii:dimensional_bow', ['minecraft:air', 'minecraft:netherite_ingot', 'dimensionalpocketsii:dimensional_thread', 'dimensionalpocketsii:dimensional_ingot', Item.of('minecraft:bow', '{Damage:0}'), 'dimensionalpocketsii:dimensional_thread', 'minecraft:air', 'minecraft:netherite_ingot', 'dimensionalpocketsii:dimensional_thread'])
  create3x3(event, 'dimensionalpocketsii:dimensional_elytraplate', ['minecraft:netherite_block', 'dimensionalpocketsii:block_dimensional_gem', 'minecraft:netherite_block', 'dimensionalpocketsii:elytra_wing', Item.of('dimensionalpocketsii:dimensional_chestplate_enhanced', '{Damage:0}'), 'dimensionalpocketsii:elytra_wing', 'minecraft:blaze_powder', 'dimensionalpocketsii:dimensional_ingot', 'minecraft:blaze_powder'])



  create3x3(event, 'cyclic:harvester', [
    'minecraft:emerald',
    'cyclic:obsidian_pressure_plate',
    'minecraft:emerald',
    'compressium:cobblestone_1',
    'cyclic:biomass',
    'compressium:cobblestone_1',
    'thermal:copper_nugget',
    'thermal:copper_nugget',
    'thermal:copper_nugget'
  ])

  create3x3(event, 'cyclic:crusher', [
    'compressium:cobblestone_1',
    'thermal:copper_nugget',
    'compressium:cobblestone_1',
    'minecraft:stonecutter',
    'cyclic:flint_block',
    'minecraft:stonecutter',
    'compressium:cobblestone_1',
    'thermal:copper_nugget',
    'compressium:cobblestone_1'
  ])

  create3x3(event, 'cyclic:dropper', [
    'thermal:copper_nugget',
    'compressium:cobblestone_1',
    'thermal:copper_nugget',
    'minecraft:air',
    'minecraft:dropper',
    'minecraft:air',
    'thermal:copper_nugget',
    'minecraft:iron_ingot',
    'thermal:copper_nugget'
  ])

  event.shaped(Item.of('armorplus:cobalt_helmet', 1), ['   ', 'AAA', 'A A'], {
    A: '#forge:ingots/cobalt'
  })

  event.shaped(
    Item.of('armorplus:cobalt_chestplate', 1),
    ['A A', 'AAA', 'AAA'],
    {
      A: '#forge:ingots/cobalt'
    }
  )

  event.shaped(Item.of('armorplus:cobalt_leggings', 1), ['AAA', 'A A', 'A A'], {
    A: '#forge:ingots/cobalt'
  })

  event.shaped(Item.of('armorplus:cobalt_boots', 1), ['   ', 'A A', 'A A'], {
    A: '#forge:ingots/cobalt'
  })

  event.shaped(
    Item.of('armorplus:manyullyn_helmet', 1),
    ['   ', 'AAA', 'A A'],
    {
      A: '#forge:ingots/manyullyn'
    }
  )

  event.shaped(
    Item.of('armorplus:manyullyn_chestplate', 1),
    ['A A', 'AAA', 'AAA'],
    {
      A: '#forge:ingots/manyullyn'
    }
  )

  event.shaped(
    Item.of('armorplus:manyullyn_leggings', 1),
    ['AAA', 'A A', 'A A'],
    {
      A: '#forge:ingots/manyullyn'
    }
  )

  event.shaped(Item.of('armorplus:manyullyn_boots', 1), ['   ', 'A A', 'A A'], {
    A: '#forge:ingots/manyullyn'
  })

  //mystical crafting seed
  create3x3(event, 'kubejs:tier1_crafting_seed', [
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:inferium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:inferium_essence',
    'mysticalagriculture:prosperity_seed_base',
    'mysticalagriculture:inferium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:inferium_essence',
    'mysticalagriculture:prosperity_shard'
  ])
  create3x3(event, 'kubejs:tier2_crafting_seed', [
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:prudentium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:prudentium_essence',
    'kubejs:tier1_crafting_seed',
    'mysticalagriculture:prudentium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:prudentium_essence',
    'mysticalagriculture:prosperity_shard'
  ])
  create3x3(event, 'kubejs:tier3_crafting_seed', [
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:tertium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:tertium_essence',
    'kubejs:tier2_crafting_seed',
    'mysticalagriculture:tertium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:tertium_essence',
    'mysticalagriculture:prosperity_shard'
  ])
  create3x3(event, 'kubejs:tier4_crafting_seed', [
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:imperium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:imperium_essence',
    'kubejs:tier3_crafting_seed',
    'mysticalagriculture:imperium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:imperium_essence',
    'mysticalagriculture:prosperity_shard'
  ])
  create3x3(event, 'kubejs:tier5_crafting_seed', [
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:supremium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:supremium_essence',
    'kubejs:tier4_crafting_seed',
    'mysticalagriculture:supremium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagriculture:supremium_essence',
    'mysticalagriculture:prosperity_shard'
  ])
  create3x3(event, 'kubejs:tier6_crafting_seed', [
    'mysticalagriculture:prosperity_shard',
    'mysticalagradditions:insanium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagradditions:insanium_essence',
    'kubejs:tier5_crafting_seed',
    'mysticalagradditions:insanium_essence',
    'mysticalagriculture:prosperity_shard',
    'mysticalagradditions:insanium_essence',
    'mysticalagriculture:prosperity_shard'
  ])

  //mystical seed crafting tier1
  seedtiercrafting1(event, 'mysticalagriculture:stone_seeds', [
    'minecraft:stone'
  ])
  seedtiercrafting1(event, 'mysticalagriculture:dirt_seeds', ['minecraft:dirt'])
  seedtiercrafting1(event, 'mysticalagriculture:wood_seeds', [
    'minecraft:oak_log'
  ])
  seedtiercrafting1(event, 'mysticalagriculture:ice_seeds', ['minecraft:ice'])
  seedtiercrafting1(event, 'mysticalagriculture:deepslate_seeds', ['minecraft:deepslate'])
  seedtiercrafting1(event, 'mysticalagriculture:air_seeds', ['mysticalagriculture:air_agglomeratio'])
  seedtiercrafting1(event, 'mysticalagriculture:earth_seeds', ['mysticalagriculture:earth_agglomeratio'])
  seedtiercrafting1(event, 'mysticalagriculture:water_seeds', ['mysticalagriculture:water_agglomeratio'])
  seedtiercrafting1(event, 'mysticalagriculture:fire_seeds', ['mysticalagriculture:fire_agglomeratio'])


  //mystical seed crafting tier2
  seedtiercrafting2(event, 'mysticalagriculture:niter_seeds', ['thermal:niter'])
  seedtiercrafting2(event, 'mysticalagriculture:plastic_seeds', [
    'industrialforegoing:plastic'
  ])
  seedtiercrafting2(event, 'mysticalagriculture:nature_seeds', [
    'mysticalagriculture:nature_agglomeratio'
  ])
  seedtiercrafting2(event, 'mysticalagriculture:coal_seeds', [
    '#minecraft:coals'
  ])
  seedtiercrafting2(event, 'mysticalagriculture:nether_seeds', [
    'mysticalagriculture:nether_agglomeratio'
  ])
  seedtiercrafting2(event, 'mysticalagriculture:dye_seeds', [
    'mysticalagriculture:dye_agglomeratio'
  ])
  seedtiercrafting2(event, 'mysticalagriculture:coral_seeds', [
    'mysticalagriculture:coral_agglomeratio'
  ])
  seedtiercrafting2(event, 'mysticalagriculture:honey_seeds', [
    'mysticalagriculture:honey_agglomeratio'
  ])
  seedtiercrafting2(event, 'mysticalagriculture:amethyst_seeds', [
    'minecraft:amethyst_shard'
  ])
  seedtiercrafting2(event, 'mysticalagriculture:rubber_seeds', [
    '#forge:rubber'
  ])
  seedtiercrafting2(event, 'mysticalagriculture:silicon_seeds', [
    '#forge:silicon'
  ])
  seedtiercrafting2(event, 'mysticalagriculture:aluminum_seeds', [
    '#forge:ingots/aluminum'
  ])
  seedtiercrafting2(event, 'mysticalagriculture:sulfur_seeds', [
    'thermal:sulfur'
  ])
  seedtiercrafting2(event, 'mysticalagriculture:apatite_seeds', [
    'thermal:apatite'
  ])
  seedtiercrafting2(event, 'mysticalagriculture:grains_of_infinity_seeds', [
    'enderio:grains_of_infinity'
  ])
  seedtiercrafting2(event, 'mysticalagriculture:mystical_flower_seeds', [
    'mysticalagriculture:mystical_flower_agglomeratio'
  ])
  seedtiercrafting2(event, 'mysticalagriculture:basalt_seeds', [
    '#forge:stone/basalt'
  ])
  seedtiercrafting2(event, 'mysticalagriculture:marble_seeds', [
    '#forge:stone/marble'
  ])
  seedtiercrafting2(event, 'mysticalagriculture:menril_seeds', [
    'integrateddynamics:crystalized_menril_block'
  ])

  seedtiermobcrafting2(event, 'mysticalagriculture:pig_seeds', [
    Item.of(
      'mysticalagriculture:soul_jar',
      '{Souls:8.0d,Type:"mysticalagriculture:pig"}'
    )
  ])
  seedtiermobcrafting2(event, 'mysticalagriculture:chicken_seeds', [
    Item.of(
      'mysticalagriculture:soul_jar',
      '{Souls:8.0d,Type:"mysticalagriculture:chicken"}'
    )
  ])
  seedtiermobcrafting2(event, 'mysticalagriculture:cow_seeds', [
    Item.of(
      'mysticalagriculture:soul_jar',
      '{Souls:8.0d,Type:"mysticalagriculture:cow"}'
    )
  ])
  seedtiermobcrafting2(event, 'mysticalagriculture:sheep_seeds', [
    Item.of(
      'mysticalagriculture:soul_jar',
      '{Souls:8.0d,Type:"mysticalagriculture:sheep"}'
    )
  ])
  seedtiermobcrafting2(event, 'mysticalagriculture:squid_seeds', [
    Item.of(
      'mysticalagriculture:soul_jar',
      '{Souls:6.0d,Type:"mysticalagriculture:squid"}'
    )
  ])
  seedtiermobcrafting2(event, 'mysticalagriculture:fish_seeds', [
    Item.of(
      'mysticalagriculture:soul_jar',
      '{Souls:6.0d,Type:"mysticalagriculture:fish"}'
    )
  ])
  seedtiermobcrafting2(event, 'mysticalagriculture:slime_seeds', [
    Item.of(
      'mysticalagriculture:soul_jar',
      '{Souls:12.0d,Type:"mysticalagriculture:slime"}'
    )
  ])
  seedtiermobcrafting2(event, 'mysticalagriculture:turtle_seeds', [
    Item.of(
      'mysticalagriculture:soul_jar',
      '{Souls:6.0d,Type:"mysticalagriculture:turtle"}'
    )
  ])
})




function shapeless(event, output, input) {
  event.shapeless(output, input)
}

function create323(event, output, input) {
  event.shaped(output, ['000', '0 0', '000'], {
    0: input[0]
  })
}

function create_conduit_craft(event, output, input) {
  event.shaped(output, ['000', '111', '000'], {
    0: input[0],
    1: input[1]
  })
}

function create_conduit_craft2(event, output, input) {
  event.shaped(output, ['000', '121', '000'], {
    0: input[0],
    1: input[1],
    2: input[2]
  })
}
function create2x2(event, output, input) {
  event.shaped(output, ['01', '23'], {
    0: input[0],
    1: input[1],
    2: input[2],
    3: input[3]
  })
}

function create2x2same(event, output, input) {
  event.shaped(output, ['00', '00'], {
    0: input[0]
  })
}

function create3x3(event, output, input) {
  if (!output || output === '' || (typeof output === 'string' && output.includes(' '))) {
    console.error('❌ Ungültiger Output in create3x3: ' + output)
  }

  event.shaped(output, ['012', '345', '678'], {
    0: input[0],
    1: input[1],
    2: input[2],
    3: input[3],
    4: input[4],
    5: input[5],
    6: input[6],
    7: input[7],
    8: input[8]
  })
}


function create3x3same(event, output, input) {
  event.shaped(output, ['000', '000', '000'], {
    0: input[0]
  })
}

function seedtiercrafting1(event, output, input) {
  event.shaped(output, ['121', '202', '121'], {
    0: 'kubejs:tier1_crafting_seed',
    1: input[0],
    2: 'mysticalagriculture:inferium_essence'
  })
}

function seedtiercrafting2(event, output, input) {
  event.shaped(output, ['121', '202', '121'], {
    0: 'kubejs:tier2_crafting_seed',
    1: input[0],
    2: 'mysticalagriculture:prudentium_essence'
  })
}

function seedtiermobcrafting2(event, output, input) {
  event.shaped(output, ['121', '202', '121'], {
    0: 'mysticalagriculture:soulium_seed_base',
    1: input[0].weakNBT(),
    2: 'mysticalagriculture:prudentium_essence'
  })
}

//replace items
ServerEvents.recipes(event => {
  event.replaceInput(
    { output: 'extrahnn:upgrade_module_stack' },
    'minecraft:comparator',
    'kubejs:infinity_6'
  )

  event.replaceInput(
    { input: 'bigreactors:yellorium_ingot' },
    'bigreactors:yellorium_ingot',
    'mekanism:ingot_uranium'
  )
})