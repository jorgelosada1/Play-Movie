import React, { useEffect, useState } from 'react';
import { Lives } from './Components/Lives';
import { Point } from './Components/Point';
import './Sass/App.scss';

function App() {
  const movies = [
    { name: "Forrest Gump", emoji: "🏃🍫🍤" },
    { name: "The Matrix", emoji: "🕶️💊👽" },
    { name: "Titanic", emoji: "🚢❄️💔" },
    { name: "Jurassic Park", emoji: "🦖🌴🚙" },
    { name: "The Lion King", emoji: "🦁👑🌅" },
    { name: "Star Wars", emoji: "⚔️🚀🌌" },
    { name: "The Avengers", emoji: "🦸‍♂️🦸‍♀️💥" },
    { name: "Harry Potter", emoji: "⚡🧙‍♂️🔮" },
    { name: "The Terminator", emoji: "🤖🔫🕶️" },
    { name: "Indiana Jones", emoji: "🤠🔍💎" },
    { name: "Back to the Future", emoji: "⏰🚗💥" },
    { name: "The Shawshank Redemption", emoji: "🔒🔑💰" },
    { name: "The Godfather", emoji: "🍕🤵🔫" },
    { name: "The Dark Knight", emoji: "🦇♞👨‍🦯" },
    { name: "Pulp Fiction", emoji: "🍔🔫🕶️" },
    { name: "Schindler's List", emoji: "📜🚂🔴" },
    { name: "The Lord of the Rings: The Return of the King", emoji: "🧝‍♂️🧙‍♂️🗡️" },
    { name: "The Silence of the Lambs", emoji: "🔇🐑🍖" },
    { name: "Fight Club", emoji: "👊💼🚽" },
    { name: "Inception", emoji: "🌀👩‍🚀🎩" },
  ];

  const [currentMovieIn, setCurrentMovieIn] = useState(0);
  const [lives, setLives] = useState(3);
  const [points, setPoints] = useState(0);

  function addPoint(point){
    setPoints(points + point);
    setCurrentMovieIn(currentMovieIn + 1);
  }

  const handleGuess = (event) => {
    event.preventDefault();
    const userInput = event.target.elements.guess.value.trim().toLowerCase();
    const currentMovie = movies[currentMovieIn];
    if (userInput === currentMovie.name.toLowerCase()) {
      addPoint(1)
    } else {
      setLives(lives - 1);
      if (lives === 1) {
        alert(`Perdiste, te has queda sin vidas, tus puntos son: ${points}/ You lost, you have run out of lives, your score: ${points}`);
        setCurrentMovieIn(0);
        setLives(3)
        setPoints(0)
      } else {
        alert("Respuesta incorrecta, intentalo nuevamente / Wrong answer, try again)");
      }
    }
    event.target.elements.guess.value = ''; 
  };

  return (
    <div className="App">
      <div className="App__nav">
        <Lives lives={lives} />
        <Point point={points} />
      </div>
      <div className="App__container">
        <div className="App__title">Guess the movie</div>
        <div className="App__emoji">{movies[currentMovieIn].emoji}</div>
        <div className="App__formulario">
          <form onSubmit={handleGuess}>
            <input type="text" name="guess" className="App__input" autoComplete='off' />
            <button type="submit" className="App__button">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
