export interface NewsletterSubscription {
  email: string;
  source?: 'footer' | 'modal' | 'checkout' | 'other';
}
