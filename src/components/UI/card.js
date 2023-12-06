import './card.css';
import React from 'react';

let Card = (props) =>{
    const classes=props.className + ' card';
    return <div className={classes}>{props.children}</div>
}
export default Card;