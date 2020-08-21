import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  function testApi() {
    fetch("http://localhost:9000/api")
      .then(res => {
        console.log(res)
        alert(res)
      })
      .catch(err => {
        alert(err)
      })
  }

  return (
    <button onClick={testApi}>Click Me!</button>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <TestApi/>
    // </div>
  );
}

export default App;
