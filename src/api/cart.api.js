import axios from "axios";

const URL = "https://fakestoreapi.com/";

export const getUserCarts = async (userId) => {
  try {
    const data = await axios.get(`${URL}carts/user/${userId}`);
    console.log('recivinedo', data.data)
    return data.data;
  } catch (error) {
    return [];
  }
};
export const getCart = async (cartId) => {
  try {
    const data = await axios.get(`${URL}carts/${cartId}`);
    console.log('recivinedo', data.data)
    return data.data;
  } catch (error) {
    return [];
  }
};
/**
 *
 * @param {*} userId
 * @param {Array<{ productId: number, quantity: number }>}  products
 * @param {string} date - La fecha en formato 'YYYY-MM-DD'.
 * @returns boolean
 */
export const addProductsToCart = async (userId, products, date) => {
  try {
    const data = await axios.post(`${URL}carts`, {
      userId,
      date,
      products,
    });

    return data.data.id !== undefined && data.data.id != 0;
  } catch (error) {
    return false;
  }
};

export const removeProductFromCart = async (userId, productId) => {
  try {
    const data = await axios.delete(
      `${URL}carts/user/${userId}/product/${productId}`
    );
    return data.data;
  } catch (error) {
    return false;
  }
};
