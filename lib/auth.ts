import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { admin } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import Stripe from "stripe";
import { stripe } from "@better-auth/stripe";

const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-11-17.clover",
});

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  plugins: [
    admin(),
    stripe({
      stripeClient,
      stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
      subscription: {
        enabled: true,
        plans: [
          {
            name: "basic",
            priceId: "price_1SzdZ7FNhyPxx8WDq8ixoju8", // the price ID from stripe
            annualDiscountPriceId: "price_1SzdZeFNhyPxx8WDzLe0LzSc", // (optional) the price ID for annual billing with a discount
          },
        ],
      },
    }),
    nextCookies(),
  ],
});
