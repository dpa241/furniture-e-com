import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import app from "@/firebase/firebase.config";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";

// const auth = getAuth(app)

const SignUp = () => {
  const {createUser,setLoading} = useContext(AuthContext)
  const handleSignUp = async(e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const {username,email,password} = Object.fromEntries(formData)
    
    try{
      const res = await createUser(email,password)
      const user = res.user
      console.log(user);
      
    }catch(error){
      console.error(error)
      toast.error(error.message)
    }

  }
  return (
    <div className="flex justify-center">
      <form onSubmit={handleSignUp} className="grid w-full max-w-sm items-center gap-2 py-32">
        <h2 className="text-4xl font-semibold pb-6">Sign up now !!!</h2>
        {/* <Label htmlFor="username">Username</Label> */}
        <Input
          type="username"
          id="username"
          name="username"
          placeholder="Username"
        />
        {/* <Label htmlFor="email">Email</Label> */}
        <Input type="email" id="email" name="email" placeholder="Email" />
        {/* <Label htmlFor="password">Password</Label> */}
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <div className="flex items-center gap-2 py-2">
          <Checkbox />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
        <Button className="rounded-none">Sign up</Button>
        <Label className="text-center">
          Already have an account? please{" "}
          <Link to="/login" className="text-indigo-600">
            Log in
          </Link>
        </Label>
      </form>
    </div>
  );
};

export default SignUp;
