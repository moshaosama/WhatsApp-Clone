import HeaderPage from "../Atoms/HeaderPage";
import InputForm from "../Atoms/InputForm";

const Channels = () => {
  return (
    <div className="w-96">
      <HeaderPage
        Title={"Channels"}
        ActiveIconAdd={true}
        ActiveIconDetails={false}
      />

      <InputForm />
      <div className="mt-3">
        <h1 className="text-center text-red-400">you don't have any channel</h1>
      </div>
    </div>
  );
};

export default Channels;
