import { useQuery } from "react-query";
import { getQueryClient } from ".";
import { getCart, getUserCarts } from "../api/cart.api";
const NAME_KEY = "cart";
const INIT_DATA = {
  products: [],
};
export const useCart = (cartId) => {
  return useQuery({
    queryKey: [NAME_KEY, cartId],
    queryFn: () => {
      let preData = localStorage.getItem(NAME_KEY);
      try {
        if (preData) {
          preData = JSON.parse(preData);
        }
      } catch (error) {
        preData = INIT_DATA;
      }

      // setTimeout(() => {
      getCart(cartId).then((res) => {
        getQueryClient().setQueryData([NAME_KEY, cartId], res);
        localStorage.setItem(NAME_KEY, JSON.stringify(res));
      });
      // }, 5000);
      return new Promise((resolve) => {
        resolve(preData);
      });
    },
    initialData: INIT_DATA,
    refetchOnWindowFocus: false,
  });
};

export const deleteItemCart = (cartId, productId) => {
  const _data = getQueryClient().getQueryData([NAME_KEY, cartId]);
  _data.products = _data.products.filter(
    (product) => product.productId !== productId
  );
  getQueryClient().setQueryData([NAME_KEY, cartId], _data);
  localStorage.setItem(NAME_KEY, JSON.stringify(_data));
};

export const addProductToCart = (cartId, productId, quantity) => {
  const _data = getQueryClient().getQueryData([NAME_KEY, cartId]);
  console.log("data collection", _data);
  const product = _data.products.find((item) => item.productId === productId);

  if (product) {
    product.quantity += quantity;
  } else {
    _data.products.push({ productId, quantity });
  }

  getQueryClient().setQueryData([NAME_KEY, cartId], _data);
  localStorage.setItem(NAME_KEY, JSON.stringify(_data));
};

export const updateProductToCart = (cartId, productId, values) => {
  const _data = getQueryClient().getQueryData([NAME_KEY, cartId]);

  let product = _data.products.findIndex(
    (item) => +item.productId === +productId
  );
  if (product >= 0) {
    _data.products[product] = {
      ..._data.products[product],
      ...values,
    };
  }
  getQueryClient().setQueryData([NAME_KEY, cartId], _data);
  localStorage.setItem(NAME_KEY, JSON.stringify(_data));
};
