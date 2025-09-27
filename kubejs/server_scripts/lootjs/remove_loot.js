priority: 0;
<<<<<<< HEAD
LootJS.modifiers((event) => {
=======
LootJS.modifiers(event => {
>>>>>>> aaa06ae3ba8155296024a41a6dbe6b2e5ddcc425
  event
    .addLootTypeModifier(LootType.ENTITY, LootType.CHEST)
    .removeLoot(["@everlastingabilities"])
    .removeLoot(["everlastingabilities:inject_ability_totem"])
    .removeLoot([
      "born_in_chaos_v1:pumpkin_staff",
      "born_in_chaos_v1:soul_cutlass",
    ]);
});

LootJS.modifiers((event) => {
  event
    .addEntityLootModifier("allthemodium:piglich")
    .randomChance(0.125)
    .addLoot("allthemodium:piglich_heart")
    .removeLoot([
      "allthemodium:allthemodium_helmet",
      "allthemodium:allthemodium_chestplate",
      "allthemodium:allthemodium_leggings",
      "allthemodium:allthemodium_boots",
      "allthemodium:allthemodium_carrot",
      "allthemodium:allthemodium_apple",
    ]);
});

<<<<<<< HEAD
LootJS.modifiers((event) => {
  event.disableLootModification(/.*swasher*/);
});

LootJS.modifiers((event) => {
=======
LootJS.modifiers(event => {
  event.disableLootModification(/.*swasher*/);
});

LootJS.modifiers(event => {
>>>>>>> aaa06ae3ba8155296024a41a6dbe6b2e5ddcc425
  event.addLootTypeModifier(LootType.FISHING).removeLoot([/.*swasher*/]);
});

LootJS.modifiers((event) => {
  event
    .addLootTypeModifier(LootType.ENTITY, LootType.CHEST)
    .removeLoot([/.*dimlet*/]);
});
