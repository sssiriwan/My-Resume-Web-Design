function Skill(props) {
  return (
    <div
      id="skill"
      className=" relative w-[350px] h-[200px]  border-solid border-2 border-[#6D6D6D] rounded-tr-[50px] "
    >
      <img
        id="skill-image"
        className=" absolute left-6 -top-10 w-[100px] "
        src={props.image}
      />
      <div
        id="skill-name"
        className=" w-full text-sm text-[#2E2D56] py-3 font-semibold pt-14 pl-4"
      >
        {props.name}
      </div>
      <div
        id="skill-detail"
        className="w-11/12 text-xs text-[#5F5E79] font-normal pl-4 "
      >
        {props.detail}
      </div>
    </div>
  );
}

export default Skill;
