ServerEvents.recipes((event) => {
  //World Thread
  event
    .custom({
      type: 'nuclearcraft:irradiator',
      input: [
        {
          item: 'nuclearcraft:neutronium_ingot',
        },
      ],
      output: [
        {
          item: 'dimdoors:world_thread',
          count: 8,
        },
      ],
      powerModifier: 1.0,
      radiation: 1.0,
      timeModifier: 10.0,
    })
    .id('dimdoors:world_thread2');
});
