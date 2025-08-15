ServerEvents.recipes(event => {
  event.recipes.enderio
    .slicing('kubejs:infinity_4', [
      'kubejs:infinity_3',
      'allthemodium:allthemodium_ingot',
      'kubejs:infinity_3',
      'allthemodium:vibranium_ingot',
      'kubejs:infinity_3',
      'allthemodium:unobtainium_ingot'
    ])
    .energy(10000)
})
