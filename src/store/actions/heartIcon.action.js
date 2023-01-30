export const POST_LIST = 'POST_LIST'
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
export const DISLIKE = 'DISLIKE'
export const ADD_TO_CART = "ADD_TO_CART"
export const INCREASE_COUNT = "INCREASE_COUNT"

export const postList = (posts) => {
  return {
    type: POST_LIST,
    payload: posts,
  }
}

export const addToWhishList = (post) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: post,
  }
}

export const dislike = () => {
  return {
    type: DISLIKE
  }
}

export const addToCart = (post) => {
  return {
    type: ADD_TO_CART,
    payload: post,

  }
}


export const increaseCount = (id) => {
    return {
      type: INCREASE_COUNT,
      payload: id
    }
} 