import * as constant from '../constant/DATDrawHome'

export function test() {
    return dispatch => {
        dispatch({type: constant.TEST, payload: 2})
    }
}
  
