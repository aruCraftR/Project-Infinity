priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:pinky_structure')
    .controllerId('mm:pinky_controller')
    .name('Pinky')
    .layout((a) => {
      a.layer(['11', '61', '11'])
        .layer(['32', '65', '4C'])
        .layer(['11', '61', '11'])
        .key('1', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('2', {
          portType: 'mm:item',
          input: true,
        })
        .key('3', {
          portType: 'mm:energy',
          input: true,
        })
        .key('4', {
          portType: 'mm:item',
          input: false,
        })
        .key('5', {
          portType: 'mm:fluid',
          input: true,
        })
        .key('6', {
          block: 'kubejs:pink_slime_block',
        });
    });
});
