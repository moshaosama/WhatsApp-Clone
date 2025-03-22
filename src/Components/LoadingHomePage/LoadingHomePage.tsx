import { useEffect, useRef } from "react";
import { FaLock, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router";
import style from "./LoadingHomePage.module.css";

const LoadingHomePages = () => {
  const LoadingColor = useRef<HTMLDivElement>(null);
  const Navigate = useNavigate();
  const { Container, LoadingPart, Paragraph } = style;

  useEffect(() => {
    if (LoadingColor.current) {
      LoadingColor.current.style.setProperty("width", "100%");
      setTimeout(() => {
        Navigate("/chats");
      }, 1500);
    }
  }, []);

  return (
    <div className={Container}>
      <FaWhatsapp className="text-gray-500 text-6xl" />
      {/* <hr className="h-2 w-60 bg-[#C9C6C6] rounded-xl border-none" /> */}
      <div className={LoadingPart}>
        <div
          className="h-2 w-[0%] transition-all duration-1000  bg-[#4FCE5D] rounded-xl border-none"
          ref={LoadingColor}
        ></div>
      </div>
      <div className="text-center">
        <h1 className="text-gray-500">whatsApp</h1>
        <p className={Paragraph}>
          {" "}
          <FaLock className="text-sm" />
          end to end encrypted
        </p>
      </div>
    </div>
  );
};

export default LoadingHomePages;
