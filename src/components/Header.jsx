function Header() {
  return (
    <div id="wrapper-header" className=" w-full flex justify-between p-2">
      {/* กล่องซ้าย */}
      <div id="web-title">SSSIRIWAN</div>
      {/* กล่องขว่า */}
      <div id="navbar" className=" flex  space-x-5">
        <p className="nav-aboutme">About</p>
        <p className="nav-skill">Skill</p>
        <p className="nav-portfolio">Portfolio</p>
        <p className="nav-contact">Contact</p>
      </div>
    </div>
  );
}
export default Header;
