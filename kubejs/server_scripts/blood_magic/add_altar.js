ServerEvents.recipes(event => {
  event.recipes.bloodmagic
    .altar("kubejs:zahraanite", "mysticalagriculture:awakened_supremium_ingot")
    .upgradeLevel(4)
    .drainRate(2500)
    .consumptionRate(2500)
    .altarSyphon(20000)
    .id("kubejs:zahraanite");
  event.recipes.bloodmagic
    .altar("kubejs:infinity_9", "kubejs:infinity_8")
    .upgradeLevel(4)
    .drainRate(10000)
    .consumptionRate(10000)
    .altarSyphon(50000)
    .id("kubejs:infinity_9");
  event.recipes.bloodmagic
    .altar("kubejs:compressed_slate", "compressium:stone_1")
    .upgradeLevel(1)
    .altarSyphon(9000)
    .drainRate(90)
    .consumptionRate(90)
    .id("blood_magic_compressed_slate");
  event.recipes.bloodmagic
    .altar("kubejs:double_compressed_slate", "compressium:stone_2")
    .upgradeLevel(1)
    .altarSyphon(81000)
    .drainRate(810)
    .consumptionRate(810)
    .id("blood_magic_double_compressed_slate");
});
