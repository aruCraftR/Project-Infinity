ServerEvents.recipes(event => {
  //Compact Thermoelectric Boiler
  event
    .custom({
      type: "extendedcrafting:shaped_table",
      pattern: [
        "AAAAAAAAA",
        "BCCCCCCCB",
        "BDDDDDDDB",
        "BBBBBBBBB",
        "BEFGHGFEB",
        "BIEGGGEIB",
        "BIFEFEFIB",
        "BIIIEIIIB",
        "BBBBBBBBB",
      ],
      key: {
        A: {
          item: "mekanism:structural_glass",
        },
        B: {
          item: "mekanism:boiler_casing",
        },
        C: {
          item: "mekanism:pressure_disperser",
        },
        D: {
          item: "mekanism:superheating_element",
        },
        E: {
          item: "mekanism:alloy_atomic",
        },
        F: {
          item: "mekanism:alloy_reinforced",
        },
        G: {
          item: "evolvedmekanism:alloy_hypercharged",
        },
        H: {
          item: "mekanism:pellet_polonium",
        },
        I: {
          item: "mekanism:alloy_infused",
        },
      },
      result: {
        item: "compactmekanismmachinesplus:compact_thermoelectric_boiler",
      },
    })
    .id("compactmekanismmachinesplus:compact_thermoelectric_boiler");
});
