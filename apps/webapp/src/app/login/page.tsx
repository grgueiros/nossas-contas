import LoginButton from "@/modules/auth/ui/login-button";

export default async function Home() {
  return (
    <main className="min-h-svh w-full flex items-center justify-center">
      <LoginButton />
    </main>
  );
}
