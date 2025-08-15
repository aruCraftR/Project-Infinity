LootJS.modifiers(event => {
  event
    .addLootTypeModifier(LootType.ENTITY, LootType.CHEST)
    .removeLoot(['@everlastingabilities'])
    .removeLoot(['everlastingabilities:inject_ability_totem'])
    .removeLoot(['born_in_chaos_v1:pumpkin_staff', 'born_in_chaos_v1:soul_cutlass'])
})

LootJS.modifiers(event => {
  event
    .addEntityLootModifier('allthemodium:piglich')
    .randomChance(0.125)
    .addLoot('allthemodium:piglich_heart')
    .removeLoot([
      'allthemodium:allthemodium_helmet',
      'allthemodium:allthemodium_chestplate',
      'allthemodium:allthemodium_leggings',
      'allthemodium:allthemodium_boots',
      'allthemodium:allthemodium_carrot',
      'allthemodium:allthemodium_apple'
    ])
})

LootJS.modifiers((event) => {
    event.disableLootModification(/.*swasher*/);
});

LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.FISHING) 
        .removeLoot([/.*swasher*/])
});