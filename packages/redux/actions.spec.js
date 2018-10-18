import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  fetchError,
  receiveApps,
  fetchApps,
  receiveAuth,
  fetchAuth,
  receiveAppUpdate,
  fetchAppUpdate
} from './actions';

import { API_URL } from './constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('action creator...', () => {
  describe('fetchError...', () => {
    it('should return correct payload', () => {
      const SUT = fetchError({ error: 'abc' });

      expect(SUT).toEqual({ type: 'FETCH_ERROR', error: 'abc' });
    });
  });

  describe('receiveApps...', () => {
    it('should return correct payload.', () => {
      const SUT = receiveApps({ apps: [1, 2, 3] });

      expect(SUT).toEqual({ type: 'APPS_RECEIVE', apps: [1, 2, 3] });
    });
  });

  describe('fetchApps...', () => {
    it('should fetch then return success payload...', () => {
      nock(API_URL)
        .get('/apps')
        .reply(200, { apps: [1, 2, 3] });

      const store = mockStore();
      const expectedActions = [{ type: 'APPS_RECEIVE', apps: [1, 2, 3] }];

      store.dispatch(fetchApps({ accessToken: 'abc' })).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });

      nock.cleanAll();
    });

    it('should fetch then return error payload...', () => {
      nock(API_URL)
        .get('/apps')
        .replyWithError({ error: 'abc' });

      const store = mockStore();
      const expectedActions = [{ type: 'FETCH_ERROR', error: 'abc' }];

      store.dispatch(fetchApps({ accessToken: 'abc' })).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });

      nock.cleanAll();
    });
  });

  describe('receiveAuth...', () => {
    it('should return correct payload', () => {
      const SUT = receiveAuth({ accessToken: 'abc' });

      expect({ type: 'AUTH_RECEIVE' });
    });
  });

  describe('fetchAuth...', () => {
    it('should fetch then return success payload...', () => {
      nock(API_URL)
        .post('/login')
        .reply(200, { accessToken: 'abc' });

      const store = mockStore();
      const expectedActions = [{ type: 'AUTH_RECEIVE', accessToken: 'abc' }];

      store.dispatch(fetchAuth({ accessToken: 'abc' })).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });

      nock.cleanAll();
    });

    it('should fetch then return error payload...', () => {
      nock(API_URL)
        .post('/login')
        .replyWithError({ error: 'abc' });

      const store = mockStore();
      const expectedActions = [{ type: 'FETCH_ERROR', error: 'abc' }];

      store.dispatch(fetchAuth({ accessToken: 'abc' })).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });

      nock.cleanAll();
    });
  });

  describe('receiveAppUpdate...', () => {
    it('should return correct payload.', () => {
      const SUT = receiveAppUpdate({ app: 'abc' });

      expect(SUT).toEqual({ type: 'APP_UPDATE_RECEIVE', app: 'abc' });
    });
  });
});
