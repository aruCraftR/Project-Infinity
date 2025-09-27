priority: 0;
function shapeless(event, output, input) {
  event.shapeless(output, input);
}

function create323(event, output, input) {
  event.shaped(output, ["000", "0 0", "000"], {
    0: input[0],
  });
}

function create_conduit_craft(event, output, input) {
  event.shaped(output, ["000", "111", "000"], {
    0: input[0],
    1: input[1],
  });
}

function create_conduit_craft2(event, output, input) {
  event.shaped(output, ["000", "121", "000"], {
    0: input[0],
    1: input[1],
    2: input[2],
  });
}
function create2x2(event, output, input) {
  event.shaped(output, ["01", "23"], {
    0: input[0],
    1: input[1],
    2: input[2],
    3: input[3],
  });
}

function create2x2same(event, output, input) {
  event.shaped(output, ["00", "00"], {
    0: input[0],
  });
}

function create3x3(event, output, input) {
  if (
    !output ||
    output === "" ||
    (typeof output === "string" && output.includes(" "))
  ) {
    console.error("❌ Ungültiger Output in create3x3: " + output);
  }

  event.shaped(output, ["012", "345", "678"], {
    0: input[0],
    1: input[1],
    2: input[2],
    3: input[3],
    4: input[4],
    5: input[5],
    6: input[6],
    7: input[7],
    8: input[8],
  });
}

function create3x3same(event, output, input) {
  event.shaped(output, ["000", "000", "000"], {
    0: input[0],
  });
}

function seedtiercrafting1(event, output, input) {
  event.shaped(output, ["121", "202", "121"], {
    0: "kubejs:tier1_crafting_seed",
    1: input[0],
    2: "mysticalagriculture:inferium_essence",
  });
}

function seedtiercrafting2(event, output, input) {
  event.shaped(output, ["121", "202", "121"], {
    0: "kubejs:tier2_crafting_seed",
    1: input[0],
    2: "mysticalagriculture:prudentium_essence",
  });
}

function seedtiermobcrafting2(event, output, input) {
  event.shaped(output, ["121", "202", "121"], {
    0: "mysticalagriculture:soulium_seed_base",
    1: input[0].weakNBT(),
    2: "mysticalagriculture:prudentium_essence",
  });
}
