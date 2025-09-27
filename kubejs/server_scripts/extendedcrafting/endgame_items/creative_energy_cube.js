ServerEvents.recipes((event) => {
  //Creative Energy Cube
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDAEFDA',
        'DCCGHIJCB',
        'FJBGKLBCC',
        'EILMGNGGD',
        'AHKGOGKHA',
        'DGGNGMLIE',
        'CCBLKGBJF',
        'BCJIHGCCD',
        'ADFEADCBA',
      ],
      key: {
        A: {
          item: 'evolvedmekanism:creative_control_circuit',
        },
        B: {
          item: 'mysticalagradditions:creative_essence',
        },
        C: {
          item: 'kubejs:infinity_12',
        },
        D: {
          item: 'evolvedmekanism:alloy_creative',
        },
        E: {
          type: 'forge:nbt',
          item: 'solarpanels:light_absorbing_energy_tablet',
          count: 1,
          nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:\"243000000\"}]}}',
        },
        F: {
          type: 'forge:nbt',
          item: 'solarpanels:spectral_energy_tablet',
          count: 1,
          nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:\"27000000\"}]}}',
        },
        G: {
          item: 'avaritia:infinity_ingot',
        },
        H: {
          type: 'forge:nbt',
          item: 'solarpanels:photonic_energy_tablet',
          count: 1,
          nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:\"729000000\"}]}}',
        },
        I: {
          type: 'forge:nbt',
          item: 'solarpanels:improved_energy_tablet',
          count: 1,
          nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:\"3000000\"}]}}',
        },
        J: {
          type: 'forge:nbt',
          item: 'solarpanels:singular_energy_tablet',
          count: 1,
          nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:\"81000000\"}]}}',
        },
        K: {
          type: 'forge:nbt',
          item: 'mekanism:creative_energy_cube',
          count: 1,
          nbt: '{mekData:{componentConfig:{config0:{side0:1,side1:1,side2:1,side3:1,side4:1,side5:1}}}}',
        },
        L: {
          type: 'forge:nbt',
          item: 'solarpanels:quantum_energy_tablet',
          count: 1,
          nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:\"9000000\"}]}}',
        },
        M: {
          item: 'evolvedmekanism:creative_induction_cell',
        },
        N: {
          item: 'evolvedmekanism:creative_induction_provider',
        },
        O: {
          type: 'forge:nbt',
          item: 'solarpanels:creative_energy_tablet',
          count: 1,
          nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:\"2000000000\"}]}}',
        },
      },
      result: {
        type: 'forge:nbt',
        item: 'mekanism:creative_energy_cube',
        count: 1,
        nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}],componentConfig:{config0:{side0:4,side1:4,side2:4,side3:4,side4:4,side5:4}}}}',
      },
    })
    .id('mekanism:creative_energy_cube');
});
