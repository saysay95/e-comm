import React from 'react'
import './Header.scss'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                    SHOP
            </Link>
            <Link className='contact' to='/contact'>
                CONTACT
            </Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
            ) : (
                <Link className='option' to= '/signin'>
                    SIGN IN
                </Link>)
            }
            <CartIcon/>
        </div>
        { hidden ? null : <CartDropdown /> }
    </div>
);

 const mapStateToProps = state => ({
     currentUser: state.user.currentUser,
     hidden: state.cart.hidden
 });

export default connect(mapStateToProps)(Header);