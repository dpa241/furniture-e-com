import React from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";


const Review = () => {
  return (
    <section className="flex pb-24">
      <ReviewForm/>
      <ReviewList/>
    </section>
  );
};

export default Review;
