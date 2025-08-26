//replace items
ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: "extrahnn:upgrade_module_stack" },
    "minecraft:comparator",
    "kubejs:infinity_6"
  );

  event.replaceInput(
    { input: "bigreactors:yellorium_ingot" },
    "bigreactors:yellorium_ingot",
    "mekanism:ingot_uranium"
  );
});