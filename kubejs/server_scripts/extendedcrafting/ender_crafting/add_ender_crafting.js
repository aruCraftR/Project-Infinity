ServerEvents.recipes(event => {

  function enderCrafter(event, inputs, outputCount, outputItem) {
    const pattern = ["ABC", "DEF", "GHI"];
    const key = {};

    "ABCDEFGHI".split("").forEach((char, index) => {
      const value = inputs[index];
      key[char] = value.startsWith("#")
        ? { tag: value.substring(1) }
        : { item: value };
    });

    event.custom({
      type: "extendedcrafting:shaped_ender_crafter",
      pattern: pattern,
      key: key,
      result: {
        item: outputItem,
        count: outputCount
      }
    })
      .id("ender_crafter_" + outputItem.replace(/[:]/g, "_").toLowerCase());
  }

  enderCrafter(event, [
    'bloodmagic:blankrune',
    'thermal:enderium_ingot',
    'bloodmagic:blankrune',
    'thermal:enderium_ingot',
    'extendedcrafting:enhanced_redstone_ingot',
    'thermal:enderium_ingot',
    'actuallyadditions:empowered_void_crystal',
    'thermal:enderium_ingot',
    'actuallyadditions:empowered_void_crystal'
  ], 4, 'extendedcrafting:black_iron_ingot')

  enderCrafter(event, [
  'actuallyadditions:empowered_enori_crystal_block',
  'actuallyadditions:empowered_restonia_crystal_block',
  'actuallyadditions:empowered_palis_crystal_block',
  'actuallyadditions:empowered_void_crystal_block',
  'actuallyadditions:empowered_diamatine_crystal_block',
  'actuallyadditions:empowered_emeradic_crystal_block',
  'actuallyadditions:empowered_enori_crystal_block',
  'actuallyadditions:empowered_restonia_crystal_block',
  'actuallyadditions:empowered_palis_crystal_block'
], 2, 'kubejs:empowered_super_block')

})

