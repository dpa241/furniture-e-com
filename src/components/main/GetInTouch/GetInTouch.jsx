import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ContactImg from "../../../assets/Img.png";

const GetInTouch = () => {
  return (
    <section className="container mx-auto">
      <div className="flex items-center gap-20 bg-[#F6F6F6] py-10 ">
        <div className="w-1/2">
          <img src={ContactImg} alt="" />
        </div>
        <div className="w-1/2 space-y-4">
          <h2 className="text-3xl font-bold uppercase">Get In Touch</h2>
          <p>
            We'd love to hear from you: connect with us for a seamless shopping
            experience and personalized assistance.
          </p>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" className="px-2" />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
