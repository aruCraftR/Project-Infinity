ServerEvents.recipes((event) => {
  //Compact Fusion Reactor
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AAAAAAAAA',
        'BCDEFEDGB',
        'BDEFHFEDB',
        'BEFIJIFEB',
        'KFHILIHFK',
        'BEFIMIFEB',
        'BDEFHFEDB',
        'BGDEFEDCB',
        'BBBBBBBBB',
      ],
      key: {
        A: {
          item: 'mekanismgenerators:reactor_glass',
        },
        B: {
          item: 'bfr:fusion_reactor_frame',
        },
        C: {
          item: 'mekanism:superheated_sodium_bucket',
        },
        D: {
          item: 'mekanism:alloy_infused',
        },
        E: {
          item: 'mekanism:alloy_reinforced',
        },
        F: {
          item: 'mekanism:alloy_atomic',
        },
        G: {
          item: 'mekanism:sodium_bucket',
        },
        H: {
          item: 'bfr:fusion_reactor_port',
        },
        I: {
          item: 'evolvedmekanism:alloy_hypercharged',
        },
        J: {
          item: 'bfr:laser_focus_matrix',
        },
        K: {
          item: 'bfr:fusion_reactor_logic_adapter',
        },
        L: {
          item: 'mekanism:pellet_polonium',
        },
        M: {
          item: 'bfr:fusion_reactor_controller',
        },
      },
      result: {
        item: 'compactmekanismmachinesplus:compact_fusion_reactor',
      },
    })
    .id('compactmekanismmachinesplus:compact_fusion_reactor');
});
