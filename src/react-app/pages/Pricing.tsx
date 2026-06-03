import { Check, ArrowRight } from "lucide-react";

export default function PricingPage() {
  const tiers = [
    {
      name: "Free Plan",
      price: "$0",
      period: "forever",
      summary: "Build your initial profile and export a standard resume.",
      bullets: [
        "1 active resume profile",
        "Standard layout builder",
        "Basic sections allowed",
        "Standard file download",
      ],
      buttonText: "Start Free",
      href: "/auth/signup",
      isPopular: false,
    },
    {
      name: "Starter",
      price: "$19.00",
      period: "mo",
      summary: "Manage multiple resume versions for targeted job applications.",
      bullets: [
        "Unlimited resume variants",
        "Advanced section fields",
        "Fast document exports",
        "Removes builder branding",
      ],
      buttonText: "Subscribe",
      href: "https://buy.stripe.com/9B6bJ36Lw1hMdw037x8k80F",
      isPopular: false,
    },
    {
      name: "Pro",
      price: "$49.99",
      period: "mo",
      summary: "Unlock maximum styling control and deep profile customization.",
      bullets: [
        "Everything in Starter",
        "Full formatting dashboard",
        "Direct multi-format export",
        "Priority customer support",
      ],
      buttonText: "Go Pro",
      href: "https://buy.stripe.com/cNifZjedYf8C3VqeQf8k80G",
      isPopular: true,
    },
    {
      name: "Elite Bundle",
      price: "$149.00",
      period: "one-time",
      summary: "Pay once for yearly access to the builder platform.",
      bullets: [
        "Lifetime account profile",
        "All permanent feature builds",
        "Zero recurring charges",
        "Priority system access",
      ],
      buttonText: "Buy Lifetime",
      href: "https://buy.stripe.com/dRmfZj4Do1hM2Rm8rR8k80c",
      isPopular: false,
    },
    {
      name: "License",
      price: "$299.00",
      period: "license",
      summary: "Commercial single-user license to build resumes for clients.",
      bullets: [
        "Commercial profile usage",
        "Extended version history",
        "Developer export formats",
        "Standard single license",
      ],
      buttonText: "Get License",
      href: "https://buy.stripe.com/fZucN7d9UaSm3VqeQf8k80D",
      isPopular: false,
    },
    {
      name: "Enterprise",
      price: "$1,500.00",
      period: "license",
      summary: "Full deployment license for large teams and organizations.",
      bullets: [
        "Full system access keys",
        "Multi-seat configuration",
        "Dedicated platform build",
        "Complete builder features",
      ],
      buttonText: "Get Enterprise",
      href: "https://buy.stripe.com/8x2dRb9XIf8CfE8dMb8k80E",
      isPopular: false,
    },
  ];

  return (
    <div className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
          Resume Builder Pricing
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Select the option that matches your current resume building goals.
        </p>

        <div className="mt-16 space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-6 xl:gap-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`border rounded-xl shadow-md divide-y divide-slate-100 bg-white flex flex-col justify-between transition-all hover:shadow-lg ${
                tier.isPopular ? "border-blue-600 ring-2 ring-blue-600 scale-105 z-10" : "border-slate-200"
              }`}
            >
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">{tier.name}</h3>
                  {tier.isPopular && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Popular
                    </span>
                  )}
                </div>
                
                <p className="mt-2 text-xs text-slate-500 h-12 overflow-hidden text-left leading-relaxed">
                  {tier.summary}
                </p>

                <p className="mt-5 flex items-baseline text-slate-900">
                  <span className="text-2xl font-black tracking-tight">{tier.price}</span>
                  <span className="ml-1 text-xs font-semibold text-slate-400">/{tier.period}</span>
                </p>

                <ul className="mt-6 space-y-3 flex-1">
                  {tier.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start">
                      <Check className="flex-shrink-0 h-4 w-4 text-blue-500 mt-0.5" />
                      <span className="ml-2 text-xs text-slate-600 text-left leading-tight">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-b-xl">
                <a
                  href={tier.href}
                  className={`flex items-center justify-center w-full py-2 px-3 border border-transparent rounded-lg shadow-sm text-xs font-bold text-white transition-colors ${
                    tier.isPopular ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-800 hover:bg-slate-900"
                  }`}
                >
                  {tier.buttonText}
                  <ArrowRight className="ml-1.5 h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
