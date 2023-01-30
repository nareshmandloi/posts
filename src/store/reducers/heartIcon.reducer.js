import { POST_LIST, ADD_TO_WISHLIST, DISLIKE, ADD_TO_CART, INCREASE_COUNT } from '../actions/heartIcon.action'

const initialState = {
  postList: [],
  wishListedItems: [],
  cartItems: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LIST : 
    return {
      ...state,
      postList: [...state.postList, action.payload]
    }
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishListedItems: [...state.wishListedItems, action.payload]
      }
    case DISLIKE:
      return {
        ...state,
        wishListedItems: state.wishListedItems
      }
      case ADD_TO_CART : 
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
      case INCREASE_COUNT :
        return {
          ...state,
          cartItems: state.cartItems.map((item) => {
            if (item.id === action.payload) {
            return { ...item, itemCount: item.itemCount + 1 };
            }
            return item;
            })
        }
    default:
      return state
  }
}

export default reducer