import { combineReducers } from 'redux'

import backgroundReducer from './background'
import commonReducer from './common'

export default combineReducers({
	common: commonReducer,
	background: backgroundReducer
})
