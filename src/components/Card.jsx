import React from "react";

function Card(props) {
    return (
        <div className="container">
            <div className="card">
                <p className="icon">{props.emoji}</p>
                <h3 className="Content-heading">{props.name}</h3>
                <p className="Content-text">{props.meaning}</p>
            </div>
        </div>
    );
}

export default Card;
