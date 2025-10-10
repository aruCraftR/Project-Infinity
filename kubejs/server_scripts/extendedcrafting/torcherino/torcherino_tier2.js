ServerEvents.recipes((event) => {
  //Compressed Torcherino
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: ['AAAAA', 'ABCBA', 'ACDCA', 'ABCBA', 'AAAAA'],
      key: {
        A: {
          item: 'torcherino:torcherino',
        },
        B: {
          item: 'igleelib:lavium_ingot',
        },
        C: {
          item: 'evolvedmekanism:alloy_subatomic',
        },
        D: {
          item: 'allthemodium:unobtainium_block',
        },
      },
      result: {
        item: 'torcherino:compressed_torcherino',
      },
    })
    .id('torcherino:compressed_torcherino');
});
