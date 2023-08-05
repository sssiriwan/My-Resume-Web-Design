import Footer from "../components/Footers";
import Header from "../components/Header";
import AboutmePage from "./AboutmePage";
import ContactmePage from "./ContactmePage";
import PortfolioPage from "./PortfolioPage";
import SkillPage from "./SkillPage";

function HomePage() {
  return (
    <div
      id="app-wrapper-"
      className=" w-full flex-col justify-between"
    >
      <Header />

      <div id="app-wrapper-homepage" className=" p-3 flex items-center justify-center space-x-4">
        {/* กล่องซ้าย */}
        <div id="title" className=" w-[496px] h-[249px] flex-col  text-left  space-y-1  ">
          <div id="greeting-message"  className="w-full">
            <p id="greeting" className=" w-full text-lg font-semibold text-blue-900">HELLO, IM SIRIWAN</p>
            <p id="job-name" className=" w-full text-2xl font-semibold  text-[#2E2D56]">Front-End developer</p>
          </div>
          <div id="job-deatil" className=" w-full text-sm  text-[#5F5E79] font-normal">
            Front-End devel oper based in Bekasi, Indonesian I’am coding with a
            clean and beautiful problem solving in mind.
          </div>
          <div id="get-contact-and-cv"  className=" space-x-3 flex justify-center py-2">
            <button id="hire-me" className=" w-[150px] h-[53px] border-2 border-solid bg-[#4175FA] rounded-full text-white font-medium hover:bg-sky-400  ">Hire Me</button>
            <button id="get-cv" className=" w-[150px] h-[53px] border-2 border-solid bg-[#4175FA] rounded-full text-white font-medium hover:bg-sky-400  ">Get Cv</button>
          </div>
        </div>
        {/* กล่องขวา */}
        <div id="hero-img" className="w-2/4 h-2/4 ">
          <img
            className=" w-full  "
            src="/image/hero-img.png"
          />
        </div>
      </div>

      <AboutmePage />
      <SkillPage />
      <PortfolioPage/>
      <ContactmePage/>
      <Footer/>
    </div>
  );
}
export default HomePage;
