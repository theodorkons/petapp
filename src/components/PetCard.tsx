import { findCategory } from "../utils/helpers";
import { Status } from "../types";

interface Props {
  name: string;
  category: string;
  status: Status;
}

export const colors = {
  available: "bg-[#A5C882]",
  pending: "bg-[#5A9EA8]",
  sold: "bg-[#E78872]",
};

export default function PetCard({ name, category, status }: Props) {
  category = findCategory(name, category);
  name = !name || name === "" ? "unknown" : name;
  return (
    <div className="bg-[#F8F5E4] rounded-lg pt-4 w-[10rem] text-center shadow-lg h-full flex flex-col justify-between">
      <div
        className={`${colors[status]} rounded-full p-4 max-w-[6rem] mx-auto`}
      >
        <img
          src={`/icons/${category}.png`}
          alt="cat icon"
          className="w-full h-full"
        />
      </div>

      <div className="p-3 rounded-lg flex flex-col flex-grow">
        <p className="text-[#3D3D3D] font-semibold text-lg overflow-hidden pb-2">
          {name}
        </p>

        <div
          className={`${colors[status]} text-white w-fit px-4 py-1 my-2 mx-auto rounded-xl text-sm capitalize mt-auto`}
        >
          {status}
        </div>
      </div>
    </div>
  );
}
