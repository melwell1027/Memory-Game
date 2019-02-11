import React from "react";

export default function Tile(props) {
    return (
        <div className="tile" onClick={() => props.handleTileClick(props.id)}>
            {props.char}
            <div className="img-container">
                <img alt={props.image.replace(".jpg", "")} src={require("../photos/" + props.image)} />
            </div>
        </div>
    )
}