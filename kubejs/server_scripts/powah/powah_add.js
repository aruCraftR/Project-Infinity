ServerEvents.recipes(event => {
  event.recipes.powah.energizing(
    [
      'allthemodium:allthemodium_ingot',
      'bloodmagic:life_essence_bucket',
      '3x mysticalagradditions:insanium_essence',
      'twilightforest:fiery_block'
    ],
    'allthemodium:vibranium_ingot',
    100000
  )

  event.recipes.powah.energizing(
    [
      'minecraft:iron_block',
      'minecraft:gold_block'
    ],
    '2x powah:energized_steel_block',
    90000
  )
})
