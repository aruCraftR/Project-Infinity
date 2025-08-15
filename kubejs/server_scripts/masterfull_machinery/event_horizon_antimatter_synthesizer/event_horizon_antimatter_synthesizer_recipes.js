MMEvents.createProcesses(event => {
  //Antimatter Recipe
  //Uses 4000 Polonium and 2.14 Billion RF to create 5 Antimatter
  event
    .create('mm:event_horizon_antimatter_synthesizer_recipe')
    .structureId('mm:event_horizon_antimatter_synthesizer_structure')
    .ticks(4)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:mekanism/gas',
        gas: 'mekanism:polonium',
        amount: 4000
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
        type: 'mm:mekanism/gas',
        gas: 'mekanism:antimatter',
        amount: 5
      }
    })
})
