import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './App';
import reportWebVitals from './reportWebVitals';
import data from './data';
import Title from './nav'



function Final(){
  const element = data.map(function(nav){
      return(<Nav 
      navs={nav} />)})
      
      return(<div>
      {element}
      </div>)
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Title /><Final />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
