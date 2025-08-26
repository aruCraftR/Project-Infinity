ServerEvents.recipes(event => {
  //Ultimate Heart
  event.custom({
    type: 'extendedcrafting:shapeless_table',
    ingredients: [
      'avaritia:neutron_pile',
      'avaritia:neutron_nugget',
      'cataclysm:abyssal_sacrifice',
      'minecraft:heart_of_the_sea',
      'allthemodium:piglich_heart',
      'bhc:red_heart_canister',
      'bhc:yellow_heart_canister',
      'bhc:green_heart_canister',
      'bhc:blue_heart_canister',
      'bhc:soul_heart_canister',
      'bhc:red_heart_melted',
      'bhc:yellow_heart_melted',
      'bhc:green_heart_melted',
      'bhc:blue_heart_melted',
      Item.of('bhc:red_heart_patch', '{Damage:0}'),
      Item.of('bhc:yellow_heart_patch', '{Damage:0}'),
      Item.of('bhc:green_heart_patch', '{Damage:0}'),
      Item.of('bhc:blue_heart_patch', '{Damage:0}'),
      'bhc:red_heart',
      'bhc:yellow_heart',
      'bhc:green_heart',
      'bhc:blue_heart',
      'bhc:soul_heart_crystal',
      'born_in_chaos_v1:bone_heart',
      'cyclic:heart',
      'cyclic:heart_empty',
      'bosses_of_mass_destruction:obsidian_heart',
      'kubejs:left_dragon_heart',
      'kubejs:right_dragon_heart',
      'draconicevolution:dragon_heart',
      'draconicadditions:chaos_heart',
      'kubejs:warden_heart',
      'kubejs:creeper_heart',
      'kubejs:blaze_heart',
      'kubejs:wither_heart'

    ],
    result: { item: 'kubejs:ultimate_heart' }
  }).id('kubejs:ultimate_heart')
})
