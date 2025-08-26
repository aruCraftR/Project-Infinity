ServerEvents.recipes(event => {
  //Cosmic Meatballs
  event.custom({
    type: 'extendedcrafting:shapeless_table',
    ingredients: [
      'avaritia:neutron_pile',
      'avaritia:neutron_nugget',
      'minecraft:beef',
      'minecraft:cooked_beef',
      'minecraft:porkchop',
      'minecraft:cooked_porkchop',
      'minecraft:mutton',
      'minecraft:cooked_mutton',
      'minecraft:chicken',
      'minecraft:cooked_chicken',
      'minecraft:rabbit',
      'minecraft:cooked_rabbit',
      'minecraft:cod',
      'minecraft:cooked_cod',
      'minecraft:salmon',
      'minecraft:cooked_salmon',
      'born_in_chaos_v1:monster_flesh',
      'born_in_chaos_v1:smoked_monster_flesh',
      'twilightforest:raw_venison',
      'twilightforest:cooked_venison',
      'twilightforest:raw_meef',
      'twilightforest:cooked_meef',
      'undergarden:raw_dweller_meat',
      'undergarden:dweller_steak',
      'twilightforest:torchberries',
      'twilightforest:hydra_chop',
      'twilightforest:magic_beans',
      'twilightforest:meef_stroganoff',
      'outer_end:stalker_meat',
      'outer_end:cooked_stalker_meat',
      'minecraft:rotten_flesh',
      'born_in_chaos_v1:smoked_flesh',
      'born_in_chaos_v1:corpse_maggot',
      'born_in_chaos_v1:fried_maggot',
      'born_in_chaos_v1:rotten_fish',
      'born_in_chaos_v1:smoked_fish',
      'undergarden:raw_gloomper_leg',
      'undergarden:gloomper_leg'
    ],
    result: { item: '8x avaritia:cosmic_meatballs' }
  })
    .id('avaritia:cosmic_meatballs')
})
