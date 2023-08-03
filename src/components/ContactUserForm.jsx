import React, { useState } from "react";

function ContactUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`"name": ${name},
   "email": ${email},
    "message": ${message}`);
  };

  return (
    <form
      className=" w-full text-left space-y-5 pt-10 pl-4 "
      onSubmit={handleSubmit}
    >
      <div className=" space-y-2">
        <label>
          Name :
          <input
            id="name"
            className=" w-full border-2 border-solid rounded-lg border-gray-400 text-gray-400 bg-white   "
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="">
        <label>
          Email :
          <input
            id="email"
            className=" w-full border-2 border-solid rounded-lg border-gray-400 text-gray-400 bg-white   "
            name="email"
            type="text"
            placeholder="Enter email here"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="">
        <label>
          Message :
          <input
            id="message"
            className=" w-full border-2 border-solid rounded-lg border-gray-400 text-gray-400 bg-white "
            name="message"
            type="text"
            placeholder="Enter message here"
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>

      <div className="">
        <button
          className="w-[200px] h-[53px] border-2 border-solid bg-[#4175FA] rounded-full text-white font-medium  hover:bg-sky-400  "
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactUserForm;
