import React from 'react';
import './Checkout.scss';
import CheckoutItem from '../../component/checkout-item/checkout-item'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartItemsTotalPrice} from '../../redux/cart/cart.selector';
import StripeCheckoutButton from '../../component/stripe-button/stripe-button';

const CheckoutPage = ({items, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            items.map(item => (
            <CheckoutItem key={item.id} item={item} ></CheckoutItem>)
            )
        }
        <div className='total'>
            TOTAL: ${total}
        </div>
        <StripeCheckoutButton price={total}></StripeCheckoutButton>
        
    </div>
);

const mapStateToProps = createStructuredSelector({
    items: selectCartItems,
    total: selectCartItemsTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);

