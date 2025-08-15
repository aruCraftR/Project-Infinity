ServerEvents.recipes(event => {

  const dimensionMap = {
    1: "minecraft:overworld",
    2: "minecraft:the_nether",
    3: "minecraft:the_end"
  };

  /**
   * @param {number} dimensionId - 1 = Overworld, 2 = Nether, 3 = End
   * @param {number} minTier
   * @param {string[]} items
   * @param {number} weight
   */
  function voidminerBatch(dimensionId, minTier, items, weight) {
    const dimension = dimensionMap[dimensionId];
    if (!dimension) return;

    items.forEach(item => {
      event.custom({
        type: "voidminers:miner",
        dimension: dimension,
        minTier: minTier,
        output: {
          item: item,
          weight: weight
        }
      }).id(`voidminer_${item.replace(/[:]/g, "_")}_${dimension.split(":")[1]}`);
    });
  }

  function voidminerBatch2(dimensionId, minTier, items, weight) {
    const dimension = dimensionMap[dimensionId];
    if (!dimension) return;

    items.forEach(item => {
      event.custom({
        type: "voidminers:miner",
        allowHigherTiers: false,
        dimension: dimension,
        minTier: minTier,
        output: {
          item: item,
          weight: weight
        }
      }).id(`voidminer_${item.replace(/[:]/g, "_")}_${dimension.split(":")[1]}` + minTier);
    });
  }

  voidminerBatch(3, 8, ["minecraft:dragon_egg"], 0.1);

  const base = [
    "carnelian", "topaz", "citrine", "heliodor", "moldavite", "peridot", "turquoise",
    "kyanite", "iolite", "alexandrite", "ammolite", "rose_quartz",
    "black_diamond", "white_diamond"
  ];

  const overworldOres = base.map(gem => `silentgems:${gem}_ore`);
  const deepslateOres = base.map(gem => `silentgems:deepslate_${gem}_ore`);
  const netherOres = base.map(gem => `silentgems:${gem}_nether_ore`);
  const endOres = base.map(gem => `silentgems:${gem}_end_ore`);

  voidminerBatch(1, 2, overworldOres, 14.0);
  voidminerBatch(1, 4, deepslateOres, 12.0);
  voidminerBatch(2, 5, netherOres, 10.0);
  voidminerBatch(3, 7, endOres, 8.0);
  voidminerBatch(2, 5, ['bigreactors:benitoite_ore'], 10)
  voidminerBatch(2, 3, ['mysticalagriculture:soulium_ore'], 10)
  voidminerBatch2(1, 6, ['allthemodium:allthemodium_ore'], 0.05)
  voidminerBatch2(1, 7, ['allthemodium:allthemodium_ore'], 0.1)
  voidminerBatch2(1, 8, ['allthemodium:allthemodium_ore'], 0.3)
  voidminerBatch2(2, 7, ['allthemodium:vibranium_ore'], 0.05)
  voidminerBatch2(2, 8, ['allthemodium:vibranium_ore'], 0.1)
  voidminerBatch2(3, 8, ['allthemodium:unobtainium_ore'], 0.05)
});