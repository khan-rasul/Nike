import { star } from "@/public/icons";
import Image from "next/image";

const PopularProductCard = ({ product }) => {
  return (
    <div className="flex flex-1 flex-col w-full">
      <Image
        src={product.imgURL}
        alt="popular products"
        height={282}
        width={282}
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <Image src={star} height={24} width={24} alt="rating icon" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({product.rating})
        </p>
      </div>
      <h3 className="text-2xl mt-2 leading-normal font-palanquin font-semibold">
        {product.name}
      </h3>
      <p className="mt-2 font-montserrat text-coral-red text-2xl font-semibold leading-normal">
        {product.price}
      </p>
    </div>
  );
};

export default PopularProductCard;
