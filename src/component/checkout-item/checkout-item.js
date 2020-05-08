import React from 'react'
import './checkout-item.scss'
import {connect} from 'react-redux'
import {removeItem,removeSingleItem,addItem} from '../../redux/cart/cart.action'

const CheckoutItem = ({item, removeItem, removeSingleItem, addItem}) => {
    const {name, quantity, price, imageUrl} = item;
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow'
                onClick={() => removeSingleItem(item)}>&#10134;</div>
            <span className='value'>{quantity}</span>    
            <div className='arrow'
            onClick={() => addItem(item)}>&#10133;
            </div>
        </span>
        <span className='price'>{price}</span>
        <span className='remove-button' onClick={() => removeItem(item)}>&#10005;</span>
    </div>);
};

const mapDispatchToState = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    removeSingleItem: item => dispatch(removeSingleItem(item)),
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToState)(CheckoutItem);