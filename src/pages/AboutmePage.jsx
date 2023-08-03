function AboutmePage() {
  return (
    <div className="app-wrapper-aboutme">
      {/* กล่อง1 อนาคตจะแก้เป็นของ Full-stack dev*/}
      <div className="skilss">
        <div className="skilss-ellipse"></div>
        <div className="skilss-user-research">
          <img className="skillss-image" src="" />
          <div className="skillss-text"></div>
        </div>
        <div className="skilss-mockup">
          <img className="skillss-image" src="" />
          <div className="skillss-text"></div>
        </div>
        <div className="skilss-wireframe">
          <img className="skillss-image" src="" />
          <div className="skillss-text"></div>
        </div>
        <div className="skilss-prototype">
          <img className="skillss-image" src="" />
          <div className="skillss-text"></div>
        </div>
      </div>
      {/* กล่อง2 */}
      <div className="saly">
        <img className="image-saly" src="./image/Saly-10.png" />
      </div>
      {/* กล่อง3 */}
      <div className="aboutme">
        <div className="aboutme-title"></div>
        <div className="aboutme-job-name"></div>
        <div className="aboutme-detail"></div>
        <div className="aboutme-hobby"></div>
      </div>
    </div>
  );
}

export default AboutmePage;
