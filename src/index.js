import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

console.log('REACT');

const App = () => {
  console.log('Soy el component APP');
  return <p>Hola soy un component</p>;
}

const Titulo = () => {
  const name = 'HOUSE';
  console.log('Soy el component Titulo');

  return (<h1>CODER {name} - CLASE 1</h1>)
}

const Description = () => <p>Esta funcion esta en sugar syntax</p>

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      <Titulo />
      <Description />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
