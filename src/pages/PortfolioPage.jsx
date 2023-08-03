function PortfolioPage() {
  return (
    <div className="app-wrapper-protfolio">
      <div className="section-title">
        <p>WHat I Do</p>
        <h2>Specializing In</h2>
        <div className="menu-protfolio">
          <span>All Projects</span>
          <span>Web Design</span>
          <span>Web Design</span>
        </div>
      </div>
      <div className="protfolio-list">
        {/* map ตรงนี้นะ อยากให้กดเข้าไปดูแแล้วขึ้นตัวอย่างของหน้าเว็บนั้น */}
        <div className="protfolio">
          <img className="protfolio-image" />
        </div>
        <button>View All</button>
      </div>
    </div>
  );
}

export default PortfolioPage;
