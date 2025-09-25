priority: 1
MMEvents.createStructures(event => {
  event
    .create('mm:essenceforge_structure')
    .controllerId('mm:essenceforge_controller')
    .name('Essenceforge')
    .layout(a => {
      a
        .layer([
          '111',
          '121',
          '111'
        ])
        .layer([
          '343',
          '454',
          '3C3'
        ])
        .layer([
          '111',
          '121',
          '111'
        ])
        .key('1', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit'
        })
        .key('2', {
          portType: 'mm:energy',
          input: true
        })
        .key('3', {
          portType: 'mm:fluid',
          input: false
        })
        .key('4', {
          block: 'mob_grinding_utils:tank'
        })
        .key('5', {
          block: 'actuallyadditions:empowered_diamatine_crystal_block'
        })
    })
})
