import React from 'react';
import { Link } from 'react-router-dom';
import './Carditem.css';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
          <a href={props.path}>
            <img
              className='cards__item__img'
              alt='Travel'
              src={props.src}
            />
          </a>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'><a href={props.path}> {props.text}</a></h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
