import React from "react";
import Vinit from "../assets/Vinit.png";
import Jainika from "../assets/Jainika.png";
import Nirali from "../assets/Nirali.png";
const Advisors = () => {
  return (
    <div className="mt-16">
      <h1 className="text-center text-2xl text-[#282425] font-semibold">
        Backed by an amazing team of advisors.
      </h1>
      <div className="flex justify-between mt-8">
        <div>
          <img src={Jainika} className="w-[150px]" />
          <h1 className="text-center font-semibold">Dr. Jainika Shah</h1>
        </div>

        <div>
          <img src={Nirali} className="w-[150px]" />
          <h1 className="text-center font-semibold">Dr. Nirali Sejpal</h1>
        </div>

        <div>
          <img src={Vinit} className="w-[150px]" />
          <h1 className="text-center font-semibold">Mr. Vinit Asher</h1>
        </div>
      </div>
    </div>
  );
};

export default Advisors;
