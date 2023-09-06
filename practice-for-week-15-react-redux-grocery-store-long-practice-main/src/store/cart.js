
const ADD_TO_CART = 'ADD_TO_CART'

const cartReducer = (state = {}, action) => {
    const newState = {...state}
    switch(action.type) {
        case ADD_TO_CART:
            newState[action.produceID] = { id: action.produceID, count: 1}
            return newState
        default: 
        return state;
    }
}

export const addToCart = (produceID) => ({
    type: ADD_TO_CART,
    produceID: produceID
})

export default cartReducer

{ id: 3, count: 1}

newState[1] = "banana"