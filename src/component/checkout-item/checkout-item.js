import React from 'react'
import './checkout-item.scss'
import {connect} from 'react-redux'
import {removeItem} from '../../redux/cart/cart.action'

const CheckoutItem = ({item, removeItem}) => {
    const {name, quantity, price, imageUrl} = item;
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <span className='remove-button' onClick={() => removeItem(item)}>&#10005;</span>
    </div>);
};

const mapDispatchToState = dispatch => ({
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToState)(CheckoutItem);