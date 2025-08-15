MMEvents.createProcesses(event => {
  //nuclearcraft:neutronium_ingot
  event
    .create('mm:fission_reactor_recipe_neutronium_ingot')
    .structureId('mm:fission_reactor_structure')
    .ticks(1000)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'common_ore_library:platinum_ingot',
        count: 4
      }
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        tag: 'nuclearcraft:uranium',
        count: 1
      }
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'nuclearcraft:neutronium_ingot',
        count: 4
      }
    })
    .output({
      type: "mm:output/simple",
      ingredient: {
        type: "mm:energy",
        amount: 5000000
      }
    })

  //world thread
  event
    .create('mm:fission_reactor_recipe_world_thread')
    .structureId('mm:fission_reactor_structure')
    .ticks(1000)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'nuclearcraft:neutronium_ingot',
        count: 1
      }
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'dimdoors:world_thread',
        count: 8
      }
    })
})
