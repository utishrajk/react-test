
import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_PRACTITIONERS, PRACTITIONER_TABLE_HEADERS } from './constants';
import { getPractitionersError, getPractitionersSuccess } from './actions';
import { PractitionersApiService } from '../../utils/PractitionersApiService';

/**
 * Root saga manages watcher lifecycle
 */
export default function* getPractitioners() {
  try {
    const practitioners = yield call(PractitionersApiService.getPractitioners);
    yield put(getPractitionersSuccess(practitioners, PRACTITIONER_TABLE_HEADERS));
  } catch (err) {
    yield put(getLocationError(err));
  }
}
