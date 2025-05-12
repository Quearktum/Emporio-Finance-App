import React, { JSX, SyntheticEvent, MouseEvent } from "react";
import "./Card.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => {
  const navigate = useNavigate();

  const handleCardClick = (e: MouseEvent<HTMLDivElement>) => {
    // Only navigate if the click wasn't on the AddPortfolio component
    if (!(e.target as Element).closest(".addportfolio")) {
      navigate(`/company/${searchResult.symbol}/company-profile`);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-between w-full max-w-[calc(100%-5rem)] p-6 my-5 mx-10 bg-white rounded-lg md:flex-row shadow-lg cursor-pointer box-border"
      key={id}
      id={id}
      onClick={handleCardClick}
    >
      <div className="flex flex-col px-10 md:flex-row md:items-center md:justify-between flex-grow">
        <p className="font-bold text-emporioSecondary">
          {searchResult.name} - {searchResult.symbol} ({searchResult.currency})
        </p>
        <p className="text-veryDarkBlue">
          {searchResult.exchange} - {searchResult.exchangeFullName}
        </p>
      </div>

      <div className="addportfolio" onClick={(e) => e.stopPropagation()}>
        <AddPortfolio
          onPortfolioCreate={onPortfolioCreate}
          symbol={searchResult.symbol}
        />
      </div>
    </div>
  );
};

export default Card;
