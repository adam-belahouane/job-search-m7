
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import favsReducer from '../reducers/favs.js'
import jobsReducer from '../reducers/jobs.js'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'

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

const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPT_KEY,
    }),
  ],
}

const bigReducer = combineReducers({
  favourites: favsReducer,
  jobs: jobsReducer
})

const persistedBigReducer = persistReducer(persistConfig, bigReducer)

const configureStore = createStore(
  persistedBigReducer,
  initialState,
  aComposeThatAlwaysWorks(applyMiddleware(thunk))
)

export const persistor = persistStore(configureStore)

export default configureStore