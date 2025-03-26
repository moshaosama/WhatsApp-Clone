const useFetch = async (url: string) => {
  await fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export default useFetch;
