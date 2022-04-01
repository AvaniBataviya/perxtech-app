import axios from "axios";

const baseURL = "https://api.github.com/users/";

export const get = (url, params) => {
  return axios
    .get(baseURL + url, {
      params,
    })
    .then((response) => response.data)
    .catch((error) => {
      const { response } = error;
      if (error && response) {
        const { message } = response.data;
        alert(message ? message : 'Some thing went wrong!');
      }
    });
};

const getAllRepositories = (userName) => get(`${userName}/repos`);
const getAllOrganizations = (userName) => get(`${userName}/orgs`);

export {
  getAllRepositories,
  getAllOrganizations
};