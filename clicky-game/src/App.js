import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import ImageCard from './components/ImageCard';
import pokemon from './pokemon.json';
import './App.css';

class App extends React.Component {
  state = {
    status: "Click an image to begin.",
    highScore: 0,
    score: 0,
    cleared: 0,
    board: pokemon.slice(0, 12),
    clicked: [],
    pokemon
  };

  // Updates (and resets) the score and high score.
  updateScore = id => {
    const clicked = this.state.clicked;

    if(clicked.indexOf(id) < 0) {
      clicked.push(id);

      this.setState({
        status: "You guessed correctly!",
        score: this.state.score + 1,
        clicked: clicked,
        board: this.updateBoard()
      });

      // Updates the high score.
      if(this.state.score >= this.state.highScore) this.setState({highScore: this.state.score + 1});

      // Checks if the user has won the game.
      if((this.state.score + 1) % this.state.board.length === 0) {
        const cleared = this.state.cleared + 1;

        this.setState({
          status: "You cleared " + ((cleared > 1) ? cleared + " boards.": "1 board."),
          clicked: [],
          cleared: cleared,
          board: this.newBoard()
        });
      }
    } else {
      this.setState({
        status: "You guessed incorrectly!",
        score: 0,
        clicked: [],
        cleared: 0,
        board: this.updateBoard()
      });
    }
  };

  randomizer = arr => {
    let current = arr.length;

    while(0 !== current) {
      let random = Math.floor(Math.random() * current);
      current--;

      let temp = arr[current];
      arr[current] = arr[random];
      arr[random] = temp;
    }

    return arr;
  }

  // Updates the board of displayed images.
  updateBoard = () => this.randomizer(this.state.board);

  // Sets up a new game.
  newBoard = () => this.randomizer(this.state.pokemon).slice(0, 12);

  render() {
    return (
      <>
        <Header status={this.state.status} score={this.state.score} highScore={this.state.highScore} />
        <Wrapper>
          <div className="row">
            {this.state.board.map(mon => <ImageCard
              key={mon.id}
              id={mon.id}
              name={mon.name}
              image={mon.image}
              updateScore={this.updateScore}
            />)}
          </div>
        </Wrapper>
      </>
    );
  }
}

export default App;
