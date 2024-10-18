import axios from "axios";
import { URL_API } from ".";

export const getProducts = async (productId) => {
  try {
    const data = await axios.get(`${URL_API}products/${productId}`);
    return data.data;
  } catch (error) {
    return null;
  }
};
