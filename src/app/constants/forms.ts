// Common form field names & constraints
export const FORMS = {
  contact: {
    fields: { name: 'name', email: 'email', phone: 'phone', message: 'message' },
    minMessage: 10,
    maxMessage: 1000
  },
  auth: {
    fields: { email: 'email', password: 'password' },
    minPassword: 8,
    maxPassword: 64
  }
} as const;
