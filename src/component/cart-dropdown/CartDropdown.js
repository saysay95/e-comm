import React from 'react'
import './CartDropdown.scss'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.action'

const CartDropdown = ({items, history, dispatch}) => (
    <div className='cart-dropdown'>
        {items.length ? 
        (
            <div className='cart-items'>
                {items.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))}
            </div>
        ) :
        (
            <span className='empty-message'>No item in your cart, won't you buy something you cheap bastard??!?</span>
        )
        }
        <CustomButton onClick = {() => {
                                        history.push('/checkout');
                                        dispatch(toggleCartHidden());
                                    }}>CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    items: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));