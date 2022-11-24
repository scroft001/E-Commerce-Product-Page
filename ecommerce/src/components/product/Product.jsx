import React from 'react'
import { Purchase } from '..'
import product1 from '../../images/image-product-1.jpg';
import product1Thumb from '../../images/image-product-1-thumbnail.jpg';
import product2 from '../../images/image-product-2.jpg';
import product2Thumb from '../../images/image-product-2-thumbnail.jpg';


const heroImages = [product1, product2];
const thumbImages = [product1Thumb, product2Thumb];

const Product = () => {
  return (
    <main className='app__product'>
      <section className='app__product-images'>
        <div className='main-image'>
          {/* <img src={} alt={} /> */}
        </div>
        <div className='image-selector'>

        </div>
      </section>
      <section className='app__product-description'>
        {/* <Purchase /> */}
      </section>
    </main>
  )
}

export default Product