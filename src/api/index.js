import axios from "axios";

const baseURL = "https://api.github.com/users/";

export const get = (url, params) => {
  return axios
    .get(baseURL + url, {
      params,
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

const getAllRepositories = (userName) => get(`${userName}/repos`);
const getAllOrganisations = (userName) => get(`${userName}/orgs`);

export {
  getAllRepositories,
  getAllOrganisations
};