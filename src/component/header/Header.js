import React from 'react'
import './Header.scss'
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink } from './Header.styles'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import {auth} from '../../firebase/firebase.utils'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selector'
import {selectCurrentUser} from '../../redux/user/user.selectors'

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                    SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>
            {currentUser ? (
                <OptionLink as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionLink>
            ) : (
                <OptionLink to= '/signin'>
                    SIGN IN
                </OptionLink>)
            }
            <CartIcon/>
        </OptionsContainer>
        { hidden ? null : <CartDropdown /> }
    </HeaderContainer>
); 

//  const mapStateToProps = state => ({
//      currentUser: selectCurrentUser(state),
//      hidden: selectCartHidden(state)
//  });
// can be done the following way
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);