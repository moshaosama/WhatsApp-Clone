type useProfileType = {
  statusbar: string;
  message: string;
  DataResult: {
    About: string;
    Image: string;
    id: number;
    phoneNumber: string;
    userName: string;
  }[];
};

const useProfile = () => {
  const DataProfile: useProfileType = JSON.parse(
    window.localStorage.getItem("user")!
  );

  const dataUser = DataProfile?.DataResult[0];

  return { DataProfile, dataUser };
};

export default useProfile;
