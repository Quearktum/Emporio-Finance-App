import React, { SyntheticEvent } from "react";
import { MdDelete } from "react-icons/md";

interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <div>
      <form onSubmit={onPortfolioDelete}>
        <input hidden={true} value={portfolioValue} />
        <button className="flex items-center justify-center w-full py-3 text-white duration-200 border-2 rounded-lg bg-[#A03B35] hover:text-[#A03B35] hover:bg-white border-[#A03B35]">
          <MdDelete className="text-xl" />
        </button>
      </form>
    </div>
  );
};

export default DeletePortfolio;
