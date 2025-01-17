import Button from "@/components/Button";
import { shoe8 } from "@/public/images";
import Image from "next/image";

const SuperQuality = () => {
  return (
    <section
      id="super-quality"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          We provide you
          <span className="text-coral-red"> Super Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <Image
          src={shoe8}
          width={570}
          height={522}
          className="object-contain"
          alt="product details"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
