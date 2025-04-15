import React, { JSX } from 'react';
import './Card.css';
import { compileFunction } from 'vm';

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card: React.FC<Props> = ({ companyName, ticker, price }: Props): JSX.Element => {
    return (
        <div className='card'>
            <img
                src="https://kpopping.com/documents/85/3/250316-aespa-NINGNING-at-SYNK-PARALLEL-LINE-ENCORE-IN-SEOUL-DAY-2-documents-9.jpeg?v=73859"
                alt="Image"
            />
            <div className='details'>
                <h2>{companyName} ({ticker})</h2>
                <p>${price}</p>
            </div>
            <p className='infon'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, enim aut? Totam exercitationem tempore at quaerat maxime velit earum ea, eveniet aut. Deserunt perspiciatis iste assumenda repudiandae suscipit quae voluptates.</p>
        </div>
    )
}

export default Card;