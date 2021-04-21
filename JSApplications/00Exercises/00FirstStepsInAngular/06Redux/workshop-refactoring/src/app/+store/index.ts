import { createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { reducer as authReducer, IState as IAuthState } from './auth/reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import * as auth from './auth/selectors';
import { RouterStateUrl } from '../core/app-router-serializer';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [storeFreeze] : [];

export const reducers = {
  auth: authReducer,
  router: routerReducer
};

export interface IAppState {
  auth: IAuthState;
  router: RouterReducerState<RouterStateUrl>;
}

/* Auth Selectors */

export const getAuthStore = createFeatureSelector('auth');
export const getAuthUsername = createSelector(getAuthStore, auth.getUsername);
export const getAuthUserId = createSelector(getAuthStore, auth.getUserId);
export const getAuthToken = createSelector(getAuthStore, auth.getToken);
export const getAuthErrorMessage = createSelector(getAuthStore, auth.getErrorMessage);
export const getIsAuthenticated = createSelector(getAuthToken, token => !!token);

/* Router Selectors */

export const getRouterStore = createFeatureSelector('router');
export const getRouterUrl = createSelector(getRouterStore, (routerState: RouterReducerState<RouterStateUrl>) => {
  return routerState ? routerState.state.url : '';
});
