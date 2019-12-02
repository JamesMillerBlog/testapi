import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    fetch('https://api.sportradar.us/hockey-t1/ice/en/schedules/2016-12-05/schedule.xml?api_key={ne8c9ygtz9ne7jkw54vy3kgj}')
    // fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then((data) => {
        console.log(data);
      })
      .catch(console.log)
    console.log("mounted");
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
