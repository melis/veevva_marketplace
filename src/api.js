import axios from "axios";

class Api {
  url = "http://pro01/api/api";

  baseUrl = "http://pro01";

  async getNewProducts() {
    try {
      const { data } = await axios.get(`${this.url}/list/productsnew`);
      if (!data.success) {
        throw new Error("Some error!");
      }
      return data;
    } catch (e) {
      return {
        error: e,
      };
    }
  }

  async getBrands() {
    try {
      const { data } = await axios.get(`${this.url}/list/brand`);
      if (!data.success) {
        throw new Error("Some error!");
      }
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
      if (!data.success) {
        throw new Error("Some error!");
      }
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
      if (!data.success) {
        throw new Error("Some error!");
      }
      return data.category;
    } catch (e) {
      return {
        error: e,
      };
    }
  }

  async getToptSellers() {
    try {
      const { data } = await axios.get(`${this.url}/list/topsellers`);
      if (!data.success) {
        throw new Error("Some error!");
      }
      return data;
    } catch (e) {
      return {
        error: e,
      };
    }
  }
}
export default new Api();
