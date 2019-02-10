import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Tile from "./components/Tile"
import tiles from "./components/tiles"

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    message: "",
    tiles
  }

  handleTileClick = (id) => {
    // check to see if this has been clicked before
    this.state.tiles.forEach((tile) => {
      if (tile.id === id) {
        if (tile.checked === true) {
          //reset the game
          this.setState({ currentScore: 0, message: "You Lose!" });
          this.state.tiles.forEach((tile) => { (tile.checked = false) });
        } else {
          tile.checked = true;
          // update the score
          this.setState({ currentScore: this.state.currentScore + 1, message: "" });
          // if the score if greater than the top score, update the top score too
          if (this.state.currentScore >= this.state.topScore) {
            this.setState({ topScore: this.state.topScore + 1 })
          }
        }
      }
    });
    // if they've clicked the tile before, somehow randomize the tiles
    let tiles = this.state.tiles.slice(0);
    tiles.sort(() => Math.random() - 0.5);
    this.setState({ tiles })

  }
  render() {
    return (
      <div className="container">
        <Header
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <div className="game-board">
          {this.state.tiles.map((tile, i) => <Tile key={i} id={tile.id} handleTileClick={this.handleTileClick} char={tile.val} />)}
        </div>
      </div>
    );
  }
}

export default App;
