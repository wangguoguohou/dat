import { combineReducers } from 'redux'

import Page1 from '../containers/Page1/reducer/Page1'
import Page2 from '../containers/Page2/reducer/Page2'
import DATDrawHome from '../containers/DATDrawHome/reducer/DATDrawHome'

export default combineReducers({
    Page1,
    Page2,
    DATDrawHome
});