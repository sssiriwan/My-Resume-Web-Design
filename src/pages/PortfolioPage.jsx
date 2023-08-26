function PortfolioPage() {
  return (
    <div id="app-wrapper-protfolio" className=" w-full ">
      <div id="section-title" className="py-2">
        <p className=" text-sm text-[#4275FA] font-medium py-2">WHat I Do</p>
        <p className="text-xl font-semibold  text-[#2E2D56]">Specializing In</p>
        <div className="w-full grid  grid-cols-1  place-items-center">
          <div
            id="menu-protfolio  "
            className=" w-1/3 grid  grid-cols-3 gap-x-1 place-items-center text-sm text-[#2E2D56] py-3 font-semibold"
          >
            {/* ตรงนี้ในอนาคตจะใส่เป็นลิงค์แยกไปแต่ละหมวดของงาน**ถ้ามีงานเยอะนะ */}
            <button className="text-nm text-[#2E2D56]  hover:text-[#5F5E79] font-semibold">All Projects</button>
            <button className="text-nm text-[#2E2D56]  hover:text-[#5F5E79] font-semibold">Web Design</button>
            <button className="text-nm text-[#2E2D56]  hover:text-[#5F5E79] font-semibold">Web Design</button>
          </div>
        </div>
      </div>
      <div className="protfolio-list">
        {/* map ตรงนี้นะ อยากให้กดเข้าไปดูแแล้วขึ้นตัวอย่างของหน้าเว็บนั้น */}
        <div id="protfolio" className="grid lg:grid-flow-col lg:grid-rows-2 place-items-center gap-4 pb-3">
          <img className=" row-span-1 lg:row-span-2 h-full" src="/image/unsplash_qC2n6RQU4Vw.png"  />
          {}
          {/* ต้องกลับมาแก้ส่วนนี้ให้เป็นเหมือนในรูปล่างนี้ */}
          <img className=" " src="/image/card-hover.png" />
          <img className="" src="/image/unsplash_7ZWVnVSaafY.png" />
          <img className=" " src="/image/unsplash_m_HRfLhgABo.png" />
          <img className=" " src="/image/unsplash_qC2n6RQU4Vw.png" />
        </div>
        <button className=" w-[150px] h-[53px] border-2 border-solid bg-[#4175FA] rounded-full text-white font-medium  hover:bg-sky-400   ">View All</button>
      </div>
    </div>
  );
}

export default PortfolioPage;
