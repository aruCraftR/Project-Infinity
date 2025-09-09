//replace items
ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: 'extrahnn:upgrade_module_stack' },
    'minecraft:comparator',
    'kubejs:infinity_6'
  );

  event.replaceInput(
    { input: 'bigreactors:yellorium_ingot' },
    'bigreactors:yellorium_ingot',
    'mekanism:ingot_uranium'
  );

  event.replaceInput(
    { output: 'botania:spark', input: 'minecraft:gold_nugget' },
    'minecraft:gold_nugget',
    'minecraft:iron_nugget'
  );

  event.replaceInput(
    { input: 'avaritia:eternal_singularity' },
    'avaritia:eternal_singularity',
    'extendedcrafting:ultimate_singularity'
  );
});
