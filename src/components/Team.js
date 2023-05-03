import React from "react";
import Manan from "../assets/Manan.png";
import Pusti from "../assets/Pusti.png";
import Girish from "../assets/Girish.png";
import Khushi from "../assets/Khushi.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const Team = () => {
  return (
    <div className="mt-16">
      <h1 className="text-center text-2xl text-[#282425] font-semibold">
        Driven by a mission to make a difference in women's health.
      </h1>
      <div className="flex justify-between mt-8">
        <div>
          <img src={Khushi} className="w-[150px]" />
          <h1 className="text-center font-semibold">Khushi Ruparel</h1>
          <div className="flex justify-evenly mt-4">
            <div className="p-3 bg-[#C7C7C7] hover:bg-[#FF6B99] rounded-full">
              <AiFillLinkedin size={24} color="white" />
            </div>
            <div className="p-3 bg-[#C7C7C7] hover:bg-[#FF6B99] rounded-full">
              <AiFillGithub size={24} color="white" />
            </div>
          </div>
        </div>
        <div>
          <img src={Pusti} className="w-[150px]" />
          <h1 className="text-center font-semibold">Pusti Sheth</h1>
          <div className="flex justify-evenly mt-4">
            <div className="p-3 bg-[#C7C7C7] hover:bg-[#FF6B99] rounded-full">
              <AiFillLinkedin size={24} color="white" />
            </div>
            <div className="p-3 bg-[#C7C7C7] hover:bg-[#FF6B99] rounded-full">
              <AiFillGithub size={24} color="white" />
            </div>
          </div>
        </div>
        <div>
          <img src={Manan} className="w-[150px]" />
          <h1 className="text-center font-semibold">Manan Shah</h1>
          <div className="flex justify-evenly mt-4">
            <div className="p-3 bg-[#C7C7C7] hover:bg-[#FF6B99] rounded-full">
              <AiFillLinkedin size={24} color="white" />
            </div>
            <div className="p-3 bg-[#C7C7C7] hover:bg-[#FF6B99] rounded-full">
              <AiFillGithub size={24} color="white" />
            </div>
          </div>
        </div>
        <div>
          <img src={Girish} className="w-[150px]" />
          <h1 className="text-center font-semibold">Girish Rajnani</h1>
          <div className="flex justify-evenly mt-4">
            <div className="p-3 bg-[#C7C7C7] hover:bg-[#FF6B99] rounded-full">
              <AiFillLinkedin size={24} color="white" />
            </div>
            <div className="p-3 bg-[#C7C7C7] hover:bg-[#FF6B99] rounded-full">
              <AiFillGithub size={24} color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
