import { FaLock, FaWhatsapp } from "react-icons/fa";

const LoadingHomePages = () => {
  return (
    <div className="flex flex-col h-screen items-center gap-4 justify-center">
      <FaWhatsapp className="text-gray-500 text-6xl" />
      <hr className="h-2 w-60 bg-[#C9C6C6] rounded-xl border-none" />
      <div className="text-center">
        <h1 className="text-gray-500">whatsApp</h1>
        <p className="text-gray-500 flex items-center gap-4">
          {" "}
          <FaLock className="text-sm" />
          end to end encrypted
        </p>
      </div>
    </div>
  );
};

export default LoadingHomePages;
