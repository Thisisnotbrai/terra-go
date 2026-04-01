import { LoginForm } from "@/components/login-form";

export default function Page() {
  return (
    <div className="max-w-md mx-auto mt-20 p-4 border rounded">
      <h1 className="text-xl font-bold mb-4">Login</h1> 
      <LoginForm />
    </div>
  )
}