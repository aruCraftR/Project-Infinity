StartupEvents.registry('fluid', (event) => {
  // Basic "thick" (looks like lava) fluid with red tint
  event
    .create('molten_basalz')
    .thickTexture(0x800000)
    .bucketColor(0x800000)
    .displayName('熔融巴尔斯');
  event
    .create('molten_blizz')
    .thickTexture(0x00c6e0)
    .bucketColor(0x00c6e0)
    .displayName('熔融布利兹');
  event
    .create('molten_blitz')
    .thickTexture(0xedfdff)
    .bucketColor(0xedfdff)
    .displayName('熔融布利茨');
});
