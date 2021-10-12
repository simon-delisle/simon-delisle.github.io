import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Latest Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/california_housing.jpg'
              text='Estimation of the Median Housing Price in California Districts.'
              label='EDA  ||  Feature Engineering  ||  Model Explainability'
              path='https://crypto--dashboard.herokuapp.com/'
            />
            <CardItem
              src='images/img-12.jpg'
              text='A Dash Application to Vizualize up to Date Price and Social Media Activity related to Popular Cryptocurrencies.'
              label='Data Scaping  ||   Dash  ||  Bootstrap  ||  Plotly  ||  EDA'
              path='https://crypto--dashboard.herokuapp.com/'
            />
            <CardItem
              src='images/img-13.jpg'
              text='Moneyball - A Brief Description of the Moneyball Strategy Popularised in the Book and Movie of the same Name.'
              label='Data Mining  ||  Data Preprocessing ||  EDA  ||  Storytelling'
              path='https://moneyball2002.herokuapp.com/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/AI_TicTacToe.jpg'
              text='Play Against my Unbeatable Tic-tac-toe Bot and Vizualize its Decision Process.'
              label='Javascript  ||  HTML  ||  CSS  ||  Game Theory'
              path='https://simon-delisle.github.io/Minimax-TicTacToe/'
            />
            <CardItem
              src='images/ab_testing.jpg'
              text='A Notebook that Explores the Results of an A/B Test.'
              label='Statistics'
              path='https://nbviewer.jupyter.org/github/simon-delisle/Statistical-Experiments-and-Signficance-Testing/blob/main/Script.ipynb'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
