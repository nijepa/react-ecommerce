import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButon from '../custom-button/custom-button.component';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className="cart-items">

        </div>
        <CustomButon>GO TO CHECKOUT</CustomButon>
    </div>
);

export default CartDropdown;