import React, { SyntheticEvent } from 'react'

interface Props {
    onPortfolioDelete: (e: SyntheticEvent) => void;
    portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
    return (
        <div>
            <form onSubmit={onPortfolioDelete}>
                <input hidden={true} value={portfolioValue} />
                <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-[#A03B35] hover:text-[#A03B35] hover:bg-white border-[#A03B35]">
                    X
                </button>
            </form>
        </div>
    )
}

export default DeletePortfolio