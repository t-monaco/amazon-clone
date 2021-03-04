import React from 'react'
import { useStateValue } from './../StateProvider';
import './CheckoutProduct.css'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function CheckoutProduct({ id, img, title, price, rating, quantity, hideButton}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // Remove item from basket
        dispatch({
            type: 'REMOVE_PRODUCT_FROM_BASKET',
            payload: {
                id,
            },
        });
    };

    const decreaseQuantity = () => {
        // Remove item from basket
        dispatch({
            type: 'DECREASE_QUANTITY_PRODUCT_FROM_BASKET',
            payload: {
                id,
            },
        });
    };

    const increaseQuantity = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            payload: {
                product: {
                    id
                }
            },
        });
    }

    return (
        <div className="checkoutProduct" key={id}>
            <img className="checkoutProduct__img" src={img} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    <p>{'⭐'.repeat(rating)}</p>
                </div>
                <p className="checkoutProduct__quantity">
                    Quantity:
                    {!hideButton && (
                        <button
                            className="checkoutProduct__quantityDecrease"
                            onClick={decreaseQuantity}
                            disabled={quantity <= 1}
                        >
                            <RemoveIcon />
                        </button>
                    )}
                    <strong> {quantity}</strong>
                    {!hideButton && (
                        <button
                            className="checkoutProduct__quantityIncrease"
                            onClick={increaseQuantity}
                        >
                            <AddIcon />
                        </button>
                    )}
                </p>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Delete</button>
                )}
            </div>
        </div>
    );
}

export default CheckoutProduct
