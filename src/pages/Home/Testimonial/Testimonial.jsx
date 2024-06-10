import TestimonialSlider from "./TestimonialSlider";
import TestimonialSliderAlt from "./TestimonialSliderAlt";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        delay: 0.2,
        duration: 1.6,
        ease: "easeOut",
      }}
      className="container mx-auto"
    >
      <div className="flex flex-col justify-center px-2">
        <div className="text-center mb-[50px]">
          <h2 className="text-3xl font-semibold uppercase pb-6">
            REVIEWD BY CUSTOMERS
          </h2>
          <p className="font-semibold uppercase">
            WHAT OUR CUSTOMERS THINK ABOUT US?
          </p>
        </div>
      </div>
      <TestimonialSliderAlt />
    </motion.section>
    // <TestimonialSliderAlt/>
  );
};

export default Testimonial;
