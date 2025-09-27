JEIEvents.hideItems(event => {
  let excludedItems = [
    "chipped:botanist_workbench",
    "chipped:glassblower",
    "chipped:carpenters_table",
    "chipped:loom_table",
    "chipped:mason_table",
    "chipped:alchemy_bench",
    "chipped:tinkering_table",
  ];

  Ingredient.of(/^chipped:/).itemIds.forEach(id => {
    if (!excludedItems.includes(id)) event.hide(id);
  });
});
