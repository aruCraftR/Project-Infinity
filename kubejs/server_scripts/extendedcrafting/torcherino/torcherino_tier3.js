ServerEvents.recipes((event) => {
  //Double Compressed Torcherino
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: ['AAAAA', 'ABCBA', 'ACDCA', 'ABCBA', 'AAAAA'],
      key: {
        A: {
          item: 'torcherino:compressed_torcherino',
        },
        B: {
          item: 'kubejs:sculk_alloy_ingot',
        },
        C: {
          item: 'evolvedmekanism:alloy_exoversal',
        },
        D: {
          item: 'allthemodium:unobtainium_ingot',
        },
      },
      result: {
        item: 'torcherino:double_compressed_torcherino',
      },
    })
    .id('torcherino:double_compressed_torcherino');
});
