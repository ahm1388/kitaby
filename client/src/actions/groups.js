import * as api from '../api'

// Action Creators
export const getGroups = () => async (dispatch) =>  {
    try {
        const { data } = await api.fetchGroups()
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const createGroup = (group) => async (dispatch) => {
    try {
        const { data } = await api.createGroup(group)
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}