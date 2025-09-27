ServerEvents.recipes((event) => {
  //Creative Capacitor
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDCBA',
        'BEFGFEB',
        'EFFHFFE',
        'EIJHJIE',
        'EFFHFFE',
        'BEFGFEB',
        'ABCDCBA',
      ],
      key: {
        A: {
          item: 'mysticalagradditions:creative_essence',
        },
        B: {
          item: 'kubejs:infinity_11',
        },
        C: {
          type: 'forge:nbt',
          item: 'mekanism:creative_energy_cube',
          count: 1,
          nbt: '{mekData:{componentConfig:{config0:{side0:1,side1:1,side2:1,side3:1,side4:1,side5:1}}}}',
        },
        D: {
          type: 'forge:nbt',
          item: 'solarpanels:creative_energy_tablet',
          count: 1,
          nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:\"2000000000\"}]}}',
        },
        E: {
          item: 'kubejs:tyrian_steel_ingot',
        },
        F: {
          item: 'botanicalextramachinery:crimson_ingot',
        },
        G: {
          item: 'botanicalextramachinery:crimson_dragonstone_block',
        },
        H: {
          type: 'forge:nbt',
          item: 'ironjetpacks:cell',
          count: 1,
          nbt: '{Id:\"ironjetpacks:creative\"}',
        },
        I: {
          item: 'botanicalextramachinery:crimson_dragonstone',
        },
        J: {
          item: 'projectexpansion:magenta_matter',
        },
      },
      result: {
        type: 'forge:nbt',
        item: 'ironjetpacks:capacitor',
        count: 1,
        nbt: '{Id:"ironjetpacks:creative"}',
      },
    })
    .id('creative_capacitor_ironjetpacks');
});
