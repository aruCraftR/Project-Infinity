const BLOCK_COUNT = 16;
const TICKS = 4;
const SIMPLE_ENERGY = 2000;
const EMPOWERED_ENERGY = 400000;

MMEvents.createProcesses(event => {
  // Actually Additions Blocks
  createSimple(event, 'minecraft:iron_block', 'actuallyadditions:enori_crystal_block');
  createSimple(event, 'minecraft:redstone_block', 'actuallyadditions:restonia_crystal_block');
  createSimple(event, 'minecraft:lapis_block', 'actuallyadditions:palis_crystal_block');
  createSimple(event, 'minecraft:diamond_block', 'actuallyadditions:diamatine_crystal_block');
  createSimple(event, 'minecraft:coal_block', 'actuallyadditions:void_crystal_block');
  createSimple(event, 'minecraft:emerald_block', 'actuallyadditions:emeradic_crystal_block');
  createSimple(event, 'minecraft:red_mushroom', 'minecraft:nether_wart');
  createSimple(event, 'minecraft:sand', 'minecraft:soul_sand');
  createSimple(event, 'armorplus:frost_crystal', 'armorplus:infused_frost_crystal');



  // Actually Additions Empowered Blocks
  createEmpowered(event, [
    'actuallyadditions:enori_crystal_block',
    'minecraft:stone_button',
    'minecraft:snowball',
    'minecraft:gray_dye',
    'minecraft:cobblestone'
  ], 'actuallyadditions:empowered_enori_crystal_block');

  createEmpowered(event, [
    'actuallyadditions:restonia_crystal_block',
    'minecraft:redstone',
    'minecraft:nether_brick',
    'minecraft:red_dye',
    'minecraft:brick'
  ], 'actuallyadditions:empowered_restonia_crystal_block');

  createEmpowered(event, [
    'actuallyadditions:palis_crystal_block',
    'minecraft:prismarine_shard',
    'minecraft:prismarine_shard',
    'minecraft:prismarine_shard',
    'minecraft:cyan_dye'
  ], 'actuallyadditions:empowered_palis_crystal_block');

  createEmpowered(event, [
    'actuallyadditions:diamatine_crystal_block',
    'minecraft:clay_ball',
    'minecraft:clay_ball',
    'minecraft:light_blue_dye',
    'minecraft:clay'
  ], 'actuallyadditions:empowered_diamatine_crystal_block');

  createEmpowered(event, [
    'actuallyadditions:void_crystal_block',
    'minecraft:coal',
    'minecraft:black_dye',
    'minecraft:stone',
    'minecraft:flint'
  ], 'actuallyadditions:empowered_void_crystal_block');

  createEmpowered(event, [
    'actuallyadditions:emeradic_crystal_block',
    'minecraft:lime_dye',
    'minecraft:grass',
    'minecraft:slime_ball',
    'minecraft:oak_sapling'
  ], 'actuallyadditions:empowered_emeradic_crystal_block');

  createEmpowered(event, [
    'enderio:double_layer_capacitor',
    'enderio:double_layer_capacitor',
    'enderio:vibrant_alloy_ingot',
    'enderio:vibrant_alloy_ingot',
    'minecraft:glowstone'
  ], 'enderio:octadic_capacitor');

  createEmpowered(event, [
    'mekanism:dust_coal',
    'enderio:basic_capacitor',
    'enderio:basic_capacitor',
    'enderio:energetic_alloy_ingot',
    'enderio:energetic_alloy_ingot'
  ], 'enderio:double_layer_capacitor');

  createEmpowered(event, [
    'redstone_arsenal:flux_gem',
    'minecraft:redstone',
    'enderio:redstone_alloy_ingot',
    'extendedcrafting:redstone_ingot',
    'minecraft:lava_bucket'
  ], 'armorplus:lava_crystal');

  createEmpowered(event, [
    'armorplus:en_diamond',
    'minecraft:lapis_lazuli',
    'bigreactors:cyanite_ingot',
    'common_ore_library:platinum_ingot',
    'minecraft:water_bucket'
  ], 'armorplus:frost_crystal');
});




function createSimple(event, input, output) {
  const sanitizedOutput = output.replace(':', '_');
  event.create(`mm:mechanical_empowerer_${sanitizedOutput}`)
    .structureId('mm:mechanical_empowerer_structure')
    .ticks(TICKS)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: input,
        count: BLOCK_COUNT
      }
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: SIMPLE_ENERGY
      }
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: output,
        count: BLOCK_COUNT
      }
    });
}

function createEmpowered(event, inputs, output) {
  const sanitizedOutput = output.replace(':', '_');
  const recipe = event.create(`mm:mechanical_empowerer_empowered_${sanitizedOutput}`)
    .structureId('mm:mechanical_empowerer_structure')
    .ticks(TICKS);

  inputs.forEach(item => {
    recipe.input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: item,
        count: BLOCK_COUNT
      }
    });
  });

  recipe.input({
    type: 'mm:input/consume',
    ingredient: {
      type: 'mm:energy',
      amount: EMPOWERED_ENERGY
    }
  });

  recipe.output({
    type: 'mm:output/simple',
    ingredient: {
      type: 'mm:item',
      item: output,
      count: BLOCK_COUNT
    }
  });
}
