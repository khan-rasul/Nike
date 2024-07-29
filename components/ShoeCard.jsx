import Image from "next/image";

const ShoeCard = ({ imageURL, bigShoeImage, setBigShoeImage }) => {
  const handleClick = () => {
    setBigShoeImage(imageURL.bigShoe);
  };
  return (
    <div
      className={` rounded-xl cursor-pointer max-sm:flex-1 hover:shadow-lg ${
        bigShoeImage === imageURL.bigShoe && "border-2 border-coral-red"
      }`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40 max-sm:p-4">
        <Image
          src={imageURL.thumbnail}
          height={103.34}
          width={127}
          alt="shoe collection"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
