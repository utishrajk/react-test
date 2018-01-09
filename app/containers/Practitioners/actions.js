/*
 *
 * Practitioners actions
 *
 */


import {
  SHOW_INACTIVE_PRACTITIONERS,
  SHOW_SUSPENDED_PRACTITIONERS,
  GET_PRACTITIONERS,
  DEFAULT_ACTION, GET_PRACTITIONERS_SUCCESS,
  HIDE_SUSPENDED_PRACTITIONERS,
  HIDE_INACTIVE_PRACTITIONERS,
} from './constants';

export function defaultAction() {
  console.log("action.js defaultAction");
  return {
    type: DEFAULT_ACTION,
  };
}

export function showInActivePractitioners(checked) {
  console.log("action.js showInActivePractitioners");
  return {
    type: SHOW_INACTIVE_PRACTITIONERS,
    checked,
  };
}

export function hideInActivePractitioners(checked) {
  console.log("action.js hideInActivePractitioners");
  return {
    type: HIDE_INACTIVE_PRACTITIONERS,
    checked,
  };
}

export function showSuspendedPractitioners(checked) {
  console.log("action.js showSuspendedPractitioners");
  return {
    type: SHOW_SUSPENDED_PRACTITIONERS,
    checked,
  };
}

export function hideSuspendedPractitioners(checked) {
  console.log("action.js : hideSuspendedPractitioners");
  return {
    type: HIDE_SUSPENDED_PRACTITIONERS,
    checked,
  };
}

export function getPractitioners() {
  console.log("actions.js: getPractitioners()....");
  return {
    type: GET_PRACTITIONERS,
  };
}

export function getPractitionersSuccess(practitioners, headers) {
  return {
    type: GET_PRACTITIONERS_SUCCESS,
    practitioners,
    headers,
  };
}

export function getPractitionersError(error) {
  return {
    type: GET_PRACTITIONERS,
    error,
  }
}
