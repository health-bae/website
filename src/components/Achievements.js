import React from "react";
import together from "../assets/together.png";
import akaar from "../assets/akaar.png";
import eureka from "../assets/eureka.png";
const Achievements = () => {
  return (
    <div className="mt-24">
      <h1 className="text-center text-2xl text-[#282425] font-semibold">
        Our Achievements
      </h1>
      <div className="flex mt-16 justify-between">
        <div className="mr-6">
          <img src={together} className="w-full" />
          <h1 className="text-base font-semibold mt-4">
            National Top 6 Finalists
          </h1>
          <p className="text-[#373032] text-sm mt-4">
            Student Entrepreneurship Bootcamp & Venture competition, Schulich
            School of Business in association with Startup India.
          </p>
        </div>
        <div className="mr-6">
          <img src={akaar} className="w-full" />
          <h1 className="text-base font-semibold mt-4">
            National Top 6 Finalists
          </h1>
          <p className="text-[#373032] text-sm mt-4">
            Student Entrepreneurship Bootcamp & Venture competition, Schulich
            School of Business in association with Startup India.
          </p>
        </div>
        <div className="mr-6">
          <img src={eureka} className="w-full" />
          <h1 className="text-base font-semibold mt-4">
            National Top 6 Finalists
          </h1>
          <p className="text-[#373032] text-sm mt-4">
            Student Entrepreneurship Bootcamp & Venture competition, Schulich
            School of Business in association with Startup India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
