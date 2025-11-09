export interface PricingFeature {
  key: string;
  label: string;
  available: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly?: number;
  currency: string; // 'USD'
  features: PricingFeature[];
  popular?: boolean;
  ctaLink?: string;
}
