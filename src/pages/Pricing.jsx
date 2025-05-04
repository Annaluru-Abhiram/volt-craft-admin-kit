
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingTier = ({ title, price, description, features, isPopular, buttonText }) => {
  return (
    <Card className={`p-6 flex flex-col h-full ${isPopular ? 'border-blue-500 shadow-lg' : ''}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 bg-blue-500 text-white px-3 py-1 text-xs font-medium rounded-full">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="mt-4 mb-2">
        <span className="text-3xl font-bold">${price}</span>
        <span className="text-muted-foreground">/month</span>
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>
      <div className="space-y-3 mb-6 flex-grow">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center">
            <Check className="h-4 w-4 mr-2 text-green-500" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <Button className="w-full" variant={isPopular ? "default" : "outline"}>
        {buttonText || "Get Started"}
      </Button>
    </Card>
  );
};

const Pricing = () => {
  const tiers = [
    {
      title: "Basic",
      price: "9",
      description: "Perfect for individuals and small projects.",
      features: [
        "Up to 5 projects",
        "Basic dashboard",
        "Email support",
        "1 GB storage"
      ],
      isPopular: false,
      buttonText: "Start Basic"
    },
    {
      title: "Pro",
      price: "29",
      description: "Ideal for growing businesses and teams.",
      features: [
        "Up to 20 projects",
        "Advanced analytics",
        "24/7 support",
        "10 GB storage",
        "Team collaboration",
        "Custom reporting"
      ],
      isPopular: true,
      buttonText: "Start Pro"
    },
    {
      title: "Enterprise",
      price: "99",
      description: "For large organizations with advanced needs.",
      features: [
        "Unlimited projects",
        "Enterprise dashboard",
        "Dedicated support",
        "100 GB storage",
        "Advanced security",
        "Custom integrations",
        "SLA guarantees"
      ],
      isPopular: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <DashboardLayout>
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">Simple, Transparent Pricing</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Choose the plan that's right for you. All plans include a 14-day free trial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {tiers.map((tier, i) => (
          <PricingTier key={i} {...tier} />
        ))}
      </div>

      <div className="mt-16 bg-muted p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-1">Can I switch plans later?</h3>
            <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">What payment methods do you accept?</h3>
            <p className="text-muted-foreground">We accept all major credit cards and PayPal.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Do you offer discounts?</h3>
            <p className="text-muted-foreground">Yes, we offer discounts for non-profits and educational institutions.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">How do I cancel my subscription?</h3>
            <p className="text-muted-foreground">You can cancel your subscription at any time from your account settings.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Pricing;
