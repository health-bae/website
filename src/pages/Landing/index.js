import { Navbar } from "../../components/Navbar";
import smallLogo from "../../assets/smalllogo.png";
import landing from "../../assets/landing.png";
import polygon from "../../assets/polygon.png";
import Carousel from "../../components/Carousel";
import Features from "../../components/Features";
import banner from "../../assets/pinkbanner.png";
import Team from "../../components/Team";
import Advisors from "../../components/Advisors";
import Achievements from "../../components/Achievements";
import Footer from "../../components/Footer";
export default function Landing() {
  return (
    <main>
      <Navbar />
      <div className="pl-[12%]">
        <div className="flex">
          <div className="self-center">
            <div className="flex items-center">
              <img src={smallLogo} width={24} height={24} />
              <p className="ml-4 text-sm text-[#373032] font-medium">
                BREAST CANCER RISK ASSESSMENT
              </p>
            </div>
            <p className="w-[597px] text-5xl font-semibold mt-4">
              Enabling personalized data-driven breast cancer pre-screening for
              all women.
            </p>
            <p className="mt-6 text-lg text-[#373032] font-medium">
              Join us in empowering women through early detection, education,
              and support services.
            </p>
            <a href="https://baeorg.pythonanywhere.com/">
              <button className="bg-[#FF6B99] py-3 px-6 text-white mt-8 rounded-lg">
                Assess your risk
              </button>
            </a>
          </div>
          <div>
            <img src={landing} height={617} />
          </div>
        </div>
        <div className="mt-16 flex">
          <img src={polygon} height={400} width={400} />
          <div className="ml-8">
            <h1 className="text-3xl font-semibold mt-4">
              AI-based breast cancer screening.
            </h1>
            <h1 className="text-3xl font-semibold">Assess your risk today!</h1>
            <p className="text-base w-[60%]">
              The AI-enabled Evaluation determines the patient's breast cancer
              risk level, based on regulated diagnosis in just 2 minutes.
            </p>
            <p className="text-base w-[60%] mt-4">
              With our AI-based risk assessment, you can take proactive steps
              towards your breast health and potentially detect any issues early
              on.
            </p>
            <button className="bg-[#FF6B99] py-3 px-6 text-white mt-8 rounded-lg">
              Assess your risk
            </button>
          </div>
        </div>
      </div>
      <Carousel />
      <div className="px-[12%] mt-8">
        <Features />
        <div className="relative mt-24">
          <img
            src={require("../../assets/pinkbanner.png")}
            className="w-[100%]"
          />
          <div className="absolute top-[140px] px-8 max-w-[600px]">
            <h1 className="text-2xl text-white font-semibold">
              In India, women shy away from talking about lumps, discharge or
              pain in their breasts: this being the reason for late detection.
            </h1>
            <p className="text-sm text-white mt-2">
              There are chances of 9 out of 10 women surviving, when treated for
              early-stage breast cancer.
            </p>
          </div>
        </div>
        <Team />
        <Advisors />
        <Achievements />
        <h1 className="text-2xl text-center font-semibold mt-32">
          Breast Cancer Screening,{" "}
          <span className="text-[#FF6B99]">Redefined.</span>
        </h1>
        <Footer />
      </div>
    </main>
  );
}
