import React from 'react';
//import logo from './logo.svg';
import './App.css';

import images from "./images.json"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import CardWrap from "./components/CardWrap";


let clickedCards = [];
let message = "Click on an image to begin!";
let score = 0;
let highscore = 0;

class App extends React.Component {
  state = {
    images,
    clickedCards,
    score,
    highscore,
    message
  };
//Fisher-Yates shuffle from https://javascript.info/task/shuffle
  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  handleClick = id => {
    if (clickedCards.includes(id)) {
      score = 0;
      message = "You guessed incorrectly! Game over!";
      clickedCards = [];
    } else {
      clickedCards.push(id);
      score += 1;
      message = "You guessed correctly!";
      if (score > highscore) {
        highscore = score;
        message = "You guessed correctly and beat your high score! ";
      }
    }
    this.shuffle(images);
    this.setState({ images, score, highscore, message });
  };
  render() {
    return (
      <div className="App">
        <Navbar score={score} highscore={highscore} message={message}></Navbar>
        <CardWrap>
          {this.state.images.map(images => (
            <Cards
              key={images.id}
              image={images.image}
              name={images.name}
              id={images.id}
              handleClick={this.handleClick}
            />
          ))}
        </CardWrap>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
