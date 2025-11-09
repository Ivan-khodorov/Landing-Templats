export const device = {
  isTouch: () => matchMedia('(pointer: coarse)').matches,
  isRetina: () => (window.devicePixelRatio || 1) > 1,
};
