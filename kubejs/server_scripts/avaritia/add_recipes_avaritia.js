ServerEvents.recipes((event) => {
  //sculk_alloy_ingot
  event
    .custom({
      type: "avaritia:shaped_table",
      category: "misc",
      key: {
        A: {
          item: "minecraft:obsidian",
        },
        B: {
          item: "minecraft:echo_shard",
        },
        C: {
          item: "minecraft:iron_ingot",
        },
        D: {
          item: "apotheosis:warden_tendril",
        },
      },
      pattern: [" A ", "BCB", " D "],
      result: {
        item: "kubejs:sculk_alloy_ingot",
      },
      show_notification: true,
      tier: 1,
    })
    .id("kubejs:sculk_alloy_ingot");

  //densest_neutron_collector
  event.custom({
    type: "avaritia:shaped_table",
    category: "equipment",
    key: {
      A: {
        item: "minecraft:redstone_block",
      },
      B: {
        item: "avaritia:neutron_ingot",
      },
      C: {
        item: "avaritia:neutron_gear",
      },
      X: {
        item: "avaritia:denser_neutron_collector",
      },
      Y: {
        item: "extendedcrafting:ultimate_singularity",
      },
    },
    pattern: [
      "CC     CC",
      "C  BBB  C",
      "  AAAAA  ",
      " BAXXXAB ",
      " BAXYXAB ",
      " BAXXXAB ",
      "  AAAAA  ",
      "C  BBB  C",
      "CC     CC",
    ],
    result: {
      item: "avaritia:densest_neutron_collector",
    },
    show_notification: true,
    tier: 4,
  });
});
