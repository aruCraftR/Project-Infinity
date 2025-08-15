MMEvents.createProcesses(event => {
  //
  event
    .create('mm:infinity_crucible_recipe')
    .structureId('mm:infinity_crucible_structure')
    .ticks(1)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:mekanism/gas',
        gas: 'mekanism:antimatter',
        amount: 5
      }
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:experience_bottle',
        count: 64
      }
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'evolvedmekanism:ingot_better_gold',
        count: 4
      }
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:empowered_super_block',
        count: 4
      }
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:ultimate_prediction',
        count: 1
      }
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'nuclearcraft:neutronium_ingot',
        count: 4
      }
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'avaritia:neutronium_ingot',
        count: 2
      }
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'extendedcrafting:the_ultimate_ingot',
        count: 2
      }
    })
    .input({
      type: 'mm:input/consume',
      chance: 0.25,
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:ultimate_heart',
        count: 1
      }
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 2140000000
      }
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'draconicevolution:chaos_shard',
        count: 4
      }
    })
})
