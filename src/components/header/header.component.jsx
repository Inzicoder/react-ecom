import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.util'
import Logo from '../../assets/logo.component';
import {connect} from 'react-redux';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {createStructuredSelector} from 'reselect'

import { HeaderContainer,LogoContainer,OptionsContainer,OptionLink,Optiondiv} from './header.styles'

const Header = ({currentUser,hidden})=>(
    <HeaderContainer >
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <OptionsContainer>
   <OptionLink to="/shop" >SHOP</OptionLink>
   <OptionLink to="/shop"> CONTACT</OptionLink>
   {
     currentUser?
     <Optiondiv onClick={()=>auth.signOut()}> Sign Out </Optiondiv>
     :
     <OptionLink to="/signIn">SIGN IN </OptionLink>
   }
   
        <CartIcon />
        </OptionsContainer>
        {
          hidden ?null : <CartDropdown />  }    
    </HeaderContainer>
)

const mapStateToProps=createStructuredSelector({
 currentUser:selectCurrentUser,
 hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header)