import {PUT_PRODUCT_TO_FORM, SAVE_PRODUCT, UPDATE_ID, UPDATE_IMAGE, UPDATE_NAME, UPDATE_PRICE} from "../constants";

const initialStateForForm = {product: {id: '', name: '', price: '', image: ''}};

export default (state = initialStateForForm, action) => {

    switch (action.type) {

        case UPDATE_ID: {
            return {
                ...state,
                product: {
                    ...state.product,
                    id: action.id,
                },
            }
        }
        case UPDATE_NAME: {
            return {
                ...state,
                product: {
                    ...state.product,
                    name: action.name
                }
            }
        }
        case UPDATE_PRICE: {
            return {
                ...state,
                product: {
                    ...state.product,
                    price: action.price
                }
            }
        }
        case UPDATE_IMAGE: {
            return {
                ...state,
                product: {
                    ...state.product,
                    image: action.image
                }
            }
        }
        case PUT_PRODUCT_TO_FORM: {
            return {
                ...state,
                product: {...action.product}
            }
        }
        case SAVE_PRODUCT: {
            return {
                ...state,
                product: {...initialStateForForm.product}
            }
        }
        default:
            return state;
    }
}