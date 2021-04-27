import { LOAD_CPU, DELETE_CPU, ADD_CPU, CHANGE_CPU } from '../types'

const initialState = {
    cpu: [],
    loading: true
}

export const cpuReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_CPU:
            return{
                ...state,
                cpu: action.payload,
                loading: false
            }
        case DELETE_CPU:
            return{
                ...state,
                cpu: state.cpu.filter(c => c.id !== action.payload)
            }
        case ADD_CPU:{
            const newCpu = [action.payload, ...state.cpu]
            
            return{
                ...state,
                cpu: newCpu
            }
        }
        case CHANGE_CPU:{
            const newCpu = state.cpu.map(cpu => {
                if (cpu.id === action.payload.id) {
                    cpu = action.payload
                }
                return cpu
            })

            return{
                ...state,
                cpu: newCpu
            }
        }
        default: 
            return state
    }
}