import { Product } from "@common/types/product";
import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./ProductCard.module.css";
interface Props {
  product: Product;
}

const placeholderImage = "/product-image-placeholder.svg";

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a className={s.root}>
        <div className={s.productBg}></div>
        <div className={s.productTag}>
          <h3 className={s.productTitle}>
            <span>{product.name}</span>
          </h3>
          <span className={s.productPrice}>
            {product.price.value} {product.price.currencyCode}
          </span>
        </div>
        {product.images && (
          <Image
            className={s.productImage}
            src={product.images[0].url ?? placeholderImage}
            height={540}
            width={540}
            quality="85"
            layout="responsive"
            alt={product.name ?? "Product Image Text"}
          />
        )}
      </a>
    </Link>
  );
};

export default ProductCard;