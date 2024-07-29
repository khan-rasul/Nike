import Button from "@/components/Button";

const Subscribe = () => {
  return (
    <section
      id="subscribe"
      className="max-container w-full flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h2 className="text-4xl font-palanquin font-bold lg:max-w-md leading-[68px]">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h2>
      <div className="flex items-center lg:max-w-[40%] w-full max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
