type Role = 'user' | 'admin';

export function roleGuard(getUserRole: () => Role | undefined, allowed: Role[]): boolean {
  const role = getUserRole();
  return !!role && allowed.includes(role);
}
