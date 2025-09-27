ServerEvents.recipes((event) => {
  //Transmutation Interface
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABACABA',
        'BDCECFB',
        'ACGHGCA',
        'CIHGHJC',
        'ACGHGCA',
        'BKCLCMB',
        'ABACABA',
      ],
      key: {
        A: {
          item: 'projecte:dark_matter',
        },
        B: {
          item: 'projectexpansion:final_emc_link',
        },
        C: {
          item: 'projecte:condenser_mk2',
        },
        D: {
          item: 'projectexpansion:blue_matter',
        },
        E: {
          item: 'projectexpansion:cyan_matter',
        },
        F: {
          item: 'projectexpansion:green_matter',
        },
        G: {
          item: 'kubejs:infinity_9',
        },
        H: {
          item: 'projectexpansion:final_star_shard',
        },
        I: {
          item: 'projectexpansion:lime_matter',
        },
        J: {
          item: 'projectexpansion:yellow_matter',
        },
        K: {
          item: 'projectexpansion:orange_matter',
        },
        L: {
          item: 'projectexpansion:white_matter',
        },
        M: {
          item: 'projectexpansion:fading_matter',
        },
      },
      result: {
        item: 'projectexpansion:transmutation_interface',
      },
    })
    .id('projectexpansion:transmutation_interface');
});
