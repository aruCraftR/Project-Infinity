ItemEvents.tooltip(event => {
  event.add(
    'occultism:spirit_attuned_gem',
    'If you want to automate it, build the Fire Attuned Multiblock'
  )
  event.add(
    ['avaritia:world_breaker', 'avaritia:planet_eater'],
    'You can right click me.'
  )

  event.add(
    'nuclearcraft:water_collector',
    '200 mB every 2 sec. Put this item inside the Pump(Nuclearcraft). You can Upgrade the speed and energy.'
  )
  event.add(
    'nuclearcraft:compact_water_collector',
    '2000 mB every 2 sec. Put this item inside the Pump(Nuclearcraft). You can Upgrade the speed and energy.'
  )
  event.add(
    'nuclearcraft:dense_water_collector',
    '10000 mB every 2 sec. Put this item inside the Pump(Nuclearcraft). You can Upgrade the speed and energy.'
  )

  event.add(
    'allthemodium:allthemodium_upgrade_smithing_template',
    'Find me inside ancient city chests. 2.5% Chance'
  )

  event.addAdvanced(
    [
      'avaritia:pileof_neutrons',
      'avaritia:neutronium_nugget',
      'avaritia:neutronium_ingot'
    ],
    (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gold(),
          Text.of('Shift ').yellow(),
          Text.of('to see more info.').gold()
        ])
      } else {
        text.add(
          1,
          Text.green('Build a Neutron Collector. Good Luck!').bold(true)
        )
      }
    }
  )

  event.addAdvanced(['armorplus:lava_crystal'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('Shift ').yellow(),
        Text.of('to see more info.').gold()
      ])
    } else {
      text.add(1, Text.green('Trow me in Lava to get Infused Lava Crystal'))
    }
    text.remove(2)
  })

  event.addAdvanced(['armorplus:frost_crystal'], (item, advanced, text) => {
    if (!event.shift) {
      text.remove(1)
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('Shift ').yellow(),
        Text.of('to see more info.').gold()
      ])
    } else {
      text.add(
        1,
        Text.green(
          'Trow me on the ground and use "Engraved Thunder", "Lightning Knife" (1 time use) or a "Lightning Charge" to get Infused Frost Crystal'
        )
      ),
        text.add(
          2,
          Text.white(
            'Or trow a Trident at a mob with channeling while a thunderstorm is occurring.'
          )
        )
      text.remove(3)
    }
  })

  event.addAdvanced(['kubejs:arcmetal_ore', 'kubejs:solarmetal_ore', 'kubejs:plasteel_ore', 'kubejs:voidmetal_ore'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('Shift ').yellow(),
        Text.of('to see more info.').gold()
      ])
    } else {
      text.add(
        1,
        Text.green(
          'Find me inside the Mining Dimension'
        )
      )
    }
  })

  event.addAdvanced(['born_in_chaos_v1:chaos_component'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('Shift ').yellow(),
        Text.of('to see more info.').gold()
      ])
    } else {
      text.add(
        1,
        Text.green(
          'Brewing/ Potion Station --> 1 Seed of Chaos and 3 Water Bottle + a blaze powder'
        )
      )
    }
  })

  event.addAdvanced(['occultism:iesnium_ore'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('Shift ').yellow(),
        Text.of('to see more info.').gold()
      ])
    } else {
      text.add(
        1,
        Text.green(
          'Find me inside the Nether Mining Dimension. Y-Level 0-50'
        )
      )
    }
  })

  event.addAdvanced([
    'integrateddynamics:energy_battery_creative',
    'evolvedmekanism:creative_personal_barrel',
    'evolvedmekanism:creative_personal_chest',
    'mekanism:creative_energy_cube',
    'mekanism:creative_chemical_tank',
    'mm:advanced_awakening_altar_controller',
    'botanicalextramachinery:catalyst_mana_infinity',
    'botanicalmachinery:mana_battery_creative'
  ], (item, advanced, text) => {
    text.add(1, Text.red('Recipe added by Kem5540. Thanks a lot!'))
  })

  event.addAdvanced([
    'kubejs:ultimate_prediction'
  ], (item, advanced, text) => {
    text.add(1, Text.red('Recipe and Item added by realspinelle.'))
    text.add(2, Text.red('Thanks a lot! Dont hate me, hate him :)'))
  })

  event.addAdvanced(['mysticalagriculture:cognizant_dust'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('Shift ').yellow(),
        Text.of('to see more info.').gold()
      ])
    } else {
      text.add(1, Text.green('If you want to get some Cognizant Dust you have to kill a better version of the wither.'))
      text.add(2, Text.white('Get 3 Soul Sand, 3 Wither Skulls and 1 Corrupted Soul Sand Level 1-3 in the middle.'))
      text.add(3, Text.green('You could also spawn the ender dragon with 4 corrupted end crystals'))
    }
  })
})
