import React, {useState} from 'react';
import { ImageSelector } from '..';
import x from '../../images/icon-close.svg';


const Lightbox = (props) => {
   
  return (
    <section className={`app__product-images-lightbox ${props.show ? "lightShow" : "lightHide"}`}>
        <img src={x} alt="close the lightbox" />
        
    </section>
  )
}

export default Lightbox