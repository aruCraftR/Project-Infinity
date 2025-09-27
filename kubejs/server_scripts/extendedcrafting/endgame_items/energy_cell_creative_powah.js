ServerEvents.recipes(event => {
  //Energy Cell Creative (Powah)
  event
    .custom({
      type: "extendedcrafting:shaped_table",
      pattern: [
        "ABCCCCCBA",
        "BDAEFGAHB",
        "IAJGKLMAI",
        "BGLNONGEB",
        "PFQOGOQFP",
        "BEGNONLGB",
        "IARLKGSAI",
        "BTAGFEAUB",
        "ABCCCCCBA",
      ],
      key: {
        A: {
          item: "kubejs:infinity_12",
        },
        B: {
          type: "forge:nbt",
          item: "powah:energy_cell_nitro",
          count: 1,
          nbt: "{powah_tile_data:{energy_stored_main_energy:2000000000L}}",
        },
        C: {
          item: "powah:nitro_crystal_block",
        },
        D: {
          item: "powah:energy_discharger_nitro",
        },
        E: {
          type: "forge:nbt",
          item: "powah:battery_nitro",
          count: 1,
          nbt: "{powah_tile_data:{energy_stored_main_energy:2000000000L}}",
        },
        F: {
          item: "powah:ender_cell_nitro",
        },
        G: {
          item: "avaritia:infinity_ingot",
        },
        H: {
          item: "powah:energy_hopper_nitro",
        },
        I: {
          item: "powah:ender_gate_nitro",
        },
        J: {
          item: "powah:furnator_nitro",
        },
        K: {
          item: "evolvedmekanism:creative_control_circuit",
        },
        L: {
          item: "powah:player_aerial_pearl",
        },
        M: {
          item: "powah:thermo_generator_nitro",
        },
        N: {
          item: "evolvedmekanism:alloy_creative",
        },
        O: {
          item: "powah:capacitor_nitro",
        },
        P: {
          type: "forge:nbt",
          item: "solarpanels:creative_energy_tablet",
          count: 1,
          nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:\"2000000000\"}]}}',
        },
        Q: {
          item: "powah:reactor_nitro",
        },
        R: {
          item: "powah:magmator_nitro",
        },
        S: {
          item: "powah:solar_panel_nitro",
        },
        T: {
          item: "powah:player_transmitter_nitro",
        },
        U: {
          item: "powah:energizing_rod_nitro",
        },
      },
      result: {
        item: "powah:energy_cell_creative",
      },
    })
    .id("powah:energy_cell_creative");
});
