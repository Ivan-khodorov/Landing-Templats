import { ROUTES } from '@/app/constants';

export const router = {
  go(path: string) { window.location.href = path; },
  routes: ROUTES
};
