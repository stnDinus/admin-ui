import FormForgotPassword from "../components/Fragments/FormForgotPassword"
import Authlayout from "../components/Layouts/AuthLayout"

export default function ForgotPasswordPage() {
  return <Authlayout>
    <div className="flex flex-col items-center space-y-1.5">
      <h1 className="text-xl font-bold">Forgot Password?</h1>
      <span className="text-sm text-gray-02 max-w-72 text-center">Enter your email address to get the password reset link.</span>
    </div>
    <br />
    <FormForgotPassword />
  </Authlayout>
}
