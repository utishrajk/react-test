/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
import { Card, CardHeader, CardText, Divider, RaisedButton } from 'material-ui';
// import messages from './messages';

import styles from './HomePage.css';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Practitioners  from '../Practitioners/index';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.container}>
        <div className={`${styles.box} ${styles.header}`}>
          <Header />
        </div>
        <div className={`${styles.box} ${styles.sidebar}`}>
          <SideBar />
        </div>
        <div className={`${styles.box} ${styles.task}`}>
          <Card style={styles.taskCard}>
            <CardHeader title="Practitioners" />
            <Divider />
            <CardText>
              <RaisedButton
                label="Show Practitioners"
                primary
              >
              </RaisedButton>
              <Practitioners></Practitioners>
            </CardText>
          </Card>
        </div>

      </div>
    );
  }
}
