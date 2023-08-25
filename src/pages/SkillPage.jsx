import Skill from "../components/skill";

function SkillPage() {
  return (
    <div id="app-wrapper-skill" className=" w-full">
      <div id="section-title" className=" py-2 pb-12">
        <p className=" text-sm text-[#4275FA] font-medium py-2">What I Do</p>
        <p className="text-xl font-semibold  text-[#2E2D56]">Specializing In</p>
      </div>
      <div
        id="skill-list"
        className=" w-full flex-col items-center justify-center lg:grid gap-x-8 gap-y-14 grid-cols-3 place-items-center text-left "
      >
       
        <Skill
          image="/image/Frame 1.png"
          name="HTML & CSS."
          detail=" mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac"
        />
        <Skill
          image="/image/Frame 2.png"
          name="Javascript."
          detail="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac"
        />
        <Skill
          image="/image/Frame 3.png"
          name="Responsive Design."
          detail="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac"
        />
        <Skill
          image="/image/Frame 4.png"
          name="Testing and Debugging"
          detail="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac"
        />
        <Skill
          image="/image/Frame 5.png"
          name="Problem-Solving"
          detail="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac"
        />
        <Skill
          image="/image/Frame 6.png"
          name="Teamwork"
          detail="mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac"
        />
      </div>
    </div>
  );
}

export default SkillPage;
