import React from "react";
import "./style.css";
import banner from './pokemon-banner.jpg';

function Header(props) {
  return (
    <header className="navbar-fixed">
      <nav>
        <div id="title" className="nav-wrapper white">
          <a href="/" className="brand-logo center red-text text-darken-3">Pokemon Clicky Game</a>
        </div>
      </nav>

      <div id="scores" className="row red accent-4 white-text">
        <div className="col s6">
          <h2 className="center status">{props.status}</h2>
        </div>

        <div className="col s6">
          <div className="row">
            <div className="col s12 m6">
              <h2 className="score right">Score: {props.score}</h2>   
            </div>

            <div className="col s12 m6">
              <h2 className="high-score right">High Score: {props.highScore}</h2>
            </div>
          </div>
        </div>
      </div>

      <div id="banner">
        <div className="parallax-container">
          <div className="parallax center">
            <img src={banner} alt="Banner" />
          </div>
        </div>

        <div id="instructions" className="row">
          <div className="col s12 offset-m3 m6">
            <h2 className="center">Instructions</h2>

            <ol>
              <li>Click on an image.</li>
              <li>The positions of the images on the board will then be shuffled.
                <ul>
                  <li>If the image <em>has not been clicked before</em>, your score will increase by 1.</li>
                  <li>If the image <em>has been clicked before</em>, you <strong>lose</strong> the game.</li>
                </ul>
              </li>
              <li>If you lose the game, your score is reset to 0.</li>
              <li>If you have guessed all of the images correctly, the board will reset with a new set of images.</li>
            </ol>
          </div>
        </div>
      </div>
    </header>
    );
}

export default Header;