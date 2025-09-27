ServerEvents.recipes(event => {
  //Creative Fluid Tank
  event
    .custom({
      type: "extendedcrafting:shaped_table",
      pattern: [
        "ABABCBABA",
        "DEFAAAFED",
        "AEGHHHGEA",
        "IAJKKKJAI",
        "CAJKLKJAC",
        "IAJKKKJAI",
        "AEGHHHGEA",
        "DEFAAAFED",
        "ABABCBABA",
      ],
      key: {
        A: {
          item: "mekanism:dynamic_tank",
        },
        B: {
          item: "avaritia:infinity_ingot",
        },
        C: {
          item: "mm:gigantic_fluid_port_output",
        },
        D: {
          item: "mekanism:ultimate_pressurized_tube",
        },
        E: {
          item: "mekanism:clump_osmium",
        },
        F: {
          item: "thermal:fluid_duct",
        },
        G: {
          item: "cyclic:fluid_pipe",
        },
        H: {
          item: "mysticalagradditions:creative_essence",
        },
        I: {
          item: "kubejs:infinity_11",
        },
        J: {
          item: "mekanism:ultimate_fluid_tank",
        },
        K: {
          item: "nuclearcraft:dense_water_collector",
        },
        L: {
          item: "pneumaticcraft:huge_tank",
        },
      },
      result: {
        item: "mekanism:creative_fluid_tank",
      },
    })
    .id("mekanism:creative_fluid_tank");
});
