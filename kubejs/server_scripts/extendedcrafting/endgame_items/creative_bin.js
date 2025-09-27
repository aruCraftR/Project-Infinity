ServerEvents.recipes((event) => {
  //Creative Bin
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCCBCCBD',
        'BEFGEGFEB',
        'CFHIIIJFC',
        'KGLMNMOGK',
        'BEMNPNMEB',
        'KGQMNMRGK',
        'CFSIIITFC',
        'BEFGEGFEB',
        'UBCCBCCBV',
      ],
      key: {
        A: {
          item: 'mekanism:basic_bin',
        },
        B: {
          item: 'avaritia:infinity_ingot',
        },
        C: {
          item: 'avaritia:infinity_catalyst',
        },
        D: {
          item: 'mekanism:advanced_bin',
        },
        E: {
          item: 'evolvedmekanism:block_better_gold',
        },
        F: {
          item: 'avaritia:neutron_ingot',
        },
        G: {
          item: 'compressium:cobblestone_8',
        },
        H: {
          item: 'evolvedmekanism:overclocked_bin',
        },
        I: {
          item: 'mysticalagradditions:creative_essence',
        },
        J: {
          item: 'evolvedmekanism:quantum_bin',
        },
        K: {
          item: 'kubejs:infinity_11',
        },
        L: {
          item: 'trashcans:energy_trash_can',
        },
        M: {
          item: 'evolvedmekanism:alloy_creative',
        },
        N: {
          item: 'evolvedmekanism:creative_control_circuit',
        },
        O: {
          item: 'trashcans:item_trash_can',
        },
        P: {
          item: 'kubejs:infinity_12',
        },
        Q: {
          item: 'trashcans:ultimate_trash_can',
        },
        R: {
          item: 'trashcans:liquid_trash_can',
        },
        S: {
          item: 'evolvedmekanism:multiversal_bin',
        },
        T: {
          item: 'evolvedmekanism:dense_bin',
        },
        U: {
          item: 'mekanism:ultimate_bin',
        },
        V: {
          item: 'mekanism:elite_bin',
        },
      },
      result: {
        item: 'mekanism:creative_bin',
      },
    })
    .id('mekanism:creative_bin');
});
