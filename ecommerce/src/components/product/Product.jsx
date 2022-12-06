import React, {useState} from 'react'
import { Purchase } from '..'
import product1 from '../../images/image-product-1.jpg';
import product1Thumb from '../../images/image-product-1-thumbnail.jpg';
import product2 from '../../images/image-product-2.jpg';
import product2Thumb from '../../images/image-product-2-thumbnail.jpg';
import product3 from '../../images/image-product-3.jpg';
import product3Thumb from '../../images/image-product-3-thumbnail.jpg';
import product4 from '../../images/image-product-4.jpg';
import product4Thumb from '../../images/image-product-4-thumbnail.jpg';

import './product.scss';


const heroImages = [product1, product2, product3, product4];
const thumbImages = [product1Thumb, product2Thumb, product3Thumb, product4Thumb];



const Product = () => {

  const [hero, setHero] = useState(heroImages[0]);

  const chosen = (newIndex) => {
    setHero(heroImages[newIndex]);
    const pic0 = document.querySelector("#pic0");
    const pic1 = document.querySelector("#pic1");
    const pic2 = document.querySelector("#pic2");
    const pic3 = document.querySelector("#pic3");
    const pics = [pic0, pic1, pic2, pic3];
    //remove class from all others
    pics.forEach(function(pic) {
      pic.classList.remove("selected");
    })
    //add class to selected
    document.querySelector("#pic"+newIndex).classList.add("selected");
  }
  return (
    <main className='app__product'>
      <section className='app__product-images'>
        <div className='main-image'>
          <img src={hero} alt="Sneaker" />
        </div>
        <div className='image-selector'>
          {thumbImages.map((thumbImage, index) => <div className='imgDiv' id={`pic${index}`} onLoad={() => chosen(0) }>
            <img onClick={() => chosen(index) } src={thumbImage} alt="Thumbnail" key={index}  />
          </div>)}
        </div>
      </section>
      <section className='app__product-description'>
        <h4>Sneaker Company</h4>
        <h2>Fall Limited Edition Sneakers</h2>
        <p className='features'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <div className='price'>
          <h3>$125.00</h3>
          <div className='price__discount'>
            50%
          </div>
        </div>
        <p className='previousPrice'>$250.00</p>
        {/* <Purchase /> */}
      </section>
    </main>
  )
}

export default Product