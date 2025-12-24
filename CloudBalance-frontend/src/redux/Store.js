import { createStore } from 'redux';
import AccountReducer from './reducer/userDataReducer';

export const store = createStore(AccountReducer);