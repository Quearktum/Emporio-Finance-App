import React, { JSX } from 'react';
import './Card.css';
import { compileFunction } from 'vm';
import { CompanySearch } from '../../company';

interface Props {
    id : string;
    searchResult: CompanySearch;
}

const Card: React.FC<Props> = ({ id, searchResult}: Props): JSX.Element => {
    return (
        <div className='card'>
            <img
                alt="Company Logo"
            />
            <div className='details'>
                <h2>{searchResult.name} ({searchResult.symbol})</h2>
                <p>{searchResult.currency}</p>
            </div>
            <p className='infon'>{searchResult.exchange} - {searchResult.exchangeFullName}</p>
        </div>
    )
}

export default Card;