priority: 1
MMEvents.createStructures(event => {
  event
    .create('mm:event_horizon_antimatter_synthesizer_structure')
    .controllerId('mm:event_horizon_antimatter_synthesizer_controller')
    .name('Event Horizon Antimatter Synthesizer')
    .layout(a => {
      a
        .layer([
          "  AAA  ",
          " BDDDB ",
          "ADDDDDA",
          "ADDEDDA",
          "ADDDDDA",
          " BDDDB ",
          "  AAA  "
        ])
        .layer([
          " BDDDB ",
          "B     B",
          "D     D",
          "D  F  D",
          "D     D",
          "B     B",
          " BDDDB "
        ])
        .layer([
          "ADDDDDA",
          "D     D",
          "D     D",
          "D     D",
          "D     D",
          "D     D",
          "ADDDDDA"
        ])
        .layer([
          "ADDGDDA",
          "D  F  D",
          "D     D",
          "HF   FH",
          "D     D",
          "D  F  D",
          "ADDGDDA"
        ])
        .layer([
          "ADDDDDA",
          "D     D",
          "D     D",
          "D     D",
          "D     D",
          "D     D",
          "ADDDDDA"
        ])
        .layer([
          " BDDDB ",
          "B     B",
          "D     D",
          "D  F  D",
          "D     D",
          "B     B",
          " BDCDB "
        ])
        .layer([
          "  AAA  ",
          " BDDDB ",
          "ADDDDDA",
          "ADDEDDA",
          "ADDDDDA",
          " BDDDB ",
          "  AAA  "
        ])
        .key('A', {
          block: "kubejs:starmetal_block"
        })
        .key('B', {
          block: "chisel_chipped_integration:factory_blue_framed_circuit"
        })
        .key('D', {
          block: "tconstruct:clear_glass"
        })
        .key('E', {
          block: "mm:gigantic_energy_port_input"
        })
        .key('F', {
          block: "mekanism:supercharged_coil"
        })
        .key('G', {
          block: "mm:colossal_gas_port_input"
        })
        .key('H', {
          block: "mm:colossal_gas_port_output"
        })
    })
})
