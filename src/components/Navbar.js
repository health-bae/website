import logo from "../assets/baelogo.png";
export const Navbar = () => {
  return (
    <div className="py-[24px] px-[12%] flex flex-row justify-between items-center">
      <img src={logo} width={155} height={48} />
      <div className="flex flex-row justify-between items-center">
        <a
          href="#risk_assessment"
          className="mr-8 text-sm text-[#373032] hover:text-[#FF6B99] font-medium"
        >
          Risk Assessment
        </a>
        <a
          href="#product"
          className="mr-8 text-sm text-[#373032] hover:text-[#FF6B99] font-medium"
        >
          Product
        </a>
        <a
          href="#mission"
          className="mr-8 text-sm text-[#373032] hover:text-[#FF6B99] font-medium"
        >
          Mission
        </a>
        <a
          href="#team"
          className="mr-8 text-sm text-[#373032] hover:text-[#FF6B99] font-medium"
        >
          Team
        </a>
        <a
          href="#achievements"
          className="mr-8 text-sm text-[#373032] hover:text-[#FF6B99] font-medium"
        >
          Achievements
        </a>
        <a href="https://baeorg.pythonanywhere.com/">
          <button className="bg-[#FF6B99] py-3 px-6 text-white rounded-lg">
            Assess your risk
          </button>
        </a>
      </div>
    </div>
  );
};
