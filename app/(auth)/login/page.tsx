import { Button, Input, Card } from "@heroui/react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md p-4">
        <div className="flex flex-col items-center pb-4 pt-2 px-4">
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-default-500 text-sm">Log in to manage your exchanges</p>
        </div>
        <div className="flex flex-col gap-4 px-4 pb-4">
          <div className="space-y-1">
            <label className="text-sm font-medium">Email</label>
            <Input placeholder="Enter your email" type="email" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Password</label>
            <Input placeholder="Enter your password" type="password" />
          </div>
          <Button variant="primary" className="w-full mt-2">Log In</Button>
          <div className="text-center text-sm mt-4">
            Don't have an account? <Link href="/register" className="text-blue-500 hover:underline">Sign up</Link>
          </div>
        </div>
      </Card>
    </main>
  );
}