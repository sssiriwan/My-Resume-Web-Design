import Header from "../components/Header";



function HomePage() {
  return (
    <div className="app-wrapper-homepage">
      <Header/>
      {/* กล่องซ้าย */}
      <div className="title">
        <div className="greeting-message">
          <p className="greeting">HELLO, IM SIRIWAN</p>
          <p className="job-name">Front-End developer</p>
        </div>
        <div className="job-deatil">
          Front-End devel oper based in Bekasi, Indonesian I’am coding with a
          clean and beautiful problem solving in mind.
        </div>
        <div className="get-contact-and-cv">
          <button className="hire-me">Hire Me</button>
          <button className="get-cv">Get Cv</button>
        </div>
      </div>
      {/* กล่องขวา */}
      <div className="hero-img">
        <img src="./image/hero-img.png"/>
      </div>
    </div>
  );
}
export default HomePage;
