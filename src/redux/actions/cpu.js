import { DATA } from '../../data'
import { LOAD_CPU, DELETE_CPU, ADD_CPU } from '../types'
 
export const loadCpu = () => ({
    type: LOAD_CPU,
    payload: DATA
})

export const deleteCpu = id => ({
    type: DELETE_CPU,
    payload: id
})

export const addCpu = obj => ({
    type: ADD_CPU,
    payload: obj
})