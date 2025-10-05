JEIEvents.hideItems((event) => {
  let excludedItems = [
    'chipped:botanist_workbench',
    'chipped:glassblower',
    'chipped:carpenters_table',
    'chipped:loom_table',
    'chipped:mason_table',
    'chipped:alchemy_bench',
    'chipped:tinkering_table',
  ];

  Ingredient.of(/^chipped:/).itemIds.forEach((id) => {
    if (!excludedItems.includes(id)) event.hide(id);
  });
});

JEIEvents.removeCategories((event) => {
  event.remove([
    'ali:block_loot',
    'ali:fishing_loot',
    'ali:hero_loot',
    'ali:archaelogy_loot',
    'ali:plant_loot',
    'ali:gameplay_loot',
    'ali:trade_loot',
    'cyclic:packager',
  ]);
});
