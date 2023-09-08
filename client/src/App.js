// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import { useEffect } from "react";
import { useState } from 'react';

function App() {
  const [text,setText]=useState('')
  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((j) => {console.log(j)
        setText(j.message)});
  }, []);

  return <h1>Hello from React! {text}</h1>;
}

export default App;
