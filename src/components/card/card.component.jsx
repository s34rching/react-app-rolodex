import React from "react";
import './card.style.css';

const logoSrc = 'https://robohash.org/';
const logoSet = "3";
const logoSize = '180x180';

export const Card = (props) => {
  return (
    <div className={'card-container'}>
      <img alt="user" src={`${logoSrc}${props.user.id}?set=set${logoSet}&size=${logoSize}`} />
      <h1>{props.user.name}</h1>
      <p>{props.user.email}</p>
    </div>
  )
}