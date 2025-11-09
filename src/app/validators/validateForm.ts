import { validateEmail } from './validateEmail';
import { validatePhone } from './validatePhone';
import { validateRequired } from './validateRequired';

export const Validators = {
  email: validateEmail,
  phone: validatePhone,
  required: validateRequired
};
