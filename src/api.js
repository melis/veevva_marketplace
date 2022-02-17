import axios from "axios";

class Api {
  url = "http://pro01/api/api";

  baseUrl = "http://pro01";

  async getAllProducts(url = "?") {
    console.log(url);
    // http://pro01/api/api/list/productsall?category_id=10&brand_id=12165&pageno=1&order=brand&ordertype=DESC&cmd=search
    // http://pro01/api/api/list/productsall?cmd=search&z_price=BETWEEN&x_price=10&y_price=30
    try {
      const { data } = await axios.get(
        `${this.url}/list/productsall?cmd=search&${url.replace("?", "")}`
      );
      if (!data.success) {
        throw new Error("Some error!");
      }

      return data;
    } catch (e) {
      return {
        error: [],
      };
    }
  }

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
      return [];
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
      return [];
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
