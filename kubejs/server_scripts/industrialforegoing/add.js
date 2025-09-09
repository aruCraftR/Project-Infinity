ServerEvents.recipes(event => {
    event.custom({
        type: 'industrialforegoing:laser_drill_fluid',
        catalyst: {
            item: 'industrialforegoing:laser_lens10'
        },
        entity: 'evolved_wither:the_wither',
        output: '{Amount:25,FluidName:\'industrialforegoing:ether_gas\'}',
        pointer: 0,
        rarity: [
            {
                blacklist: {},
                depth_max: 256,
                depth_min: -64,
                weight: 8,
                whitelist: {}
            }
        ]
    })
})
