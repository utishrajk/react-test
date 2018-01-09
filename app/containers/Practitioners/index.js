/**
 *
 * Locations
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Checkbox } from 'material-ui';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPractitioners from './selectors';
import reducer from './reducer';
import { PRACTITIONER_TABLE_HEADERS, PRACTITIONERS } from './constants';
import GridLayout from '../../components/GridLayout/index';
import saga from './saga';
import messages from './messages';
import styles from './Practitioners.css';

import {
  getPractitioners,
  hideInActivePractitioners,
  hideSuspendedPractitioners,
  showInActivePractitioners,
  showSuspendedPractitioners,
} from './actions';

export class Practitioners extends React.Component { // eslint-disable-line react/prefer-stateless-function
  getTelecoms(telecoms) {
    return telecoms.map((entry) =>
      (
        <div>
          {entry.system}: {entry.value}
        </div>
      )
    );
  }

  getAddress(address) {
    return address ? (<div>{ address.line1} {address.line2}, {address.city}, {address.state} {address.postalCode} </div>) : '';
  }

  createGridRows() {
    return this.props.practitioners.map((practitioner) => (
      <div className={styles.col}>
        <div>{practitioner.familyName}</div>
        <div>{practitioner.givenName}</div>
      </div>
    ));
  }

  render() {
    return (
      <div className={styles.container} >
        <FormattedMessage {...messages.inactive} >
          {(msg) => (
            <Checkbox
              className={styles.box}
              label={msg}
              labelPosition="left"
              onCheck={this.props.onCheckShowInactive}
            />
          )}
        </FormattedMessage>
        <FormattedMessage {...messages.suspended} >
          {(msg) => (
            <Checkbox
              className={styles.box}
              label={msg}
              labelPosition="left"
              onCheck={this.props.onCheckShowSuspended}
            />
          )}
        </FormattedMessage>
        <div className={styles.header}>
          <div className={styles.col}>
            <div>Name</div>
            <div>Status</div>
          </div>
        </div>
        <div className={styles.row}>
          { this.createGridRows()}
        </div>
      </div>
    );
  }
}

Practitioners.propTypes = {
  getPractitioners: PropTypes.func,
  onCheckShowInActive: PropTypes.func,
  onCheckShowSuspended: PropTypes.func,
  practitioners: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  practitioners: makeSelectPractitioners(),
});

function mapDispatchToProps(dispatch) {
  return {
    onCheckShowInactive: (evt, checked) => {
      if (checked) {
        dispatch(showInActivePractitioners(checked));
      } else {
        dispatch(hideInActivePractitioners(checked));
      }
    },
    onCheckShowSuspended: (evt, checked) => {
      if (checked) {
        dispatch(showSuspendedPractitioners(checked));
      } else {
        dispatch(hideSuspendedPractitioners(checked));
      }
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'practitioners', reducer });
const withSaga = injectSaga({ key: 'practitioners', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Practitioners);
