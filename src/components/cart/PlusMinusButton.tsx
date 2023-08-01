"use client";

import { useAppDispatch } from "@/redux/hooks";
import { decrement, increment } from "@/redux/reducers/cartSlice";
import { ComponentProps } from "react";

interface PlusMinusButtonProps extends ComponentProps<"button"> {
  action?: "minus" | "plus";
  productId: number;
}

export const PlusMinusButton = ({
  action,
  productId,
  ...props
}: PlusMinusButtonProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="transition-colors">
      {action === "minus" ? (
        <button
          className="h-8 w-8 font-semibold rounded-md cursor-pointer border border-stroke-color text-brand-color-light hover:text-text-color-primary hover:border-brand-color-light bg-transparent"
          onClick={() => dispatch(decrement(productId))}
          {...props}
        >
          -
        </button>
      ) : (
        <button
          className="h-8 w-8 font-semibold rounded-md cursor-pointer border border-brand-color-light text-brand-color-light hover:text-text-color-primary hover:bg-brand-color-light"
          onClick={() => dispatch(increment(productId))}
          {...props}
        >
          +
        </button>
      )}
    </div>
  );
};
