import { RefObject } from "react";
import { HiCheck } from "react-icons/hi";
import { MdModeEditOutline } from "react-icons/md";

type HandlingDataProps = {
  State: boolean;
  setState: () => void;
  Value: string;
  Title: string;
  Text: string;
  InputRef: RefObject<HTMLInputElement | null>;
};

const HandlingData = ({
  State,
  setState,
  Value,
  Title,
  Text,
  InputRef,
}: HandlingDataProps) => {
  return (
    <>
      {State ? (
        <div className="mt-10 bg-gray-100 flex flex-col justify-between h-24 p-3">
          <h1 className="text-[#008069]">{Title}</h1>
          <div className="flex items-center justify-between">
            <input
              type="text"
              value={Value}
              className="w-full border-b-2 border-green-500"
              ref={InputRef}
            />
            <HiCheck
              className="text-gray-400 text-2xl cursor-pointer"
              onClick={setState}
            />
          </div>
        </div>
      ) : (
        <div className="mt-10 bg-gray-100 flex flex-col justify-between h-24 p-3">
          <h1 className="text-[#008069]">{Title}</h1>
          <div className="flex items-center justify-between">
            <h1>{Text}</h1>
            <MdModeEditOutline
              className="text-gray-400 text-2xl cursor-pointer"
              onClick={setState}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HandlingData;
