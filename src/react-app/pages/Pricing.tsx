"use client";

import { useState } from "react";
import { auth } from "../../firebase";

const plans = [
  {
    name: "Free",
    planKey: "free",
    price: 0,
    desc: "Perfect for getting started.",
    stripePriceId: null,
    features: [
      "3 AI requests per day",
      "Summary Generator",
      "Bullet Point Generator",
      "Resume Builder",
    ],
  },
  {
    name: "Pro",
    planKey: "pro",
    price: 19,
    desc: "Built for active job seekers.",
    stripePriceId: "price_1TbF9BPE4wCsfg732ScUJfmc",
    features: [
      "Unlimited Summary Generator",
      "Unlimited Bullet Point Generator",
      "Unlimited Resume Builder",
      "Priority Support",
    ],
  },
  {
    name: "Business",
    planKey: "business",
    price: 29,
    desc: "Everything professionals need.",
    stripePriceId: "price_1TnzrFPE4wCsfg73xSOMZNuH",
    features: [
      "Everything in Pro",
      "Unlimited Summary Generator",
      "Unlimited Bullet Point Generator",
      "Unlimited Resume Builder",
      "Priority Support",
    ],
  },
  {
    name: "Premium",
    planKey: "premium",
    price: 49,
    desc: "The complete AI career platform.",
    stripePriceId: "price_1TGwAJPE4wCsfg73gMQlv8Ph",
    features: [
      "Everything in Business",
      "Unlimited Summary Generator",
      "Unlimited Bullet Point Generator",
      "Unlimited Resume Builder",
      "VIP Support",
    ],
  },
];
export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);

  async function checkout(plan: any) {
    if (plan.planKey === "free") {
      window.location.href = "/auth";
      return;
    }

    setLoading(plan.planKey);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: plan.stripePriceId,
          plan: plan.planKey,
          email: auth.currentUser?.email,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Checkout failed");
      }

      sessionStorage.setItem("noah_pending_plan", plan.planKey);
      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      alert("Something went wrong starting checkout.");
    } finally {
      setLoading(null);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-700/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-3xl" />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-20">

          <div className="inline-flex px-4 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 text-sm mb-6">
            NOAH AI Career Platform
          </div>

          <h1 className="text-6xl font-black tracking-tight">

            Upgrade Your

            <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-yellow-400 bg-clip-text text-transparent">
              Career Engine
            </span>

          </h1>

          <p className="mt-8 text-xl text-zinc-400 max-w-3xl mx-auto">
            Build stronger resumes, beat ATS filters, prepare for interviews,
            and accelerate your career with NOAH's AI-powered platform.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 gap-8">

          {plans.map((plan) => {

            const featured = plan.planKey === "business";

            return (

              <div
                key={plan.planKey}
                className={`relative rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden

                ${
                  featured
                    ? "border-yellow-400 shadow-[0_0_60px_rgba(250,204,21,.15)] bg-zinc-900"
                    : "border-zinc-800 bg-zinc-950"
                }`}
              >

                {featured && (
                  <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white text-center py-3 font-bold">
                    ★ MOST POPULAR ★
                  </div>
                )}

                <div className="p-8">

                  <h2 className="text-3xl font-bold">
                    {plan.name}
                  </h2>

                  <p className="text-zinc-400 mt-3">
                    {plan.desc}
                  </p>

                  <div className="mt-8">

                    <span className="text-6xl font-black">
                      ${plan.price}
                    </span>

                    <span className="text-zinc-500 text-lg">
                      /month
                    </span>

                  </div>

                  <button
                    onClick={() => checkout(plan)}
                    className={`mt-8 w-full rounded-xl py-4 font-bold text-lg transition

                    ${
                      featured
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-300 text-black hover:scale-105"
                        : plan.planKey === "free"
                        ? "bg-zinc-800 hover:bg-zinc-700"
                        : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400"
                    }`}
                  >
                    {loading === plan.planKey
                      ? "Processing..."
                      : plan.planKey === "free"
                      ? "Start Free"
                      : "Upgrade Now"}
                  </button>

                  <div className="mt-10 space-y-4">

                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <div className="text-yellow-400 mt-0.5">
                          ✓
                        </div>

                        <span className="text-zinc-300">
                          {feature}
                        </span>
                      </div>
                    ))}

                  </div>

                </div>

              </div>

            );
          })}

        </div>

        <div className="mt-20 text-center text-zinc-500 text-sm">
          Secure payments powered by Stripe • Cancel anytime • No hidden fees
        </div>

      </section>

    </main>
  );
}
