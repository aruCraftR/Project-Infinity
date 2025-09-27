priority: 1;
MMEvents.createStructures(event => {
  event
    .create("mm:essenceforge_structure_on")
    .controllerId("mm:essenceforge_controller")
    .name("EssenceForge (On)")
    .layout(a => {
      a.layer(["AAAAA", "ADDDA", "ADDDA", "ADDDA", "AAAAA"])
        .layer(["PHQHR", "HHHHH", "QHHHQ", "HHHHH", "SHQHT"])
        .layer(["     ", " LHM ", " H H ", " NHO ", "     "])
        .layer(["     ", " DHD ", " HHH ", " DHD ", "     "])
        .layer(["DFJFD", "H   H", "I   I", "H   H", "DECGD"])
        .layer(["AAAAA", "ABBBA", "ABBBA", "ABBBA", "AAAAA"])
        .key("A", {
          block: "chisel_chipped_integration:futura_fabulously_wavy",
        })
        .key("B", {
          block: "mysticalagradditions:insanium_farmland",
        })
        .key("D", {
          block: "chisel_chipped_integration:futura_mysterious_cube",
        })
        .key("E", {
          portType: "mm:item",
          input: true,
        })
        .key("F", {
          portType: "mm:fluid",
          input: true,
        })
        .key("G", {
          portType: "mm:item",
          input: false,
        })
        .key("H", {
          block: "chisel_chipped_integration:factory_blue_framed_circuit",
        })
        .key("I", {
          portType: "mm:energy",
          input: true,
        })
        .key("J", {
          block: "minecraft:redstone_lamp",
          properties: [
            {
              property: "lit",
              value: "true",
            },
          ],
        })
        .key("L", {
          block: "botanicalextramachinery:crimson_ingot_block",
        })
        .key("M", {
          block: "botanicalextramachinery:shadow_ingot_block",
        })
        .key("N", {
          block: "botanicalextramachinery:malachite_ingot_block",
        })
        .key("O", {
          block: "botanicalextramachinery:saffron_ingot_block",
        })
        .key("P", {
          block: "mysticalexpansion:divinium_block",
        })
        .key("Q", {
          block: "chisel_chipped_integration:technical_fan",
        })
        .key("R", {
          block: "mysticalexpansion:etherium_block",
        })
        .key("S", {
          block: "mysticalagradditions:insanium_block",
        })
        .key("T", {
          block: "mysticalexpansion:extremium_block",
        });
    });

  event
    .create("mm:essenceforge_structure_off")
    .controllerId("mm:essenceforge_controller")
    .name("EssenceForge (Off)")
    .layout(a => {
      a.layer(["AAAAA", "ADDDA", "ADDDA", "ADDDA", "AAAAA"])
        .layer(["PHQHR", "HHHHH", "QHHHQ", "HHHHH", "SHQHT"])
        .layer(["     ", " LHM ", " H H ", " NHO ", "     "])
        .layer(["     ", " DHD ", " HHH ", " DHD ", "     "])
        .layer(["DFJFD", "H   H", "I   I", "H   H", "DECGD"])
        .layer(["AAAAA", "ABBBA", "ABBBA", "ABBBA", "AAAAA"])
        .key("A", {
          block: "chisel_chipped_integration:futura_fabulously_wavy",
        })
        .key("B", {
          block: "mysticalagradditions:insanium_farmland",
        })
        .key("D", {
          block: "chisel_chipped_integration:futura_mysterious_cube",
        })
        .key("E", {
          portType: "mm:item",
          input: true,
        })
        .key("F", {
          portType: "mm:fluid",
          input: true,
        })
        .key("G", {
          portType: "mm:item",
          input: false,
        })
        .key("H", {
          block: "chisel_chipped_integration:factory_blue_framed_circuit",
        })
        .key("I", {
          portType: "mm:energy",
          input: true,
        })
        .key("J", {
          block: "minecraft:redstone_lamp",
          properties: [
            {
              property: "lit",
              value: "false",
            },
          ],
        })
        .key("L", {
          block: "botanicalextramachinery:crimson_ingot_block",
        })
        .key("M", {
          block: "botanicalextramachinery:shadow_ingot_block",
        })
        .key("N", {
          block: "botanicalextramachinery:malachite_ingot_block",
        })
        .key("O", {
          block: "botanicalextramachinery:saffron_ingot_block",
        })
        .key("P", {
          block: "mysticalexpansion:divinium_block",
        })
        .key("Q", {
          block: "chisel_chipped_integration:technical_fan",
        })
        .key("R", {
          block: "mysticalexpansion:etherium_block",
        })
        .key("S", {
          block: "mysticalagradditions:insanium_block",
        })
        .key("T", {
          block: "mysticalexpansion:extremium_block",
        });
    });
});
