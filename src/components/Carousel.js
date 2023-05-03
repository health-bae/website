import React from "react";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";
import feature5 from "../assets/feature5.png";
import feature6 from "../assets/feature6.png";
import feature7 from "../assets/feature7.png";
const Carousel = () => {
  return (
    <div className="mt-28">
      <h1 className="text-center text-3xl text-[#282425] font-medium">
        <span className="text-[#FF6B99]">B</span>reast Cancer{" "}
        <span className="text-[#FF6B99]">A</span>wareness and{" "}
        <span className="text-[#FF6B99]">E</span>xamination
      </h1>
      <div className="relative flex overflow-x-hidden">
        <div className="flex py-12 animate-marquee whitespace-nowrap">
          <img src={feature1} height={261} width={261} />
          <img src={feature2} height={261} width={261} />
          <img src={feature3} height={261} width={261} />
          <img src={feature4} height={261} width={261} />
          <img src={feature5} height={261} width={261} />
          <img src={feature6} height={261} width={261} />
          <img src={feature7} height={261} width={261} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
