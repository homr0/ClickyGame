import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header'
import Wrapper from './components/Wrapper';
import './App.css';

class App extends React.Component {
  state = {
    status: "Click an image to begin.",
    highScore: 0,
    score: 0
  };

  setScore = correct => {
    if(correct) {
      this.setState({score: this.state.score + 1});

      if(this.state.score > this.state.highScore) this.setState({highScore: this.state.score});

      this.setState({status: "You guessed correctly!"});
    } else {
      this.setState({score: 0});
      
      this.setState({status: "You guessed incorrectly!"});
    }
  }

  render() {
    return (
      <>
        <Header status={this.state.status} score={this.state.score} highScore={this.state.highScore} />
        <Wrapper>

        </Wrapper>
      </>
    );
  }
}

export default App;
