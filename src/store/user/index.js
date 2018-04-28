
import _state from './state'
import { Provider } from 'react-redux'
import {
    CHANGE_USERNAME
} from './const'
import state from './state'
const reducer = (state = _state, action) => {
    let new_state = Object.assign({}, state)
        switch(action.type){
            case CHANGE_USERNAME:
        	new_state.username = action.username;break;
            default:break;
        }

    return new_state
}

export default reducer