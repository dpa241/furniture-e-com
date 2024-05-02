import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center">
      <form className="grid w-full max-w-sm items-center gap-2 py-32">
      {/* <Label htmlFor="username">Username</Label> */}
      <Input type="username" id="username" name="username" placeholder="Username" />
      {/* <Label htmlFor="email">Email</Label> */}
      <Input type="email" id="email" placeholder="Email" />
      {/* <Label htmlFor="password">Password</Label> */}
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
      />
      <div className="flex items-center gap-2">
      <input type="checkbox" name="" id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <Button className="rounded-none">Sign up</Button>
      <Label className="text-center">Already have an account? please <Link to="/login" className="text-indigo-600">Log in</Link></Label>
    </form>
    </div>
  )
}

export default SignUp