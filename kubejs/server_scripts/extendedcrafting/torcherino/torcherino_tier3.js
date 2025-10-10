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
          item: 'botanicalextramachinery:crimson_dragonstone_block',
        },
        C: {
          item: 'evolvedmekanism:alloy_exoversal',
        },
        D: {
          item: 'allthemodium:unobtainium_vibranium_alloy_block',
        },
      },
      result: {
        item: 'torcherino:double_compressed_torcherino',
      },
    })
    .id('torcherino:double_compressed_torcherino');
});
