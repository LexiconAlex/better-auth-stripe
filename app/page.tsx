"use client";

import { authClient } from "@/lib/auth-client";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <button
          className="p-3 border-black"
          onClick={async () => {
            await authClient.signUp.email({
              email: "alexander.sjosten@lexicon.se",
              name: "Alexander",
              password: "Test1234",
            });
          }}
        >
          Sign Up
        </button>
        <button
          className="p-3 border-black"
          onClick={async () => {
            await authClient.signIn.email({
              email: "alexander.sjosten@lexicon.se",
              password: "Test1234",
            });
          }}
        >
          Sign In
        </button>
        <button
          className="p-3 border-black"
          onClick={async () => {
            await authClient.subscription.upgrade({
              plan: "basic",
              successUrl: "http://localhost:3000",
              cancelUrl: "http://localhost:3000",
              disableRedirect: false,
            });
          }}
        >
          Subscribe 1 Month
        </button>
      </main>
    </div>
  );
}
