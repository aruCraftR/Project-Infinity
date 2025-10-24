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

  //manufactory recipes
  event.custom({
    type: 'nuclearcraft:manufactory',
    input: [
      {
        item: 'common_ore_library:cobalt_ore',
      },
    ],
    output: [
      {
        count: 2,
        item: 'common_ore_library:cobalt_dust',
      },
    ],
    powerModifier: 1.0,
    radiation: 1.0,
    timeModifier: 1.0,
  });
  event.custom({
    type: 'nuclearcraft:manufactory',
    input: [
      {
        item: 'nuclearcraft:thorium_ore',
      },
    ],
    output: [
      {
        count: 2,
        item: 'nuclearcraft:thorium_dust',
      },
    ],
    powerModifier: 1.0,
    radiation: 1.0,
    timeModifier: 1.0,
  });
    event.custom({
    type: 'nuclearcraft:manufactory',
    input: [
      {
        item: 'nuclearcraft:magnesium_ore',
      },
    ],
    output: [
      {
        count: 2,
        item: 'nuclearcraft:magnesium_dust',
      },
    ],
    powerModifier: 1.0,
    radiation: 1.0,
    timeModifier: 1.0,
  });
      event.custom({
    type: 'nuclearcraft:manufactory',
    input: [
      {
        item: 'nuclearcraft:lithium_ore',
      },
    ],
    output: [
      {
        count: 2,
        item: 'nuclearcraft:lithium_dust',
      },
    ],
    powerModifier: 1.0,
    radiation: 1.0,
    timeModifier: 1.0,
  });
      event.custom({
    type: 'nuclearcraft:manufactory',
    input: [
      {
        item: 'nuclearcraft:boron_ore',
      },
    ],
    output: [
      {
        count: 2,
        item: 'nuclearcraft:boron_dust',
      },
    ],
    powerModifier: 1.0,
    radiation: 1.0,
    timeModifier: 1.0,
  });
});
