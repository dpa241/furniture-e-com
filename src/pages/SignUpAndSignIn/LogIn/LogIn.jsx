import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const LogIn = () => {
  const {signIn} = useContext(AuthContext)
  const handleSignIn = async(e) =>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const {email,password} = Object.fromEntries(formData)

    try{
      const res = await  signIn(email,password)
      const user = res.user
      console.log((user));
    }catch(error){
      console.error(error)
      toast.error(error.message)
    }
  }
  return (
    <div className="flex justify-center">
      <form 
        onSubmit={handleSignIn}
        className="grid w-full max-w-sm items-center gap-2 py-32">
      <h2 className="text-4xl font-semibold pb-6">Log in</h2>
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
