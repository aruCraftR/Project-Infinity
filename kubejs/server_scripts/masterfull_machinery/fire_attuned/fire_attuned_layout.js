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
          tag: 'mm:auto_sieve_item_input'
        })
        .key('3', {
          tag: 'mm:auto_crusher_energy_input'
        })
        .key('4', {
          tag: 'mm:auto_sieve_item_output'
        })
        .key('5', {
          tag: 'mm:fluid_port_input'
        })
        .key('6', {
          tag: 'mm:fluid_port_output'
        })
    })
})
