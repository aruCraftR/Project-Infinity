ServerEvents.recipes(event => {
  //Expattern Provider Infinity Cell Cobblestone
  event
    .custom({
      type: "extendedcrafting:shaped_table",
      pattern: [
        "ABCDEDCBF",
        "BGBCDCBHB",
        "CBIBCBJBC",
        "DCBKLMBCD",
        "NDCLOLCDP",
        "DCBQLRBCD",
        "CBSBCBTBC",
        "BUBCDCBVB",
        "WBCDXDCBY",
      ],
      key: {
        A: {
          item: "cobblefordays:tier_1",
        },
        B: {
          item: "kubejs:infinity_12",
        },
        C: {
          item: "botanicalextramachinery:crimson_ingot_block",
        },
        D: {
          item: "cobblefordays:tier_5",
        },
        E: {
          item: "avaritia:ultimate_stew",
        },
        F: {
          item: "mysticalagradditions:insanium_gemstone",
        },
        G: {
          item: "cobblefordays:tier_2",
        },
        H: {
          item: "mysticalexpansion:extremium_gemstone",
        },
        I: {
          item: "cobblefordays:tier_3",
        },
        J: {
          item: "mysticalexpansion:etherium_gemstone",
        },
        K: {
          item: "cobblefordays:tier_4",
        },
        L: {
          item: "botanicalextramachinery:crimson_spark",
        },
        M: {
          item: "mysticalexpansion:divinium_gemstone",
        },
        N: {
          item: "kubejs:ultimate_gem",
        },
        O: {
          item: "botanicalextramachinery:catalyst_stone_infinity",
        },
        P: {
          item: "extendedcrafting:the_ultimate_ingot",
        },
        Q: {
          item: "minecraft:pointed_dripstone",
        },
        R: {
          item: "compressium:cobblestone_9",
        },
        S: {
          item: "minecraft:polished_blackstone_button",
        },
        T: {
          item: "compressium:cobblestone_8",
        },
        U: {
          item: "botania:cobble_rod",
        },
        V: {
          item: "compressium:cobblestone_7",
        },
        W: {
          item: "twilightforest:giant_cobblestone",
        },
        X: {
          item: "extendedcrafting:ultimate_singularity",
        },
        Y: {
          item: "compressium:cobblestone_6",
        },
      },
      result: {
        type: "forge:nbt",
        item: "expatternprovider:infinity_cell",
        count: 1,
        nbt: '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}',
      },
    })
    .id("expatternprovider:infinity_cell_cobblestone");
});
