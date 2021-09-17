import {
  ImageEdge,
  MoneyV2,
  Product as ShopifyProduct,
  ProductOption,
  ProductVariantConnection,
  SelectedOption,
} from "../schema";

import { Product } from "@common/types/product";

export function normalizeImages({ edges }: { edges: ImageEdge[] }) {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
    };
  });
}

const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2) => {
  return {
    value: +amount,
    currencyCode,
  };
};

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    priceRange,
    options,
    variants,
    ...rest
  } = productNode;

  const normalizeProductOption = ({
    id,
    name: displayName,
    values,
  }: ProductOption) => {
    const normalize = {
      id,
      displayName,
      values: values.map((value) => {
        let output: any = {
          label: value,
        };
        if (displayName.match(/colou?r/gi)) {
          output = {
            ...output,
            hexColor: value,
          };
        }
        return output;
      }),
    };
    return normalize;
  };

  const normalizeProductVariants = ({ edges }: ProductVariantConnection) => {
    return edges.map(({ node }) => {
      const { id, selectedOptions, sku, title, priceV2, compareAtPriceV2 } =
        node;
      return {
        id,
        name: title,
        sku: sku ? sku : id,
        price: +priceV2.amount,
        listPrice: +compareAtPriceV2?.amount,
        requiresShipping: true,
        options: selectedOptions.map(({ name, value }: SelectedOption) => {
          const option = normalizeProductOption({
            id,
            name,
            values: [value],
          });
          return option;
        }),
      };
    });
  };

  const product = {
    id,
    name,
    vendor,
    description,
    images: normalizeImages(imageConnection),
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    options: options
      ? options
          .filter((o) => o.name !== "Title")
          .map((o) => normalizeProductOption(o))
      : [],
    variants: variants ? normalizeProductVariants(variants) : {},
    ...rest,
  };
  return product;
}
