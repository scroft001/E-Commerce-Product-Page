import React, {useState} from 'react';
import {ReactComponent as CartIcon} from '../../images/icon-cart-white.svg';
// import cartIcon from '../../images/icon-cart.svg';

import './purchase.scss';

const Purchase = () => {

    const [amount, setAmount] = useState(0)

    const addAmount = () => {
        setAmount(count => count + 1);
    }

    const subtractAmount = () => {
        setAmount(count => count - 1);
    }

  return (
    <div className='product__purchase'>
        <div className='amountCounter'>
            <div onClick={() => subtractAmount()} className='amountCounter__minus'>-</div>
            <div className='amount'>{amount}</div>
            <div onClick={() => addAmount()} className='amountCounter__plus'>+</div>
        </div>
        <button>
            <CartIcon />
            {/* <img src={cartIcon} alt="cart" /> */}
            <p>Add to cart</p>
        </button>
    </div>
  )
}

export default Purchase