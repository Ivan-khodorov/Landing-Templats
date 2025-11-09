import { FEATURES } from '@/app/constants';

export const featureFlags = {
  isEnabled(key: keyof typeof FEATURES) {
    return !!FEATURES[key];
  },
  all() { return { ...FEATURES }; }
};
