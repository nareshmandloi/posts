import { LIKE, DISLIKE } from '../actions/heartIcon.action'

const initialState = {
  likes: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE:
        console.log('state', state)
      return {
        ...state,
        likes: state.likes + 1
      }
    case DISLIKE:
      return {
        ...state,
        likes: state.likes - 1
      }
    default:
      return state
  }
}

export default reducer