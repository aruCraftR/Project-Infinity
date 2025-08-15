MMEvents.createProcesses(event => {
  //spirit attuned gem recipe @occultism
  event
    .create('mm:fire_attuned_recipe')
    .structureId('mm:fire_attuned_structure')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:diamond',
        count: 4
      }
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 16384
      }
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:lava',
        amount: 2000
      }
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'occultism:spirit_attuned_gem',
        count: 4
      }
    })

  //Infused Lava Crystal
  event
    .create('mm:infused_lava_crystal_recipe')
    .structureId('mm:fire_attuned_structure')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'armorplus:lava_crystal',
        count: 4
      }
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 16384
      }
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'minecraft:lava',
        amount: 1000
      }
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'armorplus:infused_lava_crystal',
        count: 4
      }
    })


  //Blood Magic Life Essence Craft
  event
    .create('mm:blood_test_recipe')
    .structureId('mm:fire_attuned_structure')
    .ticks(40)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'botanicalextramachinery:crimson_dragonstone',
        count: 4
      }
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 100000
      }
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:fluid',
        fluid: 'bloodmagic:life_essence_fluid',
        amount: 20000
      }
    })
})
