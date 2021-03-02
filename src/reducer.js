export const initialState = {
    basket: [],
    user: null,
};

// --- Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);
// ---

const reducer = (state, action) => {
    const { type, payload } = action;
    
    switch (type) {
        case 'ADD_TO_BASKET':
            const productId = payload.product.id;
            if (
                state.basket.findIndex(
                    (product) => product.id === productId
                ) !== -1
            ) {
                const basket = state.basket.reduce((basketAcc, product) => {
                    if (product.id === productId) {
                        basketAcc.push({
                            ...product,
                            quantity: product.quantity + 1,
                        });
                    } else {
                        basketAcc.push(product);
                    }
                    return basketAcc;
                }, []);
                return { ...state, basket };
            }
            return {
                ...state,
                basket: [...state.basket, { ...payload.product, quantity: 1 }],
            };

        case 'REMOVE_FROM_BASKET':
            const productIndex = state.basket.findIndex(product => product.id === payload.id);
            if (state.basket[productIndex].quantity > 1) {
                const basket = state.basket.reduce((basketAcc, product) => {
                    if (product.id === payload.id) {
                        basketAcc.push({
                            ...product,
                            quantity: product.quantity - 1,
                        });
                    } else {
                        basketAcc.push(product);
                    }
                    return basketAcc;
                }, []);
                return { ...state, basket };
            }
            return {
                ...state,
                basket: state.basket.filter((item) => item.id !== payload.id),
            };
            
        default:
            return state;
    }
};

export default reducer;
