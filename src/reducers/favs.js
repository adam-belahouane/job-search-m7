import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../actions'
import { initialState } from '../store'


const favsReducer = (state = initialState.favourites, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
          content: [...state.content, action.payload], 
      }
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
          content: state.content.filter((el, i) => i !== action.payload),
      }
    default:
      return state
  }
}

export default favsReducer