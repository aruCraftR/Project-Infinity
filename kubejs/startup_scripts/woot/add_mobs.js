WootStartupEvents.registerFactoryMob('twilightforest:yeti', (event) => {
  event.factoryMobPatcher().tier('tier_3').patch();
});



WootStartupEvents.registerFactoryMob("allthemodium:piglich", event => {
  const blacklist = [
    "allthemodium:allthemodium_helmet",
    "allthemodium:allthemodium_chestplate",
    "allthemodium:allthemodium_leggings",
    "allthemodium:allthemodium_boots",
    "allthemodium:allthemodium_carrot",
    "allthemodium:allthemodium_apple"
  ];

  event.registerDropsModifier(properties => {
    let itemDrops = Array.from(properties.getItemDrops());
    properties.setItemDrops(itemDrops.filter(drop => !blacklist.includes(drop.item)));
  });
});