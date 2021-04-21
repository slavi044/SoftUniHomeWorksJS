import { IState } from './reducer';

export const getToken = (state: IState) => state.token;
export const getUserId = (state: IState) => state.userId;
export const getUsername = (state: IState) => state.username;
export const getErrorMessage = (state: IState) => state.errorMessage;
