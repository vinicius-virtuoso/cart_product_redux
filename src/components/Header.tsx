"use client";

import React from "react";
import { ShoppingCart } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleMenu } from "@/redux/reducers/cartSlice";

export const Header = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((store) => store.cart.value);

  const countProducts = products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  return (
    <header className="flex justify-between border-b border-zinc-900 p-5 md:py-8">
      <div></div>
      <button
        className="text-gray-300 relative cursor-pointer md:text-2xl"
        onClick={() => dispatch(toggleMenu())}
      >
        {countProducts >= 1 && (
          <div className="absolute -top-3 left-2/3 -translate-x-2/3 w-4 h-4 md:w-6 md:h-6 md:-top-5 px-2 bg-violet-500 rounded-full flex items-center justify-center font-semibold">
            <span className="text-xs md:text-md text-gray-100">
              {countProducts}
            </span>
          </div>
        )}
        <ShoppingCart className="w-8 h-8" />
      </button>
    </header>
  );
};
