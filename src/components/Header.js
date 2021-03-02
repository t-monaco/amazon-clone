import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import cartLogo from './../images/amazon-cart.svg';
import { Link } from 'react-router-dom';
import amazonLogo from './../images/amazon-logo.png'

function Header() {
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
                <div className="header__option">
                    <span className="header__optionLineOne">Hello guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <div className="header__option header__optionBasketContainer">
                    <img
                        className="header__optionBasketImg"
                        src={cartLogo}
                        alt=""
                    />
                    <span className="header__optionLineTwo header__basketCount">
                        0
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Header;
