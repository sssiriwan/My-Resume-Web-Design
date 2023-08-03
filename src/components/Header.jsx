function Header() {
  return (
    <div className="wrapper-header">
      {/* กล่องซ้าย */}
      <div id="web-title">SSSIRIRWAN</div>
      {/* กล่องขว่า */}
      <div className="navbar">
        <p className="nav-aboutme">About</p>
        <p className="nav-skill">Skill</p>
        <p className="nav-portfolio">Portfolio</p>
        <p className="nav-contact">Contact</p>
      </div>
    </div>
  );
}
export default Header;
