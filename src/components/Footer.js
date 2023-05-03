import React from "react";
import logo from "../assets/baelogo.png";
const Footer = () => {
  return (
    <div className="mt-24">
      <img src={logo} className="w-[150px]" />
      <h1 className="max-w-[330px] mt-8 text-sm">
        Building a community of support for breast health awareness and early
        detection.
      </h1>
      <div className="flex justify-between w-[500px] mt-8">
        <h1 className="text-sm font-semibold">Risk Assessment</h1>
        <h1 className="text-sm font-semibold">Product</h1>
        <h1 className="text-sm font-semibold">Mission</h1>
        <h1 className="text-sm font-semibold">Team</h1>
        <h1 className="text-sm font-semibold">Achievements</h1>
      </div>
      <div className="mt-8 h-[2px] w-full bg-[#C7C7C7]"></div>
      <p className="text-xs mt-8 text-[#C7C7C7] mb-8">
        © 2023 B.A.E-Breast Cancer Awareness and Examination. All Rights
        Reserved.
      </p>
    </div>
  );
};

export default Footer;
