function SkillPage() {
  return (
    <div id="app-wrapper-skill" className=" w-full">
      <div id="section-title" className=" py-2 pb-12">
        <p className=" text-sm text-[#4275FA] font-medium py-2">What I Do</p>
        <p className="text-xl font-semibold  text-[#2E2D56]">Specializing In</p>
      </div>
      <div id="skill-list" className=" w-full grid gap-x-8 gap-y-14 grid-cols-3 place-items-center text-left ">
        {/* ตรงนี้อยาก.mapแต่เหมือนจะไม่ทันถ้าเวลาเหลือจะกลับมาแก้อันนี้ */}
        <div id="skill" className=" relative w-[350px] h-[200px]  border-solid border-2 border-[#6D6D6D] rounded-tr-[50px] ">
          <img id="skill-image" className=" absolute left-6 -top-10 w-[100px] " src="/image/Frame 1.png" />
          <div id="skill-name" className=" w-full text-sm text-[#2E2D56] py-3 font-semibold pt-14 pl-4">HTML & CSS.</div>
          <div id="skill-detail" className="w-11/12 text-xs text-[#5F5E79] font-normal pl-4 ">
            mollis nunc sed id semper risus in hendrerit gravida rutrum quisque
            non tellus orci ac
          </div>
        </div>
        <div id="skill" className=" relative w-[350px] h-[200px]  border-solid border-2 border-[#6D6D6D] rounded-tr-[50px] ">
          <img id="skill-image" className=" absolute left-6 -top-10 w-[100px] " src="/image/Frame 2.png" />
          <div id="skill-name" className=" w-full text-sm text-[#2E2D56] py-3 font-semibold pt-14 pl-4">Javascript.</div>
          <div id="skill-detail" className="w-11/12 text-xs text-[#5F5E79] font-normal pl-4 ">
            mollis nunc sed id semper risus in hendrerit gravida rutrum quisque
            non tellus orci ac
          </div>
        </div>
        <div id="skill" className=" relative w-[350px] h-[200px]  border-solid border-2 border-[#6D6D6D] rounded-tr-[50px] ">
          <img id="skill-image" className=" absolute left-6 -top-10 w-[100px] " src="/image/Frame 3.png" />
          <div id="skill-name" className=" w-full text-sm text-[#2E2D56] py-3 font-semibold pt-14 pl-4">Responsive Design.</div>
          <div id="skill-detail" className="w-11/12 text-xs text-[#5F5E79] font-normal pl-4 ">
            mollis nunc sed id semper risus in hendrerit gravida rutrum quisque
            non tellus orci ac
          </div>
        </div>
        <div id="skill" className=" relative w-[350px] h-[200px]  border-solid border-2 border-[#6D6D6D] rounded-tr-[50px] ">
          <img id="skill-image" className=" absolute left-6 -top-10 w-[100px] " src="/image/Frame 4.png" />
          <div id="skill-name" className=" w-full text-sm text-[#2E2D56] py-3 font-semibold pt-14 pl-4">Testing and Debugging</div>
          <div id="skill-detail" className="w-11/12 text-xs text-[#5F5E79] font-normal pl-4 ">
            mollis nunc sed id semper risus in hendrerit gravida rutrum quisque
            non tellus orci ac
          </div>
        </div>
        <div id="skill" className=" relative w-[350px] h-[200px]  border-solid border-2 border-[#6D6D6D] rounded-tr-[50px] ">
          <img id="skill-image" className=" absolute left-6 -top-10 w-[100px] " src="/image/Frame 5.png" />
          <div id="skill-name" className=" w-full text-sm text-[#2E2D56] py-3 font-semibold pt-14 pl-4">Problem-Solving</div>
          <div id="skill-detail" className="w-11/12 text-xs text-[#5F5E79] font-normal pl-4 ">
            mollis nunc sed id semper risus in hendrerit gravida rutrum quisque
            non tellus orci ac
          </div>
        </div>
        <div id="skill" className=" relative w-[350px] h-[200px]  border-solid border-2 border-[#6D6D6D] rounded-tr-[50px] ">
          <img id="skill-image" className=" absolute left-6 -top-10 w-[100px] " src="/image/Frame 6.png" />
          <div id="skill-name" className=" w-full text-sm text-[#2E2D56] py-3 font-semibold pt-14 pl-4">Teamwork</div>
          <div id="skill-detail" className="w-11/12 text-xs text-[#5F5E79] font-normal pl-4 ">
            mollis nunc sed id semper risus in hendrerit gravida rutrum quisque
            non tellus orci ac
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillPage;
