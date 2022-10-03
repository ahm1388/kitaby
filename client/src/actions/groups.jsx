import * as api from '../api'

// Action Creators
export const getGroups = () => async (dispatch) =>  {
    try {
        const { data } = await api.fetchGroups()
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const getGroup = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchGroup(id)
        dispatch({ type: 'FETCH_GROUP', payload: data })
    } catch (error) {
        console.log(error)
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
