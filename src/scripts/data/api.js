import axios from "axios";

const baseurl = "https://kitsu.io/api/edge";

class API {
  static getAll = async () => {
    const response = await axios.get(
      `${baseurl}/anime?page[limit]=12&page[offset]=0`,
    );

    if (response.data.data.length > 0) {
      return Promise.resolve(response.data);
    }
    return Promise.reject(new Error(`Data tidak ditemukan.`));
  };

  static searchAnime = async (keyword) => {
    let url = null;
    url = keyword === "" ? `${baseurl}/anime?page[limit]=12&page[offset]=0` : `${baseurl}/anime?page[limit]=12&page[offset]=0&filter[text]=${keyword}`;

    const response = await axios.get(url);

    if (response.data.data.length > 0) {
      return Promise.resolve(response.data);
    }
    return Promise.reject(
      new Error(`Data pencarian untuk "${keyword}" tidak ditemukan.`),
    );
  };

  static pagination = async (url) => {
    const response = await axios.get(`${url}`);

    if (response.data.data.length > 0) {
      return Promise.resolve(response.data);
    }
    return Promise.reject(new Error(`Data tidak ditemukan.`));
  };
}

export default API;
