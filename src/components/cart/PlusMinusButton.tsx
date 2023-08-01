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
          className="h-8 w-8 font-semibold rounded-md cursor-pointer border border-gray-500 text-violet-500 hover:text-gray-100 hover:border-violet-500 bg-transparent"
          onClick={() => dispatch(decrement(productId))}
          {...props}
        >
          -
        </button>
      ) : (
        <button
          className="h-8 w-8 font-semibold rounded-md cursor-pointer border border-violet-500 text-violet-500 hover:text-gray-100 hover:bg-violet-500"
          onClick={() => dispatch(increment(productId))}
          {...props}
        >
          +
        </button>
      )}
    </div>
  );
};
