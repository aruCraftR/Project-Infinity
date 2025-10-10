priority: 0;
ServerEvents.tags('item', (event) => {
  event.add('forge:plastic', 'pneumaticcraft:plastic');
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
    'mysticalagriculture:lithium_essence',
  ]);

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
    'mysticalagriculture:lithium_seeds',
  ]);

  event.add('pipe_connector:placeable_items', [
    'evolvedmekanism:overclocked_universal_cable',
    'evolvedmekanism:quantum_universal_cable',
    'evolvedmekanism:dense_universal_cable',
    'evolvedmekanism:multiversal_universal_cable',
    'evolvedmekanism:creative_universal_cable',
    'evolvedmekanism:overclocked_mechanical_pipe',
    'evolvedmekanism:quantum_mechanical_pipe',
    'evolvedmekanism:dense_mechanical_pipe',
    'evolvedmekanism:multiversal_mechanical_pipe',
    'evolvedmekanism:creative_mechanical_pipe',
    'evolvedmekanism:overclocked_pressurized_tube',
    'evolvedmekanism:quantum_pressurized_tube',
    'evolvedmekanism:dense_pressurized_tube',
    'evolvedmekanism:multiversal_pressurized_tube',
    'evolvedmekanism:creative_pressurized_tube',
    'evolvedmekanism:overclocked_logistical_transporter',
    'evolvedmekanism:quantum_logistical_transporter',
    'evolvedmekanism:dense_logistical_transporter',
    'evolvedmekanism:multiversal_logistical_transporter',
    'evolvedmekanism:creative_logistical_transporter',
    'evolvedmekanism:overclocked_thermodynamic_conductor',
    'evolvedmekanism:quantum_thermodynamic_conductor',
    'evolvedmekanism:dense_thermodynamic_conductor',
    'evolvedmekanism:multiversal_thermodynamic_conductor',
    'evolvedmekanism:creative_thermodynamic_conductor',
    'powah:energy_cable_starter',
    'powah:energy_cable_basic',
    'powah:energy_cable_hardened',
    'powah:energy_cable_blazing',
    'powah:energy_cable_niotic',
    'powah:energy_cable_spirited',
    'powah:energy_cable_nitro',
  ]);

  event.add('forge:clay_balls', 'minecraft:clay_ball');
  event.add('forge:fruits/chorus', 'minecraft:chorus_fruit');
  event.add('forge:vegetables/beetroot', 'minecraft:beetroot');
  event.add('forge:rubber', 'thermal:cured_rubber');
});

ServerEvents.tags('block', (event) => {
  event.add('minecraft:beacon_base_blocks', [
    'allthemodium:vibranium_allthemodium_alloy_block',
    'allthemodium:unobtainium_allthemodium_alloy_block',
    'allthemodium:unobtainium_vibranium_alloy_block',
  ]);

  event.add('pipe_connector:pipe_block', [
    'evolvedmekanism:overclocked_universal_cable',
    'evolvedmekanism:quantum_universal_cable',
    'evolvedmekanism:dense_universal_cable',
    'evolvedmekanism:multiversal_universal_cable',
    'evolvedmekanism:creative_universal_cable',
    'evolvedmekanism:overclocked_mechanical_pipe',
    'evolvedmekanism:quantum_mechanical_pipe',
    'evolvedmekanism:dense_mechanical_pipe',
    'evolvedmekanism:multiversal_mechanical_pipe',
    'evolvedmekanism:creative_mechanical_pipe',
    'evolvedmekanism:overclocked_pressurized_tube',
    'evolvedmekanism:quantum_pressurized_tube',
    'evolvedmekanism:dense_pressurized_tube',
    'evolvedmekanism:multiversal_pressurized_tube',
    'evolvedmekanism:creative_pressurized_tube',
    'evolvedmekanism:overclocked_logistical_transporter',
    'evolvedmekanism:quantum_logistical_transporter',
    'evolvedmekanism:dense_logistical_transporter',
    'evolvedmekanism:multiversal_logistical_transporter',
    'evolvedmekanism:creative_logistical_transporter',
    'evolvedmekanism:overclocked_thermodynamic_conductor',
    'evolvedmekanism:quantum_thermodynamic_conductor',
    'evolvedmekanism:dense_thermodynamic_conductor',
    'evolvedmekanism:multiversal_thermodynamic_conductor',
    'evolvedmekanism:creative_thermodynamic_conductor',
    'powah:energy_cable_starter',
    'powah:energy_cable_basic',
    'powah:energy_cable_hardened',
    'powah:energy_cable_blazing',
    'powah:energy_cable_niotic',
    'powah:energy_cable_spirited',
    'powah:energy_cable_nitro',
  ]);

  event.add('draconicevolution:core_stabilizer', [
    'draconicevolution:energy_core_stabilizer',
    'draconicevolution:structure_block',
  ]);
});

const hammer = [
  'thermal_extra:signalum_hammer',
  'thermal_extra:lumium_hammer',
  'thermal_extra:enderium_hammer',
  'thermal_extra:soul_infused_hammer',
  'thermal_extra:shellite_hammer',
  'thermal_extra:twinite_hammer',
  'thermal_extra:dragonsteel_hammer',
  'thermal_extra:abyssal_hammer',
];

//add Tags to Items
ServerEvents.tags('item', (event) => {
  hammer.forEach((hammer) => {
    event.add('exdeorum:hammers', hammer);
  });
  event.add('minecraft:wooden_slabs', 'minecraft:wooden_slabs');

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
    'exdeorum:skyroot_sieve',
  ]);
});

//add Tags to Fluids
ServerEvents.tags('fluid', (event) => {
  event.add('forge:uranium_hexafluoride', 'mekanism:uranium_hexafluoride');
  event.add('mekanism:bio', 'mekanism:bio');
  event.add('forge:chlorine', 'mekanism:chlorine');
  event.add('mekanism:water_vapor', ['mekanism:water_vapor', 'mekanism:steam']);
  event.add('mekanism:steam', [
    'mekanism:water_vapor',
    'mekanism:steam',
    'bigreactors:steam',
  ]);
  event.add('forge:heavy_water', [
    'mekanism:heavy_water',
    'nuclearcraft:heavy_water',
  ]);
  event.add('forge:hydrogen_chloride', 'mekanism:hydrogen_chlorine');
  event.add('forge:sulfur_trioxide', 'mekanism:sulfur_trioxide');
  event.add('minecraft:water', 'minecraft:water');
  event.add('bloodmagic:life_essence_fluid', 'bloodmagic:life_essence_fluid');
  event.add('forge:steam', ['bigreactors:steam', 'bigreactors:steam_vapor']);
});

ServerEvents.tags('block', (event) => {
  event.removeAll('mm:auto_sieve_item_input');
  event.removeAll('mm:auto_sieve_energy_input');
  event.removeAll('mm:auto_sieve_item_output');
  event.removeAll('mm:auto_crusher_item_input');
  event.removeAll('mm:auto_crusher_item_output');
  event.removeAll('mm:auto_crusher_energy_input');
  event.removeAll('mm:all_energy_output');
  event.removeAll('mm:fluid_port_input');
  event.removeAll('mm:fluid_port_output');
  event.removeAll('mm:auto_inscriber_item_input');
  event.removeAll('mm:auto_inscriber_item_output');
  event.removeAll('mm:auto_inscriber_energy_input');
});
