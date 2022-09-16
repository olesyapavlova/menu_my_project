import { useState } from 'react';
import { discount } from './discount';
import React from 'react';
import './App.css';
import arrow_right from './arrow_right1.png';
import arrow_left from './arrow_left.png';


function Slides() {
    const [dis_count, setDiscount] = useState(0);
    const {id, image, purpose} = discount[dis_count];
    const previousDiscount = () => {
        setDiscount((dis_count => {
        dis_count --;
        if (dis_count < 0) {
            return discount.length-1;
        }
        return dis_count;
        }))
    }
  

  const nextDiscount = () => {
    setDiscount((dis_count => {
        dis_count ++;
      if (dis_count > discount.length-1) {
        dis_count = 0;
      }
      return dis_count;
    }))
  }

  return (
    <div className="discountContainer">
        <div>
            <button className="discountBtn" onClick={previousDiscount}><img src={arrow_left} height="160px" alt="previous"/></button>
        </div>
        <div>
            <img src={image} width="700px" height="160px" alt="discount"/>
        </div>      
        <div>
            <h1> {purpose}</h1>
        </div>           
        <div>
            <button  className="discountBtn" onClick={nextDiscount}><img src={arrow_right} height="160px" alt="next"/></button>
        </div>
    </div>
  );
}

export default Slides;
