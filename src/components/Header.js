import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import cartLogo from './../images/amazon-cart.svg';
import amazonLogo from './../images/amazon-logo.png'
import { Link } from 'react-router-dom';
import { useStateValue } from './../StateProvider';
import { auth } from '../firabase';
import { getTotalItems } from '../reducer';

function Header() {
    const [{ basket, user }] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut()
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src={amazonLogo}
                    alt=""
                />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div className="header__option" onClick={handleAuthentication}>
                        <span className="header__optionLineOne">{user ? `Hello ${user.currentUser.email.split('@')[0]}` : 'Hello guest'}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' :'Sign In'}</span>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__option header__optionBasketContainer">
                        <img
                            className="header__optionBasketImg"
                            src={cartLogo}
                            alt=""
                        />
                        <span className="header__optionLineTwo header__basketCount">
                            {getTotalItems(basket)}
                        </span>
                    </div>
                </Link> 
            </div>
        </div>
    );
}

export default Header;
