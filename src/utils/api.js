import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    id: "kJQP7kiw5Fk",
    hl: "en",
    gl: "US",
  },
  headers: {
    "x-rapidapi-key": "294c214af5msh5791cf3bb8201fap1b0ab2jsn755dc9be6cb2",
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
