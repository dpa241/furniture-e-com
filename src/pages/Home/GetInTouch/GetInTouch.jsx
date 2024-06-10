import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ContactImg from "../../../assets/Img.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, staggerContainer } from "@/variants";

const GetInTouch = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          delay: 0.2,
          duration: 1.6,
          ease: "easeOut",
        }}
        ref={ref}
        className="relative  flex justify-center items-center h-[350px] overflow-hidden"
      >
        <motion.div className="absolute bg-contact_bg bg-cover bg-bottom w-full h-full ">
          bg
        </motion.div>
        <motion.div style={{ y: yBg }} className="absolute w-full ">
          <motion.div 
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="flex items-center justify-center">
            <motion.div 
            variants={fadeIn('right','tween',0.5,1.1)}
            className="w-1/2">
              <img src={ContactImg} alt="" />
            </motion.div>
            <motion.div 
            variants={fadeIn('left','tween',0.5,1.1)}
            className=" w-1/2 text-white space-y-4">
              <h2 className="text-3xl font-bold uppercase">Get In Touch</h2>
              <p>
                We'd love to hear from you: connect with us for a seamless
                shopping experience and personalized assistance.
              </p>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Email" className="px-2" />
                <Button type="submit">Subscribe</Button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default GetInTouch;
