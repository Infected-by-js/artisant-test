import { useQuery } from "react-query";
import { getProducts } from "../api/ProductService";

export const useProducts = (page: number, limit: number) => {
  const requestAll = () => getProducts({ page, limit });

  const { data: products, isLoading, error } = useQuery("products", requestAll);

  return { products, isLoading, error };
};
