type useProfileType = {
  statusbar: string;
  message: string;
  result: {
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

  const dataUser = DataProfile?.result[0];

  return { DataProfile, dataUser };
};

export default useProfile;
