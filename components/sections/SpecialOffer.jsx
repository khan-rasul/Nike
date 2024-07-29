import { offer } from "@/public/images";
import Image from "next/image";
import Button from "@/components/Button";
import { arrowRight } from "@/public/icons";

const SpecialOffer = () => {
  return (
    <section
      id="special-offer"
      className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container"
    >
      <div className="flex-1">
        <Image
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
          alt="special offer"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold font-palanquin">
          <span className="text-coral-red">Special </span> Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex mt-11 flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label="Learn more" buttonType />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
