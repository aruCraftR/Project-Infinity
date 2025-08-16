ServerEvents.recipes(event => {
  event.recipes.enderio
    .slicing('kubejs:infinity_6', [
      'kubejs:infinity_5',
      'allthemodium:allthemodium_ingot',
      'kubejs:infinity_5',
      'allthemodium:vibranium_ingot',
      'kubejs:infinity_5',
      'allthemodium:unobtainium_ingot'
    ])
    .energy(10000)
})
