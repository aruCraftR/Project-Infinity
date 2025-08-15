MMEvents.createStructures(event => {
  event
    .create('mm:fission_reactor_structure')
    .controllerId('mm:fission_reactor_controller')
    .name('Fission Reactor')
    .layout(a => {
      a
        .layer([
          "AAAAA",
          "ADDDA",
          "ADDDA",
          "ADDDA",
          "AAAAA"
        ])
        .layer([
          "ADDDA",
          "DN ND",
          "D O D",
          "DNPND",
          "ADDDA"
        ])

        .layer([
          "ADDDA",
          "DKLKD",
          "DLGLD",
          "DKMKD",
          "ADDDA"
        ])
        .layer([
          "AEDBA",
          "DFGFD",
          "HGIGH",
          "DFGFD",
          "ABCEA"
        ])
        .layer([
          "AAAAA",
          "AAAAA",
          "AAAAA",
          "AAAAA",
          "AAAAA"
        ])
        .key('A', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit'
        })
        .key('B', {
          tag: 'mm:auto_sieve_item_input'
        })
        .key('D', {
          block: 'nuclearcraft:fission_reactor_glass'
        })
        .key('E', {
          tag: 'mm:auto_sieve_item_output'
        })
        .key('F', {
          block: 'nuclearcraft:water_heat_sink'
        })
        .key('G', {
          block: 'nuclearcraft:graphite_block'
        })
        .key('H', {
          tag: 'mm:all_energy_output'
        })
        .key('I', {
          block: 'nuclearcraft:fission_reactor_solid_fuel_cell'
        })
        .key('K', {
          block: 'nuclearcraft:prismarine_heat_sink'
        })
        .key('L', {
          block: 'nuclearcraft:glowstone_heat_sink'
        })
        .key('M', {
          block: 'nuclearcraft:fission_reactor_controller'
        })
        .key('N', {
          block: 'nuclearcraft:enderium_heat_sink'
        })
        .key('O', {
          block: 'nuclearcraft:fission_reactor_irradiation_chamber'
        })
        .key('P', {
          block: 'nuclearcraft:irradiator'
        })
    })
})
