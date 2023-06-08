import { Link } from "react-router-dom";
import logo from "../assets/baelogo.png";
export const Navbar = () => {
  return (
    <div className="py-[24px] px-[12%] flex flex-row justify-between items-center">
      <img src={logo} width={155} height={48} />
      <div className="flex flex-row justify-between items-center">
        <Link
          href="#"
          className="mr-8 text-sm text-[#373032] hover:text-[#FF6B99] font-medium"
        >
          Risk Assessment
        </Link>
        <Link
          href="#"
          className="mr-8 text-sm text-[#373032] hover:text-[#FF6B99] font-medium"
        >
          Product
        </Link>
        <Link
          href="#"
          className="mr-8 text-sm text-[#373032] hover:text-[#FF6B99] font-medium"
        >
          Mission
        </Link>
        <Link
          href="#"
          className="mr-8 text-sm text-[#373032] hover:text-[#FF6B99] font-medium"
        >
          Team
        </Link>
        <Link
          href="#"
          className="mr-8 text-sm text-[#373032] hover:text-[#FF6B99] font-medium"
        >
          Achievements
        </Link>
        <a href="https://baeorg.pythonanywhere.com/">
          <button className="bg-[#FF6B99] py-3 px-6 text-white rounded-lg">
            Assess your risk
          </button>
        </a>
      </div>
    </div>
  );
};
