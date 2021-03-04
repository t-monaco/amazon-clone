export const initialState = {
    basket: [],
    user: null,
};

// --- Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);
// ---

// --- Selector
export const getTotalItems = (basket) =>
    basket?.reduce((count, item) => item.quantity + count, 0);
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

        case 'DECREASE_QUANTITY_PRODUCT_FROM_BASKET':
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
        case 'REMOVE_PRODUCT_FROM_BASKET':
            return {
                ...state,
                basket: state.basket.filter((item) => item.id !== payload.id),
            };

        case 'SET_USER':
            return {
                ...state,
                user: payload.user,
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: [],
            };

        default:
            return state;
    }
};

export default reducer;
