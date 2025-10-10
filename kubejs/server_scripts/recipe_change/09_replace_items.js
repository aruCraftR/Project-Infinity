//replace items
ServerEvents.recipes((event) => {
  event.replaceInput(
    { output: 'extrahnn:upgrade_module_stack' },
    'minecraft:comparator',
    'kubejs:infinity_12'
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
  event.replaceInput(
    { input: 'avaritia:singularity' },
    'avaritia:singularity',
    'extendedcrafting:ultimate_singularity'
  );
  event.replaceInput(
    { output: 'cyclic:soulstone' },
    'thermal:netherite_nugget',
    'botanicalextramachinery:shadow_dragonstone'
  );
  event.replaceInput(
    { output: 'projecte:repair_talisman' },
    '#bookshelf:strings',
    'botanicalextramachinery:shadow_dragonstone'
  );
});
