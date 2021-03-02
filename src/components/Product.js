import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

function Product({ id, title, img, price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    <p>{'⭐️'.repeat(rating)}</p>
                </div>
            </div>
            <img
                className="product__img"
                src={img}
                alt=""
            />
            <Link to="/checkout">
                <button className="product__button">Add to basket</button>
            </Link>
        </div>
    );
}

export default Product;
