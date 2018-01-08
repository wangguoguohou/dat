import * as constant from '../constant/DATDrawHome'

const initialState = {
  data: 1
};

export default function DATDrawHome(state = initialState, action = {}) {
  switch (action.type) {
    case constant.TEST:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}

