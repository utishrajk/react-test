/*
 *
 *  constants
 *
 */

export const PRACTITIONER_TABLE_HEADERS = [
  { id: 1, name: 'Name' },
  { id: 2, name: 'Status' },
  { id: 3, name: 'Telecom' },
  { id: 4, name: 'Address' },
];

export const PRACTITIONERS = [
  { id: 1, name: 'Mr Johny', status: 'Active', telecome: 'telecome1', address: 'address1' },
  { id: 2, name: 'Mr Tom', status: 'Inactive', telecome: 'telecome2', address: 'address2' },
  { id: 3, name: 'Ms Shelley', status: 'Suspended', telecome: 'telecome3', address: 'address3' },
  { id: 4, name: 'Ms Andy', status: 'Active', telecome: 'telecome4', address: 'address4' },
  { id: 5, name: 'Mr Lu', status: 'Inactive', telecome: 'telecome5', address: 'address5' },
];

export const DEFAULT_ACTION = 'app/Practitioners/DEFAULT_ACTION';

export const SHOW_INACTIVE_PRACTITIONERS = 'app/Practitioners/SHOW_INACTIVE_PRACTITIONERS';
export const HIDE_INACTIVE_PRACTITIONERS = 'app/Practitioners/HIDE_INACTIVE_PRACTITIONERS';
export const SHOW_SUSPENDED_PRACTITIONERS = 'app/Practitioners/SHOW_SUSPENDED_PRACTITIONERS';
export const HIDE_SUSPENDED_PRACTITIONERS = 'app/Practitioners/HIDE_SUSPENDED_PRACTITIONERS';
export const GET_PRACTITIONERS = 'app/Practitioners/GET_PRACTITIONERS';
export const GET_PRACTITIONERS_SUCCESS = 'app/Practitioners/GET_PRACTITIONERS_SUCCESS';

