import { useNavigate } from "react-router-dom";

function Header() {
  
  return (
    <div id="wrapper-header" className=" w-full flex justify-between p-2">
      {/* กล่องซ้าย */}
      <div id="web-title" className="text-2xl font-semibold  text-[#2E2D56]">SSSIRIWAN</div>
      {/* กล่องขว่า */}
      <div id="navbar" className=" flex  space-x-5">
        <a className="text-nm text-[#2E2D56]  hover:text-[#5F5E79] font-semibold" href="#app-wrapper-aboutme">About</a>
        <a className="text-nm text-[#2E2D56]  hover:text-[#5F5E79] font-semibold" href="#app-wrapper-skill">Skill</a>
        <a className="text-nm text-[#2E2D56]  hover:text-[#5F5E79] font-semibold" href="#app-wrapper-protfolio">Portfolio</a>
        <a className="text-nm text-[#2E2D56]  hover:text-[#5F5E79] font-semibold" href="#app-wrapper-contact">Contact</a>
      </div>
    </div>
    
  );
}
export default Header;


