import { combineReducers } from 'redux';

const reducer = combineReducers({ example: (state = {}) => state });

export type AppState = ReturnType<typeof reducer>;
export default reducer;
