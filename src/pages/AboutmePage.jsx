function AboutmePage() {
  return (
    <div id="app-wrapper-aboutme" className=" w-full grid grid-cols-1 lg:grid-cols-3 place-items-center ">
      {/* กล่อง1 อนาคตจะแก้เป็นของ Full-stack dev*/}
      <div className="w-full h-11/12 ">
        <div id="skilss" className=" w-[390px] h-[379px]   relative ">
          <img
            className="   absolute z-0 w-3/4 left-10 top-10"
            src="/image/Ellipse 5.png"
          />
          <div
            id="skilss-user-research"
            className=" grid grid-cols-1 gap-[0.5px] place-items-center absolute w-[160px] h-[160px] bg-[#F2F2F2] left-0 top-0 rounded-lg  "
          >
            <img
              id="skillss-image"
              className="w-3/4 h-3/4"
              src="/image/research 1.png"
            />
            <div id="skillss-text" className=" ">
              User research
            </div>
          </div>
          <div
            id="skilss-mockup"
            className="grid grid-cols-1 gap-[0.5px] place-items-center absolute w-[160px] h-[160px] bg-[#F2F2F2] top-0 right-0 rounded-lg  "
          >
            <img className=" w-3/4 h-3/4" src="/image/web-design (1) 1.png" />
            <div className="">Mockup</div>
          </div>
          <div
            id="skilss-wireframe"
            className="  grid grid-cols-1 gap-[0.5px] place-items-center absolute w-[160px] h-[160px] bg-[#F2F2F2] bottom-0 left-0 rounded-lg "
          >
            <img className="w-3/4 h-3/4" src="/image/web-design 2.png" />
            <div className="">Wireframe</div>
          </div>
          <div
            id="skilss-prototype"
            className=" grid grid-cols-1 gap-[0.5px] place-items-center absolute w-[160px] h-[160px] bg-[#F2F2F2] bottom-0 right-0 rounded-lg "
          >
            <img
              className="w-3/4 h-3/4"
              src="/image/prototype (1) 1.png"
            />
            <div className="">Prototype</div>
          </div>
        </div>
      </div>
      {/* กล่อง2 */}
      <div id="saly" className=" w-full h-11/12">
        <img className=" w-11-12  " src="/image/Saly-10.png" />
      </div>
      {/* กล่อง3 */}
      <div
        id="aboutme"
        className=" w-full h-11/12 flex-col   text-left space-y-2"
      >
        <div
          id="aboutme-title"
          className=" w-full text-sm text-[#4275FA] font-medium "
        >
          ABOUT ME
        </div>
        <div
          id="aboutme-job-name"
          className="w-full text-xl font-semibold  text-[#2E2D56]"
        >
          Front-End developer
        </div>
        <div
          id="aboutme-detail"
          className="w-full text-xs text-[#5F5E79] font-normal "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa autem
          beatae numquam facere deleniti est, nulla perferendis hic nobis quas
          consectetur at. Facere provident at consequuntur aliquam a itaque
          aspernatur?
        </div>
        <div id="aboutme-hobby" className="">
          <div
            id="aboutme-title"
            className="w-full text-sm text-[#2E2D56] py-3 font-semibold"
          >
            My Hobby
          </div>
          <div
            id="aboutme-lits"
            className=" grid grid-cols-3 gap-[0.5px] place-items-start  "
          >
            <div id="hobby-movie" className="grid grid-cols-2 gap-[0.5px]">
              <img className="" src="/image/clapper board.png" />
              <div className=" text-xs text-[#5F5E79] font-medium ">Movie</div>
            </div>
            <div id="hobby-travel" className="grid grid-cols-2 gap-[0.5px]">
              <img className="" src="/image/metro.png" />
              <div className=" text-xs  text-[#5F5E79] font-medium ">
                Travel
              </div>
            </div>
            <div id="hobby-photo" className="grid grid-cols-2 gap-[0.5px]">
              <img className="" src="/image/photo.png" />
              <div className=" text-xs text-[#5F5E79] font-medium ">Photo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutmePage;
