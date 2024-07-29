import { reviews } from "@/constants";
import CustomerReviewCard from "@/components/CustomerReviewCard";

const CustomerReviews = () => {
  return (
    <section id="customer-reviews" className="max-container">
      <h2 className="text-4xl font-palanquin font-bold text-center">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h2>
      <p className="info-text text-center m-auto mt-4 max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <CustomerReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
