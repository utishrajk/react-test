/*
 *
 * Practitioners reducer
 *
 */

import { fromJS } from 'immutable';

import {
  PRACTITIONERS,
  SHOW_INACTIVE_PRACTITIONERS,
  SHOW_SUSPENDED_PRACTITIONERS,
  HIDE_INACTIVE_PRACTITIONERS,
  HIDE_SUSPENDED_PRACTITIONERS,
  GET_PRACTITIONERS_SUCCESS,
} from './constants';

const initialState = fromJS({
  practitioners: [],
});

function filteredReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRACTITIONERS_SUCCESS: {
      console.log('reduder 0...');
      return state.set('practitioners', action.practitioners);
    }
    case SHOW_INACTIVE_PRACTITIONERS: {
      console.log('reducer 1..');
      const practitioners = state.get('practitioners');
      const filtered = PRACTITIONERS.filter((item) => (item.status === 'Inactive'));
      console.log(filtered);
      return state.set('practitioners', practitioners.concat(filtered));
    }
    case HIDE_INACTIVE_PRACTITIONERS: {
      console.log('reducer 2..');
      const practitioners = state.get('practitioners');
      const filtered = practitioners.filter((item) => (item.status === 'Active' || item.status === 'Suspended'));
      console.log(filtered);
      return state.set('practitioners', filtered);
    }
    case SHOW_SUSPENDED_PRACTITIONERS: {
      console.log('reducer 3..');
      const practitioners = state.get('practitioners');
      const filtered = PRACTITIONERS.filter((item) => (item.status === 'Suspended'));
      console.log(filtered);
      return state.set('practitioners', practitioners.concat(filtered));
    }
    case HIDE_SUSPENDED_PRACTITIONERS: {
      console.log('reducer 4...');
      const practitioners = state.get('practitioners');
      const filtered = practitioners.filter((item) => (item.status === 'Active' || item.status === 'Inactive'));
      console.log(filtered);
      return state.set('practitioners', filtered);
    }
    default: {
      console.log('reducer 5. default');
      //console.log(state.get('practitioners'));
      console.log(action.practitioners);
      return state;
    }
  }
}

export default filteredReducer;
