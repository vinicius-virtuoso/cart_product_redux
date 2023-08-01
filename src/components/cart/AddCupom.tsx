"use client";

import { TagIcon, X } from "lucide-react";
import React, { useState } from "react";

export const AddCupom = () => {
  const [cupom, setCupom] = useState(false);
  const [textCupom, setTextCupom] = useState("");

  return (
    <>
      {cupom ? (
        <div className="flex items-center gap-2 text-sm justify-end w-full text-right">
          <TagIcon size={14} />{" "}
          <input
            type="text"
            onBlur={() => (textCupom ? null : setCupom(false))}
            autoFocus={true}
            onChange={({ target }) => setTextCupom(target.value)}
            value={textCupom}
            className="w-3/5 bg-transparent border-b-2 border-violet-400 text-zinc-100 relative outline-none pr-5 font-semibold text-sm md:text-lg"
          />
          <X
            size={16}
            className="absolute right-5 z-50 bg-zinc-950 cursor-pointer"
            onClick={() => {
              setCupom(false);
              setTextCupom("");
            }}
          />
        </div>
      ) : (
        <button
          className="text-violet-500 flex items-center gap-2 text-sm justify-end hover:text-violet-400 transition-colors w-full"
          onClick={() => setCupom(true)}
        >
          <TagIcon size={14} /> Adicionar cupom
        </button>
      )}
    </>
  );
};
