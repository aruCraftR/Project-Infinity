ServerEvents.recipes(event => {
  //Nether Star
  event
    .custom({
      type: 'advanced_ae:reaction',
      energy: 200000,
      fluid: {
        fluidStack: {
          Amount: 50,
          FluidName: 'industrialforegoing:ether_gas'
        }
      },
      input_items: [
        {
          amount: 2,
          ingredient: {
            type: "forge:nbt", item: 'hostilenetworks:prediction', count: 1, nbt: '{data_model:{id:"hostilenetworks:wither"}}'
          }
        },
        {
          amount: 1,
          ingredient: {
            item: 'powah:crystal_nitro'
          }
        }
      ],
      output: {
        '#': 16,
        '#c': 'ae2:i',
        id: 'minecraft:nether_star'
      }
    })
    .id('minecraft:nether_star_reaction_chamber')
})