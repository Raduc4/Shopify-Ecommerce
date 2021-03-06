import { Product } from "@common/types/product";
import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./ProductCard.module.css";
interface Props {
  product: Product;
  variant?: "simple" | "slim";
}

const placeholderImage = "/product-image-placeholder.svg";

const ProductCard: FC<Props> = ({ product, variant = "simple" }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a className={s.root}>
        {variant === "slim" ? (
          <>
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <span className="bg-black text-white p-3 font-bold text-xl ">
                {product.name}
              </span>
            </div>
            {product.images && (
              <Image
                className={s.productImage}
                src={product.images[0].url ?? placeholderImage}
                height={320}
                width={320}
                quality="85"
                layout="fixed"
                alt={product.name ?? "Product Image Text"}
              />
            )}
          </>
        ) : (
          <>
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
          </>
        )}
      </a>
    </Link>
  );
};

export default ProductCard;
