import {
  SAVE_CURRENT_USER,
  SAVE_TOKEN,
  CLEAR_USER,
} from './constants';

const initailState = { token: '' };

const loginReducer = (state = initailState, action) => {
  switch (action.type) {
    case SAVE_CURRENT_USER:
      return {
        ...state,
        ...action.data,
      };
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case CLEAR_USER:
      return initailState;
    default:
      return state;
  }
};

export default loginReducer;
