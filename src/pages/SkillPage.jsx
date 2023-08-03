function SkillPage() {
  return (
    <div className="app-wrapper-skill">
      <div className="section-title">
        <p>WHat I Do</p>
        <h2>Specializing In</h2>
      </div>
      <div className="skill-list">
        {/* map ตรงนี้นะ */}
        <div className="skill">
          <img className="skill-image" />
          <div className="skill-name"></div>
          <div className="skill-detail"></div>
        </div>
      </div>
    </div>
  );
}

export default SkillPage;
