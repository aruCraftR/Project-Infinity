MMEvents.createStructures(event => {
  event
    .create('mm:pinky_structure')
    .controllerId('mm:pinky_controller')
    .name('Pinky')
    .layout(a => {
      a
        .layer([
          '11',
          '61',
          '11'
        ])
        .layer([
          '32',
          '65',
          '4C'
        ])
        .layer([
          '11',
          '61',
          '11'
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
          block: 'kubejs:pink_slime_block'
        })
    })
})
