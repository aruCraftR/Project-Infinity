ServerEvents.recipes(event => {
  //Creative Controller
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABBBCBBBA',
        'BDDEFEDDB',
        'BDGDFDGDB',
        'BHDIJIDHB',
        'CFFJKJFFC',
        'BHDIJIDHB',
        'BDGDFDGDB',
        'BDDEFEDDB',
        'ABBBCBBBA'
      ],
      key: {
        A: {
          item: 'refinedstorage:quartz_enriched_iron_block'
        },
        B: {
          item: 'avaritia:infinity_ingot'
        },
        C: {
          item: 'twilightforest:knightmetal_ingot'
        },
        D: {
          item: 'kubejs:infinity_12'
        },
        E: {
          item: 'mysticalagradditions:insanium_ingot_block'
        },
        F: {
          item: 'enderio:end_steel_ingot'
        },
        G: {
          item: 'extrastorage:disk_16384k'
        },
        H: {
          item: 'mysticalagriculture:witherproof_block'
        },
        I: {
          item: 'mysticalagradditions:creative_essence'
        },
        J: {
          item: 'refinedstorage:controller'
        },
        K: {
          item: 'compressium:cobblestone_9'
        }
      },
      result: {
        item: 'refinedstorage:creative_controller'
      }
    })
    .id('refinedstorage:creative_controller')
})
