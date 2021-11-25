export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const GET_JOBS = 'GET_JOBS'
export const GET_JOBS_ERROR = 'GET_JOBS_ERROR'
export const TOGGLE_LOADER = 'TOGGLE_LOADER'
export const SET_SEARCH = 'SET_SEARCH'


export const addToFavouritesAction = (companyToAdd) => ({
  type: ADD_TO_FAVOURITES,
  payload: companyToAdd, 
})

export const removeFromFavouritesAction = (indexToRemove) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: indexToRemove,
})

export const setSearchAction = (value) => ({
  type: SET_SEARCH,
  payload: value,
})

export const getJobsAction = (search) => {
  return async (dispatch) => {

    try {
      const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${search}&limit=10`)
      if(response.ok) {
        const data = await response.json()
        dispatch({
          type: GET_JOBS,
          payload: data.data
        })
        setTimeout(() => {
          dispatch({
            type: TOGGLE_LOADER,
            payload: false,
          })
        }, 1000)
      } else {
        dispatch({
          type: GET_JOBS_ERROR,
        })
        dispatch({
          type: TOGGLE_LOADER,
          payload: false,
        })
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: GET_JOBS_ERROR,
      })
      dispatch({
        type: TOGGLE_LOADER,
        payload: false,
      })
    }
  }
}
