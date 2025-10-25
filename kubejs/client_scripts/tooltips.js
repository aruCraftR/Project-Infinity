ItemEvents.tooltip((event) => {
  event.add(
    'occultism:spirit_attuned_gem',
    '如果你想自动化它,建造火调谐多方块结构'
  );
  event.add(
    ['avaritia:infinity_pickaxe', 'avaritia:infinity_shovel'],
    'You can right click me.'
  );

  event.add(
    'nuclearcraft:water_collector',
    '每2秒200毫桶.将此物品放入泵(核工艺)中.你可以升级速度和能量.'
  );
  event.add(
    'nuclearcraft:compact_water_collector',
    '每2秒2000毫桶.将此物品放入泵(核工艺)中.你可以升级速度和能量.'
  );
  event.add(
    'nuclearcraft:dense_water_collector',
    '每2秒10000毫桶.将此物品放入泵(核工艺)中.你可以升级速度和能量.'
  );

  event.add(
    'allthemodium:allthemodium_upgrade_smithing_template',
    '在古城宝箱中找到我.2.5%几率'
  );

  event.addAdvanced(
    ['mm:multi_compactor_controller'],
    (item, advanced, text) => {
      text.add(1, Text.white('你将获得贤者之石和'));
      text.add(2, Text.white('回收主灌注水晶.'));
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
      text.add(1, Text.green('将我扔进岩浆以获得灌注熔岩水晶'));
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
        Text.green('将我扔在地上并使用\"铭刻雷霆\"或\"闪电刀\"(一次性使用)以获得灌注霜晶')
      ),
        text.add(
          2,
          Text.white('或在雷雨天气时,向带有引雷附魔的三叉戟投掷生物.或使用机械赋能器')
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
          Text.green('酿造/药水站 --> 1颗混沌种子和3瓶水 + 烈焰粉')
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
        Text.green('寻找一个地狱邪恶南瓜并用转化灵药右键点击它以生成南瓜头领主')
      );
    }
  );

  event.addAdvanced(['kubejs:ultimate_prediction'], (item, advanced, text) => {
    text.add(1, Text.red('配方和物品由realspinelle添加.'));
    text.add(2, Text.red('非常感谢!别恨我,恨他:)'));
  });

    event.addAdvanced(['mekanism:creative_bin'], (item, advanced, text) => {
    text.add(1, Text.red('配方由RxDnz添加.'));
    text.add(2, Text.red('非常感谢!别恨我,恨他:)'));
  });

    event.addAdvanced(['ae2omnicells:multidimensional_expansion_processor'], (item, advanced, text) => {
    text.add(1, Text.red('配方由Anti添加.'));
  });
});
