export interface User {
  id: string;
  email: string;
  name?: string;
  avatarUrl?: string;
  createdAt: string; // ISO
  updatedAt?: string; // ISO
}
