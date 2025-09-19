priority: 1
MMEvents.createStructures(event => {
  event
    .create('mm:fire_attuned_structure')
    .controllerId('mm:fire_attuned_controller')
    .name('Fire Attuned')
    .layout(a => {
      a
        .layer([
          '34',
          '2C'
        ])
        .layer([
          '11',
          '56'
        ])
        .key('1', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit'
        })
        .key('2', {
          portType: 'mm:item',
          input: true
        })
        .key('3', {
          portType: 'mm:energy',
          input: true
        })
        .key('4', {
          portType: 'mm:item',
          input: false
        })
        .key('5', {
          portType: 'mm:fluid',
          input: true
        })
        .key('6', {
          portType: 'mm:fluid',
          input: false
        })
    })
})
