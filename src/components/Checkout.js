import React from 'react'
import Subtotal from './Subtotal'
import './Checkout.css'
import { useStateValue } from './../StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket }] = useStateValue();
    
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                </div>


                {basket.map((item) => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        img={item.img}
                        price={item.price}
                        rating={item.rating}
                        quantity={item.quantity}
                    />
                ))}
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout
