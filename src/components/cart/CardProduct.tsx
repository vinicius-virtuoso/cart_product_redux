import Image from "next/image";
import React from "react";
import { PlusMinusButton } from "./PlusMinusButton";

interface CardProductProps {
  product: {
    id: number;
    image: any;
    name: string;
    price: number;
    quantity: number;
  };
}

export const CardProduct = ({ product }: CardProductProps) => {
  return (
    <div className="w-full py-2 flex gap-3">
      <div className="w-1/4">
        <Image
          src={product.image}
          alt={product.name}
          width={100}
          height={100}
          className="overflow-hidden rounded-md"
        />
      </div>
      <div className="flex flex-1 flex-col text-zinc-300">
        <h4 className="text-xs overflow-hidden h-11" title={product.name}>
          {product.name.substring(0, 70)}
        </h4>
        <div className="flex justify-between items-center">
          <div>
            <strong className="text-zinc-100">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </strong>
          </div>
          <div className="flex items-center">
            <PlusMinusButton action="minus" productId={product.id} />
            <span className="w-7 text-center">{product.quantity}</span>
            <PlusMinusButton action="plus" productId={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
};
