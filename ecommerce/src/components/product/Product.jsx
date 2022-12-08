import React from 'react'
import { Purchase, ImageSelector } from '..'

import './product.scss';

const Product = () => {

  
  return (
    <main className='app__product'>
      <ImageSelector />
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
        <Purchase />
      </section>
    </main>
  )
}

export default Product