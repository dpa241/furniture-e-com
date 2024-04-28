import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <section className="relative">
      <div className="">
        <div className="min-h-[500px] rounded-[50px] max-w-[1280px]">
          <div className="flex flex-col justify-center h-[500px] px-2">
            <div className="text-center mb-[50px]">
              <h2 className="text-3xl font-semibold uppercase pb-6">REVIEWD BY CUSTOMERS</h2>
              <p className="font-semibold uppercase">WHAT OUR CUSTOMERS THINK ABOUT US?</p>
            </div>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
