export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  avatarUrl?: string;
  rating?: number;  // 1..5
  content: string;
}
