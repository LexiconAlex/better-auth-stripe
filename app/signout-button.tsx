"use client";

import { authClient } from "@/lib/auth-client";
import { router } from "better-auth/api";
import { useRouter } from "next/navigation";

export function SignoutButton() {
  const router = useRouter();
  return (
    <button
      className="p-3 border-black"
      onClick={async () => {
        await authClient.signOut();
        router.refresh();
      }}
    >
      Sign out
    </button>
  );
}

export function SignInButton() {
  const router = useRouter();
  return (
    <button
      className="p-3 border-black"
      onClick={async () => {
        await authClient.signIn.email({
          email: "alexander.sjosten@lexicon.se",
          password: "Test1234",
        });
        router.refresh();
      }}
    >
      Sign In
    </button>
  );
}

export function PayWall() {
  return (
    <div>
      <h1>You are not a subscriber</h1>
      <p>Please subscribe!</p>
      <button
        onClick={async () => {
          await authClient.subscription.upgrade({
            plan: "basic",
            successUrl: "http://localhost:3000",
            cancelUrl: "http://localhost:3000",
            disableRedirect: false,
          });
        }}
      >
        99kr / mo
      </button>
      <p>Or login</p>
      <SignInButton />
    </div>
  );
}
