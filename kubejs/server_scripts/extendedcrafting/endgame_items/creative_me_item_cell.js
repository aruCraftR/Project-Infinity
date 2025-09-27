ServerEvents.recipes((event) => {
  //Creative ME Item Cell
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AABCDCBAA',
        'AEBFGFBEA',
        'BBBHIHBBB',
        'IGBJKJBGI',
        'DBIKLKIBD',
        'IGBJKJBGI',
        'BBBHIHBBB',
        'AEBFGFBEA',
        'AABCDCBAA',
      ],
      key: {
        A: {
          item: 'projectexpansion:fading_matter',
        },
        B: {
          item: 'kubejs:infinity_12',
        },
        C: {
          item: 'pneumaticcraft:capacitor',
        },
        D: {
          item: 'avaritia:endest_pearl',
        },
        E: {
          item: 'megacells:cell_component_256m',
        },
        F: {
          item: 'pneumaticcraft:printed_circuit_board',
        },
        G: {
          item: 'evolvedmekanism:alloy_creative',
        },
        H: {
          item: 'pneumaticcraft:transistor',
        },
        I: {
          item: 'ironfurnaces:million_furnace',
        },
        J: {
          item: 'projecte:condenser_mk2',
        },
        K: {
          item: 'industrialforegoing:supreme_black_hole_unit',
        },
        L: {
          item: 'ae2:spatial_storage_cell_128',
        },
      },
      result: {
        item: 'ae2:creative_item_cell',
      },
    })
    .id('ae2:creative_item_cell');
});
