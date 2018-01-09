import { createSelector } from 'reselect';

/**
 * Direct selector to the practitioners state domain
 */
const selectPractitionersDomain = (state) => state.get('practitioners');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Practitioners
 */

const makeSelectPractitioners = () => createSelector(
  selectPractitionersDomain,
  (substate) => substate.get('practitioners')
);

export default makeSelectPractitioners;
export {
  selectPractitionersDomain,
};
