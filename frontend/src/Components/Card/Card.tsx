import React from 'react';
import './Card.css';

type Props = {}

const Card = (props: Props) => {
    return (
        <div className='card'>
            <img
                src="https://kpopping.com/documents/85/3/250316-aespa-NINGNING-at-SYNK-PARALLEL-LINE-ENCORE-IN-SEOUL-DAY-2-documents-9.jpeg?v=73859"
                alt="Image"
            />
            <div className='details'>
                <h2>AAPL</h2>
                <p>$120</p>
            </div>
            <p className='infon'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, enim aut? Totam exercitationem tempore at quaerat maxime velit earum ea, eveniet aut. Deserunt perspiciatis iste assumenda repudiandae suscipit quae voluptates.</p>
        </div>
    )
}   

export default Card;