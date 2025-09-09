ServerEvents.recipes(event => {
  //Compact SPS
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AAAAAAAAA',
        'BCACDCACB',
        'BEFAGAFEB',
        'BEFHAHFEB',
        'DGFFIFFGD',
        'BEFHFHFEB',
        'BEFFFFFEB',
        'BCCCGCCCB',
        'BBBBDBBBB'
      ],
      key: {
        A: {
          item: 'mekanism:structural_glass'
        },
        B: {
          item: 'mekanism:sps_casing'
        },
        C: {
          item: 'mekanism:alloy_infused'
        },
        D: {
          item: 'mekanism:sps_port'
        },
        E: {
          item: 'mekanism:alloy_reinforced'
        },
        F: {
          item: 'mekanism:alloy_atomic'
        },
        G: {
          item: 'mekanism:supercharged_coil'
        },
        H: {
          item: 'evolvedmekanism:alloy_hypercharged'
        },
        I: {
          item: 'mekanism:pellet_polonium'
        }
      },
      result: {
        item: 'compactmekanismmachinesplus:compact_sps'
      }
    })
    .id('compactmekanismmachinesplus:compact_sps')
})
