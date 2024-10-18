import LabeledInput from "../Elements/LabeledInput"
import { Link } from "react-router-dom"
import Button from "../Elements/Button"

export default function FormForgotPassword() {
  return <form action="">
    <div className="mb-6">
      <LabeledInput label={"Email Address"} name={"email"} type={"email"} placeholder={"hello@example.com"} />
    </div>
    <Button type="submit" variant="bg-primary w-full text-white font-bold">Password Reset</Button>
    <Link to={"/login"} className="block text-center text-sm h-12 grid place-items-center font-bold text-gray-03">Back to login</Link>
  </form>

}
