import { useQuery } from "react-query";
import { getProducts } from "../api/product.api";
const INIT_DATA = {
  title: "",
  price: 0,
  image: "",
  description: "",
  category: "",
};
export const useProduct = (productId) => {
  return useQuery({
    queryKey: ["products", productId],
    queryFn: () => {
      return getProducts(productId)
    },
    refetchOnWindowFocus: false,
    initialData: INIT_DATA,
  });
};
