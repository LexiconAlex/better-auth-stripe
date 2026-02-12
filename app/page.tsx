import { isSubscriber } from "@/lib/utils";
import { PayWall, SignInButton, SignoutButton } from "./signout-button";

export default async function Home() {
  const subStatus = await isSubscriber();
  const article = {
    title: "This is my title",
    content: "This is the content of the article",
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <h1>{article.title}</h1>
          {!subStatus ? <PayWall /> : article.content}
        </div>
        <SignInButton />
        <SignoutButton />
      </main>
    </div>
  );
}
