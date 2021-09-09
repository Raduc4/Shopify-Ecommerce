import { ImageEdge, Product as ShopifyProduct } from "../schema";

import { Product } from "@common/types/product";

export function normalizeImages({ edges }: { edges: ImageEdge[] }) {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
    };
  });
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    images: normalizeImages(imageConnection),
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),

    ...rest,
  };
  return product;
}
