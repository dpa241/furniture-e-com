import TestimonialSlider from "./TestimonialSlider";
import TestimonialSliderAlt from "./TestimonialSliderAlt";

const Testimonial = () => {
  return (
    <section className="container mx-auto">
          <div className="flex flex-col justify-center px-2">
            <div className="text-center mb-[50px]">
              <h2 className="text-3xl font-semibold uppercase pb-6">REVIEWD BY CUSTOMERS</h2>
              <p className="font-semibold uppercase">WHAT OUR CUSTOMERS THINK ABOUT US?</p>
            </div>
          </div>
        <TestimonialSliderAlt/>
    </section>
    // <TestimonialSliderAlt/>
  );
};

export default Testimonial;
