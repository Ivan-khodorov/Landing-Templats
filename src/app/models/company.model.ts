export interface Company {
  name: string;
  site?: string;
  logoUrl?: string;
  address?: import('./address.model').Address;
  regNumber?: string;
  contacts?: { email?: string; phone?: string };
}
