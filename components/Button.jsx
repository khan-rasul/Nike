import Image from "next/image";
const Button = ({ label, iconURL, buttonType, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 border-2 ${
        buttonType
          ? "bg-white text-slate-gray border-slate-gray hover:bg-slate-100"
          : "bg-coral-red  border-coral-red text-white hover:bg-red-600"
      }  py-4 px-7 font-montserrat text-lg leading-none rounded-full  cursor-pointer ${
        fullWidth && "w-full"
      }`}
    >
      <span>{label}</span>
      {iconURL && <Image src={iconURL} alt={label} />}
    </button>
  );
};

export default Button;
