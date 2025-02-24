import React from "react";
import { Status } from "../types";
interface Props {
  status: Status;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  active: boolean;
  className?: string;
}

export default function Button({ status, onClick, active, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={`py-2 w-[8rem] rounded-3xl shadow-md cursor-pointer transition-all duration-300 capitalize ${
        active ? "scale-105 -translate-y-1 shadow-lg font-semibold" : ""
      } ${className}`}
    >
      {status}
    </button>
  );
}
