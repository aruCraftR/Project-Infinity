const removeAvaritiaItems = [
  'avaritia:longbowofthe_heavens',
  'avaritia:cosmic_meatballs',
  'avaritia:ultimate_stew',
  'avaritia:infinity_catalyst',
  'avaritia:world_breaker',
  'avaritia:hoeofthe_green_earth',
  'avaritia:natures_ruin',
  'avaritia:planet_eater',
  'avaritia:swordofthe_cosmos',
  'avaritia:endest_pearl',
  'avaritia:neutron_collector',
  'avaritia:infinity_ingot',
  'avaritia:skullfire_sword',
  'avaritia:infinity_armor_helmet',
  'avaritia:infinity_armor_chestplate',
  'avaritia:infinity_armor_leggings',
  'avaritia:infinity_armor_boots',
]

//Function to remove the items above
ServerEvents.recipes(event => {
  removeAvaritiaItems.forEach(item => event.remove({ output: item }))
})
