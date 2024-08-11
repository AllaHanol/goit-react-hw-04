import axios from "axios";

const API_KEY =
  "YFz5kTWwkf2PDqA34YI89-dAWpCDJlE3WNOh_4qhBOo";
axios.defaults.baseURL =
  "https://api.unsplash.com";

axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

export const getPhotos = async (
  query,
  page,
) => {
  const { data } = await axios.get(
    `/search/photos?client_id=${API_KEY}&query=${query}&page=${page}`,
  );
  console.log(data);
  return data;
};
