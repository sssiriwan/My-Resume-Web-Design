import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div id="wrapper-header" className=" w-full flex justify-between p-2">
      {/* กล่องซ้าย */}
      <div id="web-title" className="text-2xl font-semibold  text-[#2E2D56]">SSSIRIWAN</div>
      {/* กล่องขว่า */}
      <div id="navbar" className=" flex  space-x-5">
        <button className="text-nm text-[#2E2D56]  hover:text-[#5F5E79] font-semibold" onClick={()=> navigate("/resume/aboutme")}>About</button>
        <button className="text-nm text-[#2E2D56]  hover:text-[#5F5E79] font-semibold" onClick={()=> navigate("/resume/skill")}>Skill</button>
        <button className="text-nm text-[#2E2D56]  hover:text-[#5F5E79] font-semibold" onClick={()=> navigate("/resume/portfolio")}>Portfolio</button>
        <button className="text-nm text-[#2E2D56]  hover:text-[#5F5E79] font-semibold" onClick={()=> navigate("/resume/contact")}>Contact</button>
      </div>
    </div>
  );
}
export default Header;
