import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/LoginButton";


export default function Home() {
  return (
    <main
      className="flex h-full flex-col items-center justify-center bg-sky-500"
    >
      <div className="space-y-6 flex flex-col items-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">Auth</h1>
        <p>A simple authentication service</p>
        <LoginButton>
          <Button variant='secondary'>Sign in</Button>
        </LoginButton>
      </div>
    </main>
  );
}
