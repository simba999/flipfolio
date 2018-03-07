import {
  SAVE_CURRENT_USER,
  SAVE_TOKEN,
  CLEAR_USER,
} from './constants';

export const saveCurrentUser = data => ({
  type: SAVE_CURRENT_USER,
  data,
});

export const saveToken = token => ({
  type: SAVE_TOKEN,
  token,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});
