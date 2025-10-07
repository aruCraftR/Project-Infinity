ServerEvents.recipes((event) => {
  event.custom({
    type: 'industrialforegoing:laser_drill_fluid',
    catalyst: {
      item: 'industrialforegoing:laser_lens11',
    },
    entity: 'minecraft:zombie',
    output: '{Amount:25,FluidName:"industrialforegoing:ether_gas"}',
    pointer: 0,
    rarity: [
      {
        blacklist: {},
        depth_max: 64,
        depth_min: 64,
        weight: 100,
        whitelist: {},
      },
    ],
  });
});
