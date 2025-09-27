ServerEvents.recipes(event => {
  //Nether Star
  event
    .custom({
      type: "advanced_ae:reaction",
      energy: 200000,
      fluid: {
        fluidStack: {
          Amount: 50,
          FluidName: "industrialforegoing:ether_gas",
        },
      },
      input_items: [
        {
          amount: 2,
          ingredient: {
            type: "forge:nbt",
            item: "hostilenetworks:prediction",
            count: 1,
            nbt: '{data_model:{id:"hostilenetworks:wither"}}',
          },
        },
        {
          amount: 1,
          ingredient: {
            item: "powah:crystal_nitro",
          },
        },
      ],
      output: {
        "#": 16,
        "#c": "ae2:i",
        id: "minecraft:nether_star",
      },
    })
    .id("minecraft:nether_star_reaction_chamber");

  function reaction_chamber(event, item1, outputItem) {
    event
      .custom({
        type: "advanced_ae:reaction",
        energy: 50000,
        fluid: {
          fluidStack: {
            Amount: 1000,
            FluidName: "minecraft:water",
          },
        },
        input_items: [
          {
            amount: 4,
            ingredient: {
              item: item1,
            },
          },
          {
            amount: 4,
            ingredient: {
              item: "expatternprovider:silicon_block",
            },
          },
          {
            amount: 4,
            ingredient: {
              item: "minecraft:redstone_block",
            },
          },
        ],
        output: {
          "#": 36,
          "#c": "ae2:i",
          id: outputItem,
        },
      })
      .id("reaction_chamber" + outputItem.replace(/[:]/g, "_").toLowerCase());
  }

  reaction_chamber(event, "minecraft:gold_block", "ae2:logic_processor");
  reaction_chamber(event, "ae2:quartz_block", "ae2:calculation_processor");
  reaction_chamber(
    event,
    "minecraft:diamond_block",
    "ae2:engineering_processor"
  );
  reaction_chamber(
    event,
    "megacells:sky_steel_block",
    "megacells:accumulation_processor"
  );
});
