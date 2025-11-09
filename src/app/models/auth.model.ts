export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthResult {
  user: { id: string; email: string; name?: string };
  accessToken: string;
  refreshToken?: string;
  expiresIn?: number; // seconds
}
