import { GET_JOBS, GET_JOBS_ERROR, TOGGLE_LOADER, SET_SEARCH } from '../actions'
import { initialState } from '../store'


const jobsReducer = (state = initialState.jobs, action) => {
    switch (action.type) {
      case GET_JOBS:
        return {
          ...state,
          listOfJobs: action.payload,
        }
      case GET_JOBS_ERROR:
        return {
          ...state,
          isError: true,
        }
      case TOGGLE_LOADER:
        return {
          ...state,
          isLoading: action.payload,
        }
       case SET_SEARCH:
            return {
                ...state,
                search: action.payload
        }
      default:
        return state
    }
  }

  export default jobsReducer