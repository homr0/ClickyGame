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
    board: [],
    clicked: [],
    pokemon
  };

  // Updates (and resets) the score and high score.
  updateScore = id => {
    if(id) {
      this.setState({score: this.state.score + 1});

      if(this.state.score >= this.state.highScore) this.setState({highScore: this.state.score + 1});

      this.setState({status: "You guessed correctly!"});
    } else {
      this.setState({score: 0});
      
      this.setState({status: "You guessed incorrectly!"});
    }
  };

  render() {
    return (
      <>
        <Header status={this.state.status} score={this.state.score} highScore={this.state.highScore} />
        <Wrapper>
          <div className="row">
            {this.state.pokemon.map(mon => <ImageCard
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
