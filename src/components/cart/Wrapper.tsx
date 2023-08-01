"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleMenu } from "@/redux/reducers/cartSlice";
import { X } from "lucide-react";
import { clsx } from "clsx";
import { CartFooter } from "./CartFooter";
import { CardProduct } from "./CardProduct";

export const Wrapper = () => {
  const dispatch = useAppDispatch();
  const { open: menu, products } = useAppSelector((store) => store.cart.value);

  const countProducts = products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  return (
    <div
      className={clsx("absolute h-screen top-0 transition-all", {
        "bg-black/70 w-screen right-0": menu === true,
        "bg-transparent w-0 -right-[100vw]": menu === false,
      })}
    >
      <div
        className={clsx(
          "w-full md:w-1/5 md:border-l md:border-stroke-color h-screen absolute top-0 z-50 bg-surface-color transition-all duration-300",
          {
            "right-[0vw] transition-all duration-700 opacity-100":
              menu === true,
            "-right-[100vw] transition-all duration-700 opacity-0":
              menu === false,
          }
        )}
      >
        <div className="relative h-full">
          <div className="flex justify-between border-b border-stroke-color p-5 md:py-9 text-text-color-primary">
            <h2>
              Seu carrinho tem{" "}
              <strong>
                {countProducts} {countProducts > 1 ? "itens" : "item"}
              </strong>
            </h2>
            <button
              onClickCapture={() => dispatch(toggleMenu())}
              className="text-close-button-color"
            >
              <X />
            </button>
          </div>

          <div className="pb-4 pt-3 px-5 space-y-3 md:space-y-9 overflow-auto h-2/3">
            {products.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
          </div>

          <div className="absolute bottom-0 w-full h-48 border-t border-stroke-color shadow-xl">
            <CartFooter />
          </div>
        </div>
      </div>
    </div>
  );
};
