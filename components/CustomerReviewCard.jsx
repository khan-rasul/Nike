import { star } from "@/public/icons";
import Image from "next/image";

const CustomerReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={imgURL}
        height={120}
        width={120}
        className="rounded-full object-cover"
        alt="customer"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="flex mt-3 justify-center items-center gap-2.5">
        <Image
          src={star}
          height={24}
          width={24}
          alt="rating"
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default CustomerReviewCard;
