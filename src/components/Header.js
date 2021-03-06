import React from "react";

export default function Header(props) {
    return (
        <header className="inner-container">
            <div>Game of Thrones Memory Game</div>
            <div>{props.message}</div>
            <div>Current Score: {props.currentScore} | Top Score: {props.topScore}</div>
        </header>
    );
}