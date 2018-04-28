import { combineReducers } from 'redux'

import allen from './allen'
import user from './user'

const reducer = combineReducers({
    allen,
    user

})

export default reducer