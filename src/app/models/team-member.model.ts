export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photoUrl?: string;
  socials?: Record<'twitter'|'linkedin'|'github'|'instagram', string>;
}
