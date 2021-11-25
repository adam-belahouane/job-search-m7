
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import favsReducer from '../reducers/favs.js'
import jobsReducer from '../reducers/jobs.js'
import thunk from 'redux-thunk'
const aComposeThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
 
  favourites: {
    content: [],
  },
  jobs: {
    listOfJobs: [],
    isError: false,
    isLoading: true,
    search: 'developer'
  }
  
}

const bigReducer = combineReducers({
  favourites: favsReducer,
  jobs: jobsReducer
})

const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeThatAlwaysWorks(applyMiddleware(thunk))
)

export default configureStore