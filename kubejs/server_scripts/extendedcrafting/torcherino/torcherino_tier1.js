ServerEvents.recipes(event => {
    //Torcherino
    event
        .custom({
            type: 'extendedcrafting:shaped_table',
            pattern: [
                'AAAAA',
                'ABCBA',
                'ACDCA',
                'ABCBA',
                'AAAAA'
            ],
            key: {
                A: {
                    item: 'minecraft:torch'
                },
                B: {
                    item: 'kubejs:starmetal_ingot'
                },
                C: {
                    item: 'mekanism:alloy_atomic'
                },
                D: {
                    item: 'allthemodium:allthemodium_nugget'
                }
            },
            result: {
                item: 'torcherino:torcherino'
            }
        })
        .id('torcherino:torcherino')
})