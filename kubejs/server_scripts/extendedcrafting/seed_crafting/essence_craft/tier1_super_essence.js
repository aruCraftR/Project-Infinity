ServerEvents.recipes((event) => {
  //Tier 1 Super Essence
  event
    .custom({
      type: 'extendedcrafting:shapeless_table',
      ingredients: [
        {
          item: 'mysticalagriculture:inferium_essence',
        },
        {
          item: 'mysticalagriculture:stone_essence',
        },
        {
          item: 'mysticalagriculture:dirt_essence',
        },
        {
          item: 'mysticalagriculture:wood_essence',
        },
        {
          item: 'mysticalagriculture:ice_essence',
        },
        {
          item: 'mysticalagriculture:deepslate_essence',
        },
      ],
      result: {
        item: 'kubejs:tier1_super_essence',
      },
    })
    .id('kubejs:tier1_super_essence');
});
