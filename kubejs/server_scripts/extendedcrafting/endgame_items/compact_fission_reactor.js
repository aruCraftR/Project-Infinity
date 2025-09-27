ServerEvents.recipes(event => {
  //Compact Fission Reactor
  event
    .custom({
      type: "extendedcrafting:shaped_table",
      pattern: [
        "AAAAAAAAA",
        "BCDCDCDCB",
        "BDCDCDCDB",
        "BCDCDCDCB",
        "EDCDFDCDE",
        "BCDCDCDCB",
        "BDCDCDCDB",
        "BCDCDCDCB",
        "BBBBGBBBB",
      ],
      key: {
        A: {
          item: "mekanismgenerators:reactor_glass",
        },
        B: {
          item: "mekanismgenerators:fission_reactor_casing",
        },
        C: {
          item: "mekanismgenerators:control_rod_assembly",
        },
        D: {
          item: "mekanismgenerators:fission_fuel_assembly",
        },
        E: {
          item: "mekanismgenerators:fission_reactor_port",
        },
        F: {
          item: "mekanism:pellet_polonium",
        },
        G: {
          item: "mekanismgenerators:fission_reactor_logic_adapter",
        },
      },
      result: {
        item: "compactmekanismmachines:compact_fission_reactor",
      },
    })
    .id("compactmekanismmachines:compact_fission_reactor");
});
