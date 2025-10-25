ItemEvents.tooltip((event) => {
  event.add(
    'occultism:spirit_attuned_gem',
    'If you want to automate it, build the Fire Attuned Multiblock'
  );
  event.add(
    ['avaritia:infinity_pickaxe', 'avaritia:infinity_shovel'],
    'You can right click me.'
  );

  event.add(
    'nuclearcraft:water_collector',
    '200 mB every 2 sec. Put this item inside the Pump(Nuclearcraft). You can Upgrade the speed and energy.'
  );
  event.add(
    'nuclearcraft:compact_water_collector',
    '2000 mB every 2 sec. Put this item inside the Pump(Nuclearcraft). You can Upgrade the speed and energy.'
  );
  event.add(
    'nuclearcraft:dense_water_collector',
    '10000 mB every 2 sec. Put this item inside the Pump(Nuclearcraft). You can Upgrade the speed and energy.'
  );

  event.add(
    'allthemodium:allthemodium_upgrade_smithing_template',
    'Find me inside ancient city chests. 2.5% Chance'
  );

  event.addAdvanced(
    ['mm:multi_compactor_controller'],
    (item, advanced, text) => {
      text.add(1, Text.white('你将获得贤者之石与'));
      text.add(2, Text.white('主灌注水晶的返还.'));
      text.add(3, Text.white('它们不会被消耗.'));
    }
  );

  event.addAdvanced(
    [
      'avaritia:neutron_pile',
      'avaritia:neutron_nugget',
      'avaritia:neutron_ingot',
    ],
    (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('按住').gold(),
          Text.of('Shift键').yellow(),
          Text.of('查看更多信息.').gold(),
        ]);
      } else {
        text.add(
          1,
          Text.green('建造一个中子收集器.祝你好运!').bold(true)
        );
      }
    }
  );

  event.addAdvanced(['armorplus:lava_crystal'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.of('按住').gold(),
        Text.of('Shift键').yellow(),
        Text.of('查看更多信息.').gold(),
      ]);
    } else {
      text.add(1, Text.green('将我投入岩浆以获得灌注熔岩水晶'));
    }
    text.remove(2);
  });

  event.addAdvanced(['armorplus:frost_crystal'], (item, advanced, text) => {
    if (!event.shift) {
      text.remove(1);
      text.add(1, [
        Text.of('按住').gold(),
        Text.of('Shift键').yellow(),
        Text.of('查看更多信息.').gold(),
      ]);
    } else {
      (text.add(
        1,
        Text.green(
          'Trow me on the ground and use "Engraved Thunder" or "Lightning Knife" (1 time use) to get Infused Frost Crystal'
        )
      ),
        text.add(
          2,
          Text.white(
            'Or trow a Trident at a mob with channeling while a thunderstorm is occurring. Or use the Mechanical Empowerer'
          )
        ));
      text.remove(3);
    }
  });

  event.addAdvanced(
    [
      'kubejs:arcmetal_ore',
      'kubejs:solarmetal_ore',
      'kubejs:plasteel_ore',
      'kubejs:voidmetal_ore',
    ],
    (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('按住').gold(),
          Text.of('Shift键').yellow(),
          Text.of('查看更多信息.').gold(),
        ]);
      } else {
        text.add(1, Text.green('在采矿维度内找到我'));
      }
    }
  );

  event.addAdvanced(
    ['born_in_chaos_v1:chaos_component'],
    (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('按住').gold(),
          Text.of('Shift键').yellow(),
          Text.of('查看更多信息.').gold(),
        ]);
      } else {
        text.add(
          1,
          Text.green(
            'Brewing/ Potion Station --> 1 Seed of Chaos and 3 Water Bottle + a blaze powder'
          )
        );
      }
    }
  );

  event.addAdvanced(['occultism:iesnium_ore'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [
        Text.of('按住').gold(),
        Text.of('Shift键').yellow(),
        Text.of('查看更多信息.').gold(),
      ]);
    } else {
      text.add(
        1,
        Text.green('在下界采矿维度内找到我.Y轴高度0-50')
      );
    }
  });

  event.addAdvanced(
    [
      'integrateddynamics:energy_battery_creative',
      'evolvedmekanism:creative_personal_barrel',
      'evolvedmekanism:creative_personal_chest',
      'mekanism:creative_energy_cube',
      'mekanism:creative_chemical_tank',
      'mm:advanced_awakening_altar_controller',
      'botanicalextramachinery:catalyst_mana_infinity',
      'botanicalmachinery:mana_battery_creative',
    ],
    (item, advanced, text) => {
      text.add(1, Text.red('配方由Kem5540添加.非常感谢!'));
    }
  );

  event.addAdvanced(
    ['pneumaticcraft:creative_compressor'],
    (item, advanced, text) => {
      text.add(1, Text.red('配方由Itz_izumito添加.非常感谢!'));
    }
  );

  event.addAdvanced(
    [
      'born_in_chaos_v1:lord_pumpkinheads_hat_helmet',
      'born_in_chaos_v1:transmuting_elixir',
    ],
    (item, advanced, text) => {
      text.add(
        1,
        Text.green(
          'Search a Infernal Evil Pumpkin and right click it with a Transmutaion Elixir to spawn Lord Pumkinhead'
        )
      );
    }
  );

  event.addAdvanced(['kubejs:ultimate_prediction'], (item, advanced, text) => {
    text.add(1, Text.red('配方与物品由realspinelle添加.'));
    text.add(2, Text.red('非常感谢!别恨我,恨他:)'));
  });

    event.addAdvanced(['mekanism:creative_bin'], (item, advanced, text) => {
    text.add(1, Text.red('Recipe added by RxDnz.'));
    text.add(2, Text.red('Thanks a lot! Dont hate me, hate him :)'));
  });

    event.addAdvanced(['ae2omnicells:multidimensional_expansion_processor'], (item, advanced, text) => {
    text.add(1, Text.red('Recipe added by Anti.'));
  });
});
