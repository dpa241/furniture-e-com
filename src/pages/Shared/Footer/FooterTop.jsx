import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import LogoIcon from "../../../assets/logo-icon.png";
const FooterTop = () => {
  return (
    <section className="container mx-auto py-5">
      <div className="flex justify-between">
        <motion.div 
        initial= {{opacity: 0 , y: 50}}
        whileInView={{opacity: 1 , y:0}}
        transition={{
          type: 'tween',
          delay: 0.2,
          duration: 0.2,
          ease: 'easeOut'
        }}
        className="max-w-[300px] space-y-4">
          <div className="flex items-center gap-2">
            <img src={LogoIcon} alt="" />
            <h3 className="font-bold text-2xl">Comforty</h3>
          </div>
          <p className="text-muted-foreground">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          <div className="flex">
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center hover:border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300">
              <FaFacebook />
            </div>
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center hover:border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300">
              <FaTwitter />
            </div>
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center hover:border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300">
              <FaInstagram />
            </div>
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center hover:border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300">
              <FaPinterest />
            </div>
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center hover:border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300">
              <FaYoutube />
            </div>
          </div>
        </motion.div>
        <motion.div 
        initial= {{opacity: 0 , y: 50}}
        whileInView={{opacity: 1 , y:0}}
        transition={{
          type: 'tween',
          delay: 0.6,
          duration: 0.4,
          ease: 'easeOut'
        }}
        className="space-y-3 text-muted-foreground">
          <h2 className="text-[14px] uppercase font-medium ">Category</h2>
          <div className="flex flex-col gap-[2px] ">
            <span>Sofa</span>
            <span>Chair</span>
            <span>Wing Chair</span>
            <span>Desk Chair</span>
            <span>Wooden Chair</span>
            <span>Park Bench</span>
          </div>
        </motion.div>
        <motion.div 
        initial= {{opacity: 0 , y: 50}}
        whileInView={{opacity: 1 , y:0}}
        transition={{
          type: 'tween',
          delay: 0.9,
          duration: 0.6,
          ease: 'easeOut'
        }}
        className="space-y-3 text-muted-foreground">
          <h2 className="text-[14px] uppercase font-medium ">Support</h2>
          <div className="flex flex-col gap-[2px]">
            <span>Help & Support</span>
            <span>Privecy & Policy</span>
            <span>Terms & Conditions</span>
            <span>Help</span>
          </div>
        </motion.div>
        <motion.div 
        initial= {{opacity: 0 , y: 50}}
        whileInView={{opacity: 1 , y:0}}
        transition={{
          type: 'tween',
          delay: 1.2,
          duration: 0.8,
          ease: 'easeOut'
        }}
        className="space-y-3  text-muted-foreground">
          <h2 className="text-[14px] uppercase font-medium">Support</h2>
          <div className="flex flex-col gap-[2px]">
            <span>Help & Support</span>
            <span>Privecy & Policy</span>
            <span>Terms & Conditions</span>
            <span>Help</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterTop;
