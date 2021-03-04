import React from 'react';
import { useStateValue } from './../StateProvider';
import './Product.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Product({ id, title, img, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // Dispatch item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            payload: {
                product: {
                    id,
                    title,
                    img,
                    price,
                    rating,
                }
            }
        })
    }

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
            <img className="product__img" src={img} alt="" />
            <button onClick={addToBasket} className="product__button">
                <AddCircleOutlineIcon className="product__buttonIcon" />
            </button>
        </div>
    );
}

export default Product;
