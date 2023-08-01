"use client";

import { useAppSelector } from "@/redux/hooks";
import { AddCupom } from "./AddCupom";
import { ButtonCheckout } from "./ButtonCheckout";
import { useEffect, useState } from "react";

export const CartFooter = () => {
  const { products } = useAppSelector((store) => store.cart.value);
  const [total, setTotal] = useState("R$ 0.00");

  useEffect(() => {
    setTotal(() =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(
        products.reduce((acc, item) => {
          return (acc += item.price * item.quantity);
        }, 0)
      )
    );
  }, [products]);

  return (
    <footer className="p-5 w-full h-full flex flex-col gap-5 bg-surface-color">
      <div className="text-text-color-primary flex justify-between flex-1">
        <strong className="text-2xl md:text-3xl">Total: </strong>
        <div className="text-right space-y-2">
          <strong className="text-xl md:text-2xl">{total}</strong>
          <AddCupom />
        </div>
      </div>
      <ButtonCheckout />
    </footer>
  );
};
