ServerEvents.recipes(event => {
  shapeless(
    event,
    "compactmekanismmachines:compressed_wind_generator_x532480",
    [
      "compactmekanismmachines:compressed_wind_generator_x131072",
      "compactmekanismmachines:compressed_wind_generator_x131072",
      "kubejs:infinity_10",
    ]
  );

  create3x3(event, "kubejs:chaotic_essence", [
    "draconicevolution:medium_chaos_frag",
    "draconicevolution:medium_chaos_frag",
    "draconicevolution:medium_chaos_frag",
    "draconicevolution:medium_chaos_frag",
    "draconicevolution:large_chaos_frag",
    "draconicevolution:medium_chaos_frag",
    "draconicevolution:medium_chaos_frag",
    "draconicevolution:medium_chaos_frag",
    "draconicevolution:medium_chaos_frag",
  ]);

  create3x3same(event, "kubejs:sculk_alloy_block", [
    "kubejs:sculk_alloy_ingot",
  ]);

  shapeless(event, "9x kubejs:sculk_alloy_ingot", ["kubejs:sculk_alloy_block"]);

  event.smelting("kubejs:starmetal_ingot", "kubejs:starmetal_dust");

  create2x2same(event, "kubejs:starmetal_block", ["kubejs:starmetal_ingot"]);

  create2x2same(event, "kubejs:chaotic_essence_block", [
    "kubejs:chaotic_essence",
  ]);

  create3x3(event, "advanced_ae:flight_card", [
    "advanced_ae:quantum_alloy_plate",
    Item.of("minecraft:elytra", "{Damage:0}"),
    "advanced_ae:quantum_alloy_plate",
    "minecraft:feather",
    "advanced_ae:quantum_upgrade_base",
    "minecraft:feather",
    "advanced_ae:quantum_alloy_plate",
    "kubejs:infinity_4",
    "advanced_ae:quantum_alloy_plate",
  ]);

  event.smelting("kubejs:arcmetal_ingot", "kubejs:raw_arcmetal");

  event.smelting("kubejs:arcmetal_ingot", "kubejs:arcmetal_ore");

  create3x3same(event, "kubejs:arcmetal_block", ["kubejs:arcmetal_ingot"]);

  shapeless(event, "9x kubejs:arcmetal_ingot", ["kubejs:arcmetal_block"]);

  event.smelting("kubejs:voidmetal_ingot", "kubejs:raw_voidmetal");

  event.smelting("kubejs:voidmetal_ingot", "kubejs:voidmetal_ore");

  create3x3same(event, "kubejs:voidmetal_block", ["kubejs:voidmetal_ingot"]);

  shapeless(event, "9x kubejs:voidmetal_ingot", ["kubejs:voidmetal_block"]);

  create3x3(event, "kubejs:bunny_steel_ingot", [
    "minecraft:air",
    "minecraft:rabbit_hide",
    "minecraft:air",
    "minecraft:rabbit_foot",
    "#forge:ingots/steel",
    "minecraft:rabbit_hide",
    "minecraft:air",
    "minecraft:rabbit_hide",
    "minecraft:air",
  ]);

  create3x3(event, Item.of("kubejs:tyrian_steel_ingot", 4), [
    "thermal_extra:twinite_dust",
    "thermal_extra:dragonsteel_dust",
    "thermal_extra:abyssal_dust",
    "kubejs:azure_electrum_ingot",
    "minecraft:netherite_scrap",
    "kubejs:crimson_steel_ingot",
    "kubejs:azure_electrum_ingot",
    "waystones:warp_dust",
    "kubejs:crimson_steel_ingot",
  ]);

  create3x3(event, Item.of("kubejs:crimson_steel_ingot", 2), [
    "minecraft:blaze_rod",
    "minecraft:air",
    "minecraft:blaze_rod",
    "kubejs:crimson_iron_ingot",
    "minecraft:magma_cream",
    "kubejs:crimson_iron_ingot",
    "kubejs:crimson_iron_ingot",
    "minecraft:air",
    "kubejs:crimson_iron_ingot",
  ]);

  event.smelting("kubejs:crimson_steel_ingot", "kubejs:crimson_steel_dust");

  event.smelting("kubejs:crimson_iron_ingot", "kubejs:crimson_iron_dust");

  create3x3(event, "kubejs:midnight_iron_ingot", [
    "minecraft:air",
    "minecraft:blackstone",
    "minecraft:air",
    "minecraft:blackstone",
    "minecraft:iron_ingot",
    "minecraft:blackstone",
    "minecraft:air",
    "minecraft:blackstone",
    "minecraft:air",
  ]);

  create3x3same(event, "kubejs:midnight_iron_block", [
    "kubejs:midnight_iron_ingot",
  ]);

  shapeless(event, "9x kubejs:midnight_iron_ingot", [
    "kubejs:midnight_iron_block",
  ]);

  create3x3same(event, "kubejs:bunny_steel_block", [
    "kubejs:bunny_steel_ingot",
  ]);

  shapeless(event, "9x kubejs:bunny_steel_ingot", ["kubejs:bunny_steel_block"]);

  event.smelting("kubejs:solarmetal_ingot", "kubejs:raw_solarmetal");

  event.smelting("kubejs:solarmetal_ingot", "kubejs:solarmetal_ore");

  create3x3same(event, "kubejs:solarmetal_block", ["kubejs:solarmetal_ingot"]);

  shapeless(event, "9x kubejs:solarmetal_ingot", ["kubejs:solarmetal_block"]);

  event.smelting("kubejs:plasteel_ingot", "kubejs:raw_plasteel");

  event.smelting("kubejs:plasteel_ingot", "kubejs:plasteel_ore");

  create3x3same(event, "kubejs:plasteel_block", ["kubejs:plasteel_ingot"]);

  shapeless(event, "9x kubejs:plasteel_ingot", ["kubejs:plasteel_block"]);

  shapeless(event, "kubejs:blaze_gold_ingot", [
    "minecraft:gold_ingot",
    "4x minecraft:blaze_powder",
  ]);

  create3x3same(event, "kubejs:blaze_gold_block", ["kubejs:blaze_gold_ingot"]);

  shapeless(event, "9x kubejs:blaze_gold_ingot", ["kubejs:blaze_gold_block"]);

  event.smelting("kubejs:azure_silver_ingot", "kubejs:azure_silver_ore");

  create3x3same(event, "kubejs:azure_silver_block", [
    "kubejs:azure_silver_ingot",
  ]);

  shapeless(event, "9x kubejs:azure_silver_ingot", [
    "kubejs:azure_silver_block",
  ]);

  event.smelting("kubejs:azure_electrum_ingot", "kubejs:azure_electrum_dust");

  create3x3same(event, "kubejs:azure_electrum_block", [
    "kubejs:azure_electrum_ingot",
  ]);

  create3x3(event, "kubejs:azure_electrum_ingot", [
    "minecraft:gold_ingot",
    "minecraft:air",
    "minecraft:gold_ingot",
    "kubejs:azure_silver_ingot",
    "minecraft:ender_pearl",
    "kubejs:azure_silver_ingot",
    "kubejs:azure_silver_ingot",
    "minecraft:air",
    "kubejs:azure_silver_ingot",
  ]);

  create3x3same(event, "kubejs:double_compressed_iron_block", [
    "pneumaticcraft:compressed_iron_block",
  ]);

  create3x3same(event, "kubejs:triple_compressed_iron_block", [
    "kubejs:double_compressed_iron_block",
  ]);

  create3x3same(event, "kubejs:double_compressed_slate", [
    "kubejs:compressed_slate",
  ]);

  create3x3same(event, "kubejs:pink_slime_block", [
    "industrialforegoing:pink_slime_ingot",
  ]);

  shapeless(event, "9x industrialforegoing:pink_slime_ingot", [
    "kubejs:pink_slime_block",
  ]);

  shapeless(event, "9x kubejs:compressed_slate", [
    "kubejs:double_compressed_slate",
  ]);

  create3x3same(event, "kubejs:compressed_slate", ["bloodmagic:blankslate"]);

  shapeless(event, "9x bloodmagic:blankslate", ["kubejs:compressed_slate"]);

  shapeless(event, "9x kubejs:azure_electrum_ingot", [
    "kubejs:azure_electrum_block",
  ]);

  create3x3(event, Item.of("extendedcrafting:black_iron_ingot", 27), [
    "kubejs:compressed_slate",
    "mekanism:hdpe_sheet",
    "kubejs:compressed_slate",
    "mekanism:hdpe_sheet",
    "draconicevolution:wyvern_core",
    "mekanism:hdpe_sheet",
    "kubejs:compressed_slate",
    "mekanism:hdpe_sheet",
    "kubejs:compressed_slate",
  ]);

  shapeless(event, "draconicevolution:dragon_heart", [
    "kubejs:left_dragon_heart",
    "kubejs:right_dragon_heart",
  ]);

  shapeless(event, "9x kubejs:infused_coin", ["kubejs:ascended_coin"]);

  shapeless(event, "9x kubejs:apotheotic_coin", ["kubejs:infused_coin"]);

  create3x3same(event, "kubejs:ascended_coin", ["kubejs:infused_coin"]);

  create3x3same(event, "kubejs:infused_coin", ["kubejs:apotheotic_coin"]);

  create3x3same(event, "kubejs:compressed_block_of_gunpowder", [
    "thermal:gunpowder_block",
  ]);

  shapeless(event, "9x thermal:gunpowder_block", [
    "kubejs:compressed_block_of_gunpowder",
  ]);

  shapeless(event, "kubejs:azure_silver_ore", [
    "4x kubejs:azure_silver_ore_chunk",
  ]);
  shapeless(event, "kubejs:auto_mechanical_sieve", [
    "exdeorum:mechanical_sieve",
  ]);
  shapeless(event, "exdeorum:mechanical_sieve", [
    "kubejs:auto_mechanical_sieve",
  ]);
});
