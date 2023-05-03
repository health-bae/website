import React, { useState } from "react";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";
import phone3 from "../assets/phone3.png";
const Features = () => {
  const [hoverItem, setHoverItem] = useState("early");
  return (
    <div className="flex w-vw justify-between items-center">
      <div>
        <div
          onMouseOver={() => {
            setHoverItem("early");
            console.log("Hello");
          }}
          className="w-[600px] mt-4 p-6 hover:bg-[#F7F7F7] rounded-lg cursor-pointer"
        >
          <p className="text-lg font-semibold text-[#E24173]">
            Early detection and Awareness
          </p>
          <p className="text-sm text-[#373032]">
            Worried about your risk? Start by assessing your breast cancer risk
            using our AI model that considers family history, hormonal pill
            intake, lifestyle choices, and health data to make a prediction. Get
            access to resources start taking control of your breast health.
          </p>
        </div>
        <div
          onMouseOver={() => setHoverItem("care")}
          className="w-[600px] mt-4 hover:bg-[#F7F7F7] rounded-lg p-6 cursor-pointer"
        >
          <p className="text-lg font-semibold text-[#E24173]">
            Treatment and Care
          </p>
          <p className="text-sm text-[#373032] ">
            If you have been diagnosed with breast cancer, B.A.E offers an
            opportunity to meet with an oncologist and receive personalized
            insights about your breast health. We also provide consultation
            discounts to make it more accessible for patients in need.
          </p>
        </div>
        <div
          onMouseOver={() => setHoverItem("wellness")}
          className="w-[600px] mt-4 hover:bg-[#F7F7F7] rounded-lg p-6 cursor-pointer"
        >
          <p className="text-lg font-semibold text-[#E24173]">Wellness</p>
          <p className="text-sm text-[#373032]">
            Are you navigating breast cancer and looking to connect with others?
            Connect with a community of patients, survivors, and others who
            understand what you are going through. Share your experiences, seek
            advice, and find comfort in knowing you are not alone.
          </p>
        </div>
      </div>
      <div className="ml-8">
        <img
          src={phone2}
          className={`w-[250px] ${hoverItem === "care" ? "block" : "hidden"}`}
        />
        <img
          src={phone1}
          className={`w-[250px] ${
            hoverItem === "wellness" ? "block" : "hidden"
          }`}
        />
        <img
          src={phone3}
          className={`w-[250px] ${hoverItem === "early" ? "block" : "hidden"}`}
        />
      </div>
    </div>
  );
};

export default Features;
