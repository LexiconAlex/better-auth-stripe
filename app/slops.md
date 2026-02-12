<button
className="p-3 border-black"
onClick={async () => {
await authClient.signUp.email({
email: "alexander.sjosten@lexicon.se",
name: "Alexander",
password: "Test1234",
});
}} >
Sign Up
</button>
<button
className="p-3 border-black"
onClick={async () => {
await authClient.signIn.email({
email: "alexander.sjosten@lexicon.se",
password: "Test1234",
});
}} >
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
}} >
Subscribe 1 Month
</button>
