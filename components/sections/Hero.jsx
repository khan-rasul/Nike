"use client";

import Button from "@/components/Button";
import { statistics, shoes } from "@/constants";
import { arrowRight } from "@/public/icons";
import { bigShoe1 } from "@/public/images";
import Image from "next/image";
import ShoeCard from "@/components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
    <section
      id="hero"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-coral-red font-montserrat text-xl">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white relative z-10 pr-10 xl:whitespace-nowrap">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="text-lg font-montserrat text-slate-gray leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <ul className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <li key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <Image
          src={bigShoeImage}
          alt="shoe collection"
          height={502}
          width={610}
          className="realtive object-contain z-10"
        />
        <ul className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <li key={index}>
              <ShoeCard
                imageURL={image}
                bigShoeImage={bigShoeImage}
                setBigShoeImage={setBigShoeImage}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
