import { CgDetailsMore } from "react-icons/cg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { HeaderPageProps } from "../../Types/HeaderPage/HeaderPage";

const HeaderPage = ({
  Title,
  ActiveIconAdd,
  ActiveIconDetails,
}: HeaderPageProps) => {
  return (
    <div className="flex p-3 justify-between items-center">
      <h1 className="font-bold text-xl">{Title}</h1>
      <div className="flex items-center gap-5">
        {ActiveIconAdd ? (
          <IoMdAddCircleOutline className="text-xl text-gray-500 cursor-pointer" />
        ) : null}
        {ActiveIconDetails ? (
          <CgDetailsMore className="text-xl text-gray-500 cursor-pointer" />
        ) : null}
      </div>
    </div>
  );
};

export default HeaderPage;
