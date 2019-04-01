import { combineReducers } from 'redux';
import messages from "./messages";


const builderApp = combineReducers({
  messages,
})

export default builderApp;
