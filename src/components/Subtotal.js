import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './../StateProvider';
import { getBasketTotal } from './../reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const [{ basket, user }] = useStateValue();

    const handleCheckout = e => {
        e.preventDefault()

        if(user) {
            history.push('/payment');
        }else {
            history.push('/login');
        }
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} item):
                            <strong> {value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a
                            gift?
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />

            {/* <button onClick={e => history.push('/payment')}>Proceed to Checkout</button> */}
            <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
