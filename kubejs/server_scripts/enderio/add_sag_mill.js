ServerEvents.recipes(event => {
  // event.recipes.enderio
  // .sag_milling(['output'], 'input')
  // .energy(5000)

  event.recipes.enderio
    .sag_milling(["2x compressium:cobblestone_1"], "compressium:stone_1")
    .energy(5000);
  event.recipes.enderio
    .sag_milling(["2x compressium:cobblestone_2"], "compressium:stone_2")
    .energy(5000);
  event.recipes.enderio
    .sag_milling(["2x compressium:cobblestone_3"], "compressium:stone_3")
    .energy(5000);
  event.recipes.enderio
    .sag_milling(["2x compressium:gravel_1"], "compressium:cobblestone_1")
    .energy(5000);
  event.recipes.enderio
    .sag_milling(["2x compressium:gravel_2"], "compressium:cobblestone_2")
    .energy(5000);
  event.recipes.enderio
    .sag_milling(["2x compressium:gravel_3"], "compressium:cobblestone_3")
    .energy(5000);
  event.recipes.enderio
    .sag_milling(["2x compressium:sand_1"], "compressium:gravel_1")
    .energy(5000);
  event.recipes.enderio
    .sag_milling(["2x compressium:sand_2"], "compressium:gravel_2")
    .energy(5000);
  event.recipes.enderio
    .sag_milling(["2x compressium:sand_3"], "compressium:gravel_3")
    .energy(5000);
  event.recipes.enderio
    .sag_milling(["2x exdeorum:dust"], "minecraft:sand")
    .energy(5000);
  event.recipes.enderio
    .sag_milling(
      ["2x exdeorum:compressed_crushed_netherrack"],
      "compressium:netherrack_1"
    )
    .energy(5000);

  event.recipes.enderio
    .sag_milling(
      ["2x exdeorum:compressed_crushed_end_stone"],
      "compressium:endstone_1"
    )
    .energy(5000);

  event.recipes.enderio
    .sag_milling(["kubejs:blaze_gold_dust"], "kubejs:blaze_gold_ingot")
    .energy(5000);

  event.recipes.enderio
    .sag_milling(["kubejs:azure_silver_dust"], "kubejs:azure_silver_ingot")
    .energy(5000);

  event.recipes.enderio
    .sag_milling(["kubejs:azure_electrum_dust"], "kubejs:azure_electrum_ingot")
    .energy(5000);

  event.recipes.enderio
    .sag_milling(["kubejs:azure_electrum_dust"], "kubejs:azure_electrum_ingot")
    .energy(5000);

  event.recipes.enderio
    .sag_milling(["2x kubejs:raw_arcmetal"], "kubejs:arcmetal_ore")
    .energy(5000);

  event.recipes.enderio
    .sag_milling(["2x kubejs:raw_solarmetal"], "kubejs:solarmetal_ore")
    .energy(5000);

  event.recipes.enderio
    .sag_milling(["2x kubejs:raw_plasteel"], "kubejs:plasteel_ore")
    .energy(5000);

  event.recipes.enderio
    .sag_milling(["2x kubejs:raw_voidmetal"], "kubejs:voidmetal_ore")
    .energy(5000);
});
