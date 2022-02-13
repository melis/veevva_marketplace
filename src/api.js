import axios from "axios";

class Api {
  url = "http://pro01/api/api";

  baseUrl = "http://pro01";

  async getNewProducts() {
    try {
      const { data } = await axios.get(`${this.url}/list/productsnew`);

      return data;
    } catch (e) {
      return {
        error: e,
      };
    }
  }

  async getBestSellers() {
    try {
      const { data } = await axios.get(`${this.url}/list/bestsellers`);

      return data;
    } catch (e) {
      return {
        error: e,
      };
    }
  }

  async getCategories() {
    try {
      const { data } = await axios.get(`${this.url}/list/category`);

      return data;
    } catch (e) {
      return {
        error: e,
      };
    }
  }

  async getToptSellers() {
    try {
      const { data } = await axios.get(`${this.url}/list/topsellers`);

      return data;
    } catch (e) {
      return {
        error: e,
      };
    }
  }
}
export default new Api();
