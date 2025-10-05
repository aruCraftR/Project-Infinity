ServerEvents.recipes((event) => {
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      { item: 'allthemodium:allthemodium_ingot' },
      { item: 'bloodmagic:life_essence_bucket' },
      { item: 'mysticalagradditions:insanium_essence'},
      { item: 'twilightforest:fiery_block' },
    ],
    energy: 100000,
    result: {
      item: 'allthemodium:vibranium_ingot',
    },
  });

  event.custom({
    type: 'powah:energizing',
    ingredients: [
      { item: 'minecraft:iron_block' },
      { item: 'minecraft:gold_block' },
    ],
    energy: 90000,
    result: {
      item: 'powah:energized_steel_block',
      count: 2,
    },
  });
});
