import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="flex justify-center">
      <form className="grid w-full max-w-sm items-center gap-2 py-32">
      {/* <Label htmlFor="email">Email</Label> */}
      <Input type="email" id="email" name="email" placeholder="Email" />
      {/* <Label htmlFor="password">Password</Label> */}
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
      />
      <Button className="rounded-none">Log in</Button>
      <Label className="text-center">Not have an account yet? please <Link to="/signup" className="text-indigo-600">Sign up</Link></Label>
    </form>
    </div>
  );
};

export default LogIn;
