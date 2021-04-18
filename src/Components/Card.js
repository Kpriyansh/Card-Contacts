import React from 'react';
import './Card.css';
import 'tachyons';

const Card = (props) => {
    return (
        <React.Fragment>
            <span className="card-component">
            
            <div className=" bg-light-yellow br3 pd3 shadow-5 grow">
                <img alt='robots' src={`https://robohash.org/${props.id}?`} />

                <div>
                     
                   <h2>{props.name}</h2>
                    <p>{props.email}</p>
                </div>
            </div>
           

            </span>

        </React.Fragment>
    );
}
export default Card;