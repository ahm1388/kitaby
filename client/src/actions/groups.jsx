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

export const commentGroup = (value, id) => async (dispatch) => {
    try {
        const { data } = await api.comment(value, id)
        dispatch({ type: 'COMMENT', payload: data })
        return data.comments
    } catch (error) {
        console.log(error)
    }
}

export const likeGroup = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeGroup(id)
        dispatch({ type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const dislikeGroup = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeGroup(id)
        dispatch({ type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}