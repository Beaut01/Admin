import { combineReducers } from 'redux'
import { cpuReducer } from './cpu'

export const rootReducer = combineReducers({
    cpu: cpuReducer
})