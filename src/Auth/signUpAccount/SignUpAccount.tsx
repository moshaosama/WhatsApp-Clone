import { Link, useNavigate } from "react-router";
import LinksAccount from "../Components/LinksAccount";
import { useState } from "react";

const SignUpAccount = () => {
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const Navigate = useNavigate();
  const handleClick = async () => {
    await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        window.localStorage.setItem("user", JSON.stringify(data));
        Navigate("/");
      });
  };
  return (
    <div className="flex justify-center my-40   h-[90.4vh]">
      <div className="bg-white w-[40pc] h-fit p-6 rounded-2xl border-[2px]">
        <div className="flex flex-col items-center gap-4">
          <p className="text-2xl font-bold">Enter phone number</p>
          <p className="text-lg text-gray-600">
            Select a country and enter your phone number.
          </p>
        </div>
        <form className="flex flex-col items-center justify-center my-5">
          <input
            type="number"
            placeholder="Enter Your Number..."
            name="phoneNumber"
            className="border-[1px] w-96 p-3 rounded-full"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPhoneNumber(e.target.value)
            }
          />
        </form>
        <button
          onClick={handleClick}
          className="bg-[#008069] my-6 px-8 py-2 text-white hover:bg-[#7ddbc8] transition-all duration-200 cursor-pointer rounded-full"
        >
          Next
        </button>
        <Link to={"/account"}>
          <LinksAccount Title="Log in with QR code" />
        </Link>
      </div>
    </div>
  );
};

export default SignUpAccount;
