import React from 'react'
import './CartDropdown.scss'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selector'

const CartDropdown = ({items}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {items.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
    items: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);