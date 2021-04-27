import { LOAD_CPU, DELETE_CPU, ADD_CPU, CHANGE_CPU } from '../types'
 
export const loadCpu = items => ({
    type: LOAD_CPU,
    payload: items
})

export const deleteCpu = id => ({
    type: DELETE_CPU,
    payload: id
})

export const addCpu = obj => ({
    type: ADD_CPU,
    payload: obj
})

export const changeCpu = obj => ({
    type: CHANGE_CPU,
    payload: obj
})