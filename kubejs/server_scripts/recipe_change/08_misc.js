// Category: cyclic
ServerEvents.recipes((event) => {
  shapeless(event, "cyclic:gem_obsidian", [
    "cyclic:gem_amber",
    "minecraft:amethyst_block",
    "minecraft:emerald",
    "tconstruct:earth_slime_bucket",
  ]);

  shapeless(event, "cyclic:gem_obsidian", [
    "cyclic:gem_amber",
    "minecraft:chorus_fruit",
    "minecraft:emerald",
    "tconstruct:earth_slime_bucket",
  ]);

  shapeless(event, "cyclic:gem_obsidian", [
    "cyclic:gem_amber",
    "minecraft:obsidian",
    "minecraft:wither_rose",
    "tconstruct:earth_slime_bucket",
  ]);

  shapeless(event, "2x cyclic:gem_amber", [
    "tconstruct:magma_bucket",
    "minecraft:fire_charge",
    "minecraft:redstone_block",
    "minecraft:gold_ingot",
  ]);

  shapeless(event, "2x cyclic:gem_amber", [
    "tconstruct:honey_bucket",
    "minecraft:fire_charge",
    "minecraft:magma_block",
    "minecraft:redstone",
  ]);

  shapeless(
    event,
    Item.of("patchouli:guide_book", '{"patchouli:book":"cyclic:guide_book"}'),
    ["minecraft:book", "compressium:cobblestone_1"]
  );

  create3x3(event, "cyclic:user", [
    "minecraft:gold_ingot",
    "minecraft:dispenser",
    "minecraft:gold_ingot",
    "minecraft:tripwire_hook",
    "compressium:cobblestone_1",
    "minecraft:tripwire_hook",
    "cyclic:flint_block",
    "cyclic:flint_block",
    "cyclic:flint_block",
  ]);

  create3x3(event, "cyclic:anvil_magma", [
    "minecraft:magma_block",
    "minecraft:magma_block",
    "minecraft:magma_block",
    "minecraft:air",
    "compressium:cobblestone_1",
    "minecraft:air",
    "minecraft:obsidian",
    "cyclic:fireball",
    "minecraft:obsidian",
  ]);

  create3x3(event, "cyclic:harvester", [
    "minecraft:emerald",
    "cyclic:obsidian_pressure_plate",
    "minecraft:emerald",
    "compressium:cobblestone_1",
    "cyclic:biomass",
    "compressium:cobblestone_1",
    "thermal:copper_nugget",
    "thermal:copper_nugget",
    "thermal:copper_nugget",
  ]);

  create3x3(event, "cyclic:crusher", [
    "compressium:cobblestone_1",
    "thermal:copper_nugget",
    "compressium:cobblestone_1",
    "minecraft:stonecutter",
    "cyclic:flint_block",
    "minecraft:stonecutter",
    "compressium:cobblestone_1",
    "thermal:copper_nugget",
    "compressium:cobblestone_1",
  ]);

  create3x3(event, "cyclic:dropper", [
    "thermal:copper_nugget",
    "compressium:cobblestone_1",
    "thermal:copper_nugget",
    "minecraft:air",
    "minecraft:dropper",
    "minecraft:air",
    "thermal:copper_nugget",
    "minecraft:iron_ingot",
    "thermal:copper_nugget",
  ]);
});

// Category: cobblefordays
ServerEvents.recipes((event) => {
  create3x3(event, "cobblefordays:tier_2", [
    "minecraft:cobblestone",
    "minecraft:cobblestone",
    "minecraft:cobblestone",
    "minecraft:water_bucket",
    "cobblefordays:tier_1",
    "minecraft:lava_bucket",
    "minecraft:cobblestone",
    "minecraft:cobblestone",
    "minecraft:cobblestone",
  ]);

  create3x3(event, "cobblefordays:tier_3", [
    "minecraft:iron_ingot",
    "minecraft:iron_ingot",
    "minecraft:iron_ingot",
    "minecraft:water_bucket",
    "cobblefordays:tier_2",
    "minecraft:lava_bucket",
    "minecraft:iron_ingot",
    "minecraft:iron_ingot",
    "minecraft:iron_ingot",
  ]);

  create3x3(event, "cobblefordays:tier_4", [
    "minecraft:gold_ingot",
    "minecraft:gold_ingot",
    "minecraft:gold_ingot",
    "minecraft:water_bucket",
    "cobblefordays:tier_3",
    "minecraft:lava_bucket",
    "minecraft:gold_ingot",
    "minecraft:gold_ingot",
    "minecraft:gold_ingot",
  ]);

  create3x3(event, "cobblefordays:tier_5", [
    "minecraft:diamond",
    "minecraft:diamond",
    "minecraft:diamond",
    "minecraft:water_bucket",
    "cobblefordays:tier_4",
    "minecraft:lava_bucket",
    "minecraft:diamond",
    "minecraft:diamond",
    "minecraft:diamond",
  ]);
});

// Category: telepastries
ServerEvents.recipes((event) => {
  create3x3(event, "telepastries:custom_cake", [
    "minecraft:oak_log",
    "minecraft:oak_log",
    "minecraft:oak_log",
    "minecraft:oak_log",
    "minecraft:cake",
    "minecraft:oak_log",
    "minecraft:oak_log",
    "minecraft:oak_log",
    "minecraft:oak_log",
  ]);

  create3x3(event, "telepastries:lost_city_cake", [
    "minecraft:skeleton_skull",
    "minecraft:diamond_block",
    "minecraft:skeleton_skull",
    "minecraft:white_bed",
    "minecraft:cake",
    "minecraft:skeleton_skull",
    "minecraft:skeleton_skull",
    "minecraft:diamond_block",
    "minecraft:skeleton_skull",
  ]);
});

// Category: botania
ServerEvents.recipes((event) => {
  event.smelting("actuallyadditions:black_quartz", "botania:quartz_dark");

  create3x3(event, "constructionwand:infinity_wand", [
    "minecraft:air",
    "minecraft:air",
    "botania:terrasteel_ingot",
    "minecraft:air",
    "minecraft:stick",
    "minecraft:air",
    "minecraft:stick",
    "minecraft:air",
    "minecraft:air",
  ]);
});

// Category: gateways
ServerEvents.recipes((event) => {
  shapeless(
    event,
    Item.of("gateways:gate_pearl", '{gateway:"gateways:emerald_grove_easy"}'),
    [
      "minecraft:ender_pearl",
      "#minecraft:flowers",
      "#minecraft:flowers",
      "#minecraft:flowers",
    ]
  );
});

// Category: industrialforegoing
ServerEvents.recipes((event) => {
  create3x3(event, "industrialforegoing:mycelial_meatallurgic", [
    "minecraft:iron_ingot",
    "minecraft:iron_ingot",
    "minecraft:iron_ingot",
    "minecraft:iron_ingot",
    "industrialforegoing:meat_bucket",
    "minecraft:iron_ingot",
    "minecraft:redstone",
    "industrialforegoing:machine_frame_supreme",
    "minecraft:redstone",
  ]);
});

// Category: nuclearcraft_bigreactors
ServerEvents.recipes((event) => {
  event.smelting("bigreactors:benitoite_crystal", "bigreactors:benitoite_ore");
  event.smelting("4x dimdoors:world_thread", "nuclearcraft:neutronium_ingot");
});

// Category: advanced_ae
ServerEvents.recipes((event) => {
  create2x2(event, "advanced_ae:adv_pattern_provider_upgrade", [
    "minecraft:iron_ingot",
    "ae2:capacity_card",
    "ae2:capacity_card",
    "ae2:engineering_processor",
  ]);

  create2x2(event, "advanced_ae:adv_pattern_provider_capacity_upgrade", [
    "minecraft:iron_ingot",
    "minecraft:redstone",
    "minecraft:ender_pearl",
    "ae2:logic_processor",
  ]);

  create3x3(event, "advanced_ae:adv_processing_pattern", [
    "ae2:charged_certus_quartz_crystal",
    "minecraft:redstone",
    "ae2:charged_certus_quartz_crystal",
    "ae2:blank_pattern",
    "advanced_ae:quantum_processor",
    "ae2:blank_pattern",
    "ae2:charged_certus_quartz_crystal",
    "minecraft:redstone",
    "ae2:charged_certus_quartz_crystal",
  ]);
});

// Category: hostilenetworks
ServerEvents.recipes((event) => {
  create3x3(
    event,
    Item.of(
      "hostilenetworks:data_model",
      '{data_model:{data:6,id:"hostilenetworks:born_in_chaos/lord_pumpkinhead"}}'
    ),
    [
      "born_in_chaos_v1:bagof_candy",
      "born_in_chaos_v1:pumpkin_bullet",
      "born_in_chaos_v1:lord_pumpkinheads_hat_helmet",
      "born_in_chaos_v1:smoldering_infernal_ember",
      "born_in_chaos_v1:pumpkinhandgun",
      "born_in_chaos_v1:soulbane",
      "born_in_chaos_v1:magical_holiday_candy",
      "born_in_chaos_v1:magical_holiday_candy",
      "born_in_chaos_v1:magical_holiday_candy",
    ]
  );
});

// Category: other_misc
ServerEvents.recipes((event) => {
  create3x3(event, "minecraft:bell", [
    "minecraft:gold_nugget",
    "minecraft:gold_nugget",
    "minecraft:gold_nugget",
    "minecraft:gold_nugget",
    "minecraft:cobblestone",
    "minecraft:gold_nugget",
    "minecraft:gold_nugget",
    "minecraft:gold_nugget",
    "minecraft:gold_nugget",
  ]);

  create3x3(
    event,
    Item.of("sophisticatedstorage:iron_chest", '{woodType:"oak"}'),
    [
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
      "minecraft:chest",
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
      "minecraft:iron_ingot",
    ]
  );

  create3x3(
    event,
    Item.of("sophisticatedstorage:gold_chest", '{woodType:"oak"}'),
    [
      "minecraft:gold_ingot",
      "minecraft:gold_ingot",
      "minecraft:gold_ingot",
      "minecraft:gold_ingot",
      Item.of("sophisticatedstorage:iron_chest", '{woodType:"oak"}'),
      "minecraft:gold_ingot",
      "minecraft:gold_ingot",
      "minecraft:gold_ingot",
      "minecraft:gold_ingot",
    ]
  );

  create3x3(
    event,
    Item.of("sophisticatedstorage:diamond_chest", '{woodType:"oak"}'),
    [
      "minecraft:diamond",
      "minecraft:diamond",
      "minecraft:diamond",
      "minecraft:diamond",
      Item.of("sophisticatedstorage:gold_chest", '{woodType:"oak"}'),
      "minecraft:diamond",
      "minecraft:diamond",
      "minecraft:diamond",
      "minecraft:diamond",
    ]
  );

  shapeless(
    event,
    Item.of("sophisticatedstorage:netherite_chest", '{woodType:"oak"}'),
    [
      "minecraft:netherite_ingot",
      Item.of("sophisticatedstorage:diamond_chest", '{woodType:"oak"}'),
    ]
  );

  create3x3(event, "mekanismgenerators:wind_generator", [
    "minecraft:iron_ingot",
    "mekanism:ingot_osmium",
    "minecraft:iron_ingot",
    "mekanism:ingot_osmium",
    "mekanism:alloy_infused",
    "mekanism:ingot_osmium",
    "mekanism:alloy_infused",
    "mekanism:basic_control_circuit",
    "mekanism:alloy_infused",
  ]);

  shapeless(event, "8x ironfurnaces:rainbow_plating", [
    "ironfurnaces:item_xmas",
    "ironfurnaces:iron_furnace",
    "ironfurnaces:gold_furnace",
    "ironfurnaces:diamond_furnace",
    "ironfurnaces:emerald_furnace",
    "ironfurnaces:obsidian_furnace",
    "ironfurnaces:crystal_furnace",
    "ironfurnaces:netherite_furnace",
  ]);

  create3x3(event, "ironfurnaces:rainbow_core", [
    "minecraft:red_stained_glass",
    "minecraft:orange_stained_glass",
    "minecraft:yellow_stained_glass",
    "ironfurnaces:allthemodium_furnace",
    "ironfurnaces:vibranium_furnace",
    "ironfurnaces:unobtainium_furnace",
    "minecraft:blue_stained_glass",
    "minecraft:purple_stained_glass",
    "minecraft:magenta_stained_glass",
  ]);

  event.smelting("armorplus:lava_crystal", "armorplus:ore_lava_crystal_stone");

  event.smelting(
    "armorplus:frost_crystal",
    "armorplus:ore_frost_crystal_stone"
  );

  event.smelting("2x armorplus:lava_crystal", "armorplus:ore_lava_crystal");

  event.smelting("2x armorplus:frost_crystal", "armorplus:ore_frost_crystal");

  event.smelting(
    "born_in_chaos_v1:dark_metal_ingot",
    "born_in_chaos_v1:pileof_dark_metal"
  );

  event.smelting(
    "chisel_chipped_integration:technical_fan",
    "chisel_chipped_integration:technical_caution_framed_plates"
  );

  event.smelting(
    "chisel_chipped_integration:factory_blue_framed_circuit",
    "chisel_chipped_integration:factory_dotted_rusty_plate"
  );

  shapeless(event, "minecraft:wheat_seeds", ["minecraft:wheat"]);

  event.smelting("armorplus:ender_dragon_scale", "minecraft:dragon_egg");

  shapeless(event, "actuallyadditions:ender_star", [
    "minecraft:nether_star",
    "minecraft:dragon_breath",
    "actuallyadditions:black_quartz",
    "minecraft:prismarine_shard",
  ]);

  create2x2same(event, "actuallyadditions:black_quartz_brick_block", [
    "actuallyadditions:black_quartz_block",
  ]);

  create3x3same(event, "cataclysm:enderite_block", [
    "cataclysm:enderite_ingot",
  ]);

  shapeless(event, "9x cataclysm:enderite_ingot", ["cataclysm:enderite_block"]);

  create323(event, "8x minecraft:crying_obsidian", ["minecraft:obsidian"]);

  shapeless(event, "botanypotstiers:creative_terracotta_hopper_botany_pot", [
    "botanypotstiers:creative_terracotta_botany_pot",
    "minecraft:hopper",
  ]);

  shapeless(
    event,
    Item.of(
      "patchouli:guide_book",
      '{"patchouli:book":"patchouli:project_infinity"}'
    ),
    ["minecraft:book", "voidminers:rubetine"]
  );

  create3x3(event, "angelblockrenewed:angel_block", [
    "minecraft:stick",
    "minecraft:feather",
    "minecraft:stick",
    "minecraft:feather",
    "minecraft:ender_eye",
    "minecraft:feather",
    "minecraft:stick",
    "minecraft:feather",
    "minecraft:stick",
  ]);

  shapeless(event, "minecraft:oak_planks", [
    "minecraft:oak_slab",
    "minecraft:oak_slab",
  ]);

  event.shaped(Item.of("armorplus:cobalt_helmet", 1), ["   ", "AAA", "A A"], {
    A: "#forge:ingots/cobalt",
  });

  event.shaped(
    Item.of("armorplus:cobalt_chestplate", 1),
    ["A A", "AAA", "AAA"],
    {
      A: "#forge:ingots/cobalt",
    }
  );

  event.shaped(Item.of("armorplus:cobalt_leggings", 1), ["AAA", "A A", "A A"], {
    A: "#forge:ingots/cobalt",
  });

  event.shaped(Item.of("armorplus:cobalt_boots", 1), ["   ", "A A", "A A"], {
    A: "#forge:ingots/cobalt",
  });

  event.shaped(
    Item.of("armorplus:manyullyn_helmet", 1),
    ["   ", "AAA", "A A"],
    {
      A: "#forge:ingots/manyullyn",
    }
  );

  event.shaped(
    Item.of("armorplus:manyullyn_chestplate", 1),
    ["A A", "AAA", "AAA"],
    {
      A: "#forge:ingots/manyullyn",
    }
  );

  event.shaped(
    Item.of("armorplus:manyullyn_leggings", 1),
    ["AAA", "A A", "A A"],
    {
      A: "#forge:ingots/manyullyn",
    }
  );

  event.shaped(Item.of("armorplus:manyullyn_boots", 1), ["   ", "A A", "A A"], {
    A: "#forge:ingots/manyullyn",
  });
});

// Category: extendedcrafting_projecte
ServerEvents.recipes((event) => {
  create3x3(event, "projectexpansion:basic_emc_link", [
    "projecte:low_covalence_dust",
    "projecte:medium_covalence_dust",
    "projecte:high_covalence_dust",
    "projecte:aeternalis_fuel",
    "projecte:alchemical_chest",
    "projecte:aeternalis_fuel",
    "projecte:high_covalence_dust",
    "projecte:medium_covalence_dust",
    "projecte:low_covalence_dust",
  ]);

  create3x3(event, "projecte:repair_talisman", [
    "projecte:low_covalence_dust",
    "projecte:medium_covalence_dust",
    "projecte:high_covalence_dust",
    "botania:manaweave_cloth",
    "minecraft:paper",
    "botania:manaweave_cloth",
    "projecte:high_covalence_dust",
    "projecte:medium_covalence_dust",
    "projecte:low_covalence_dust",
  ]);

  create3x3(event, "extendedcrafting:redstone_ingot", [
    "minecraft:iron_ingot",
    "minecraft:redstone",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
  ]);

  create3x3(event, "projecte:medium_covalence_dust", [
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:redstone",
    "minecraft:air",
    "minecraft:iron_ingot",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
  ]);

  create3x3(event, "extendedcrafting:basic_table", [
    "extendedcrafting:basic_component",
    "extendedcrafting:basic_catalyst",
    "extendedcrafting:basic_component",
    "avaritia:double_compressed_crafting_table",
    "minecraft:iron_block",
    "avaritia:double_compressed_crafting_table",
    "extendedcrafting:basic_component",
    "extendedcrafting:black_iron_slate",
    "extendedcrafting:basic_component",
  ]);
});

// Category: refinedstorage
ServerEvents.recipes((event) => {
  create3x3(event, "rsinfinitybooster:infinity_card", [
    "minecraft:ender_eye",
    "refinedstorage:range_upgrade",
    "minecraft:ender_eye",
    "refinedstorage:range_upgrade",
    "minecraft:nether_star",
    "refinedstorage:range_upgrade",
    "minecraft:netherite_ingot",
    "minecraft:netherite_ingot",
    "minecraft:netherite_ingot",
  ]);

  create3x3(event, "rsinfinitybooster:dimension_card", [
    "rsinfinitybooster:infinity_card",
    "minecraft:nether_star",
    "rsinfinitybooster:infinity_card",
    "minecraft:nether_star",
    "minecraft:ender_eye",
    "minecraft:nether_star",
    "rsinfinitybooster:infinity_card",
    "minecraft:nether_star",
    "rsinfinitybooster:infinity_card",
  ]);

  shapeless(event, "refinedstorage:creative_storage_block", [
    "refinedstorage:creative_storage_disk",
    "refinedstorage:machine_casing",
  ]);

  shapeless(event, "refinedstorage:creative_fluid_storage_block", [
    "refinedstorage:creative_fluid_storage_disk",
    "refinedstorage:machine_casing",
  ]);

  // Category: Compact Mekanism Machines Plus CHANGE ME!!!!
  create3x3(event, "compactmekanismmachinesplus:compact_fusion_reactor", [
    "bfr:fusion_reactor_frame",
    "bfr:fusion_reactor_controller",
    "bfr:fusion_reactor_frame",
    "mekanismgenerators:reactor_glass",
    "bfr:fusion_reactor_port",
    "bfr:laser_focus_matrix",
    "bfr:fusion_reactor_frame",
    "bfr:fusion_reactor_logic_adapter",
    "bfr:fusion_reactor_frame",
  ]);
});
