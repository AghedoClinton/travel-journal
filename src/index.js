import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import data from './data';
import Nav from './nav'



function Final(){
  const element = data.map(function(cardData){
      return(<Card 
        cardData={cardData} />)})
      
      return(<div>
      {element}
      </div>)
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav /><Final />
  </React.StrictMode>
);

reportWebVitals();
