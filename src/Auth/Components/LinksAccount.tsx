import { IoMdArrowDropright } from "react-icons/io";

type LinksAccountProps = {
  Title: string;
};

const LinksAccount = ({ Title }: LinksAccountProps) => {
  return (
    <div className="w-fit cursor-pointer">
      <h1 className="flex items-center gap-1 hover:text-[#25d366]">
        {Title}
        <IoMdArrowDropright />
      </h1>
      <hr className="w-full h-0.5 border-none bg-[#25d366]" />
    </div>
  );
};

export default LinksAccount;
