import ContactUserForm from "../components/ContactUserForm";

function ContactmePage() {
  return (
    <div id="app-wrapper-contact" className=" w-full  ">
      <div id="section-title" className="py-2">
        <p className=" text-sm text-[#4275FA] font-medium py-2">CONTACT ME</p>
        <p className="text-xl font-semibold  text-[#2E2D56]">Get In Touch</p>
      </div>
      <div className="grid gap-4 grid-cols-2">
        {/* กล่องซ้าย */}
        <div
          id="contact-information"
          className=" bg-local w-full h-[450px] rounded-r-[30px]  "
        >
          <div className=" w-full pt-6 pl-16 text-left space-y-4">
            <div
              id="contact-information-title"
              className="text-sm font-semibold  text-[#ffffff]"
            >
              Contact Information
            </div>
            <div
              id="contact-information-message"
              className=" w-2/3 text-sm font-light  text-[#ffffff]"
            >
              Have some project? or maybe just want to say hello? I’d love to
              hear from you
            </div>

            <div
              id="contact-information-name"
              className=" w-1/6 grid  grid-cols-2 space-x-1"
            >
              <img src="..\src\image\account.png" />
              <p className="text-sm font-semibold  text-[#ffffff]">
                Siriwan Suankaew
              </p>
            </div>
            <div
              id="contact-information-phone"
              className=" w-1/6 grid  grid-cols-2 space-x-1"
            >
              <img src="..\src\image\call.png" />
              <p className="text-sm font-semibold  text-[#ffffff]">
                0836499933
              </p>
            </div>
            <div
              id="contact-information-email"
              className=" w-1/6  grid  grid-cols-2 space-x-1 "
            >
              <img src="..\src\image\message.png" />
              <p className="text-sm font-semibold  text-[#ffffff]">
                siriwan9933@gmail.com
              </p>
            </div>

            <div
              id="contact-information-social-link"
              className="grid  grid-cols-4 space-x-1 pt-14"
            >
              {/* map ตรงนี้ */}
              <div id="instagram" className="">
                <img src="..\src\image\Instagram.png" />
              </div>
              <div id="Twitter" className="">
                <img src="..\src\image\Twitter.png" />
              </div>
              <div id="Facebook" className="">
                <img src="..\src\image\Facebook.png" />
              </div>
              <div id="github" className=" w-[40px] h-[40px] ">
                <img src="..\src\image\github.png" />
              </div>
            </div>
          </div>
        </div>
        {/* กล่องขวา */}
        <div>
          <ContactUserForm />
        </div>
      </div>
    </div>
  );
}

export default ContactmePage;
