import { IoMdAddCircleOutline } from "react-icons/io";
import InputForm from "../Atoms/InputForm";

const Channels = () => {
  return (
    <div className="w-96 p-3">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Channels</h1>
        <div className="flex items-center gap-5">
          <IoMdAddCircleOutline className="text-xl text-gray-500 cursor-pointer" />
        </div>
      </div>
      <InputForm />
      <div className="mt-3">
        <h1 className="text-center text-red-400">you don't have any channel</h1>
      </div>
    </div>
  );
};

export default Channels;
