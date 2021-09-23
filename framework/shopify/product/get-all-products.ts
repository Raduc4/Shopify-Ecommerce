import { normalizeProduct, getAllProductsQuery } from "../utils";

import { ProductConnection } from "../schema";

type ReturnType = {
  products: ProductConnection;
};

import { Product } from "@common/types/product";
import { ApiConfig } from "@common/types/api";

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<ReturnType>({
    query: getAllProductsQuery,
  });

  const products =
    data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
    [];
  return products;
};

export default getAllProducts;
