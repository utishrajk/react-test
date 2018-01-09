/**
*
* GridLayout
*
*/

import React from 'react';
import styles from './grid.css';

class GridLayout extends React.PureComponent {
  headers = [
    { id: 1, name: 'Name', status: 'Status', telecome: 'Telecom', address: 'Address' },
  ];


  records = [
    { id: 1, name: 'name1', status: 'Active', telecome: 'telecome1', address: 'address1' },
    { id: 2, name: 'name2', status: 'Inactive', telecome: 'telecome2', address: 'address2' },
    { id: 3, name: 'name3', status: 'Suspended', telecome: 'telecome3', address: 'address3' },
    { id: 4, name: 'name4', status: 'Active', telecome: 'telecome4', address: 'address4' },
    { id: 5, name: 'name5', status: 'Inactive', telecome: 'telecome5', address: 'address5' },
  ];

  createGridHeaderColumns() {
    return this.headers.map((item) => (
      <div className={styles.col}>
        <div>{item.name}</div>
        <div>{item.status}</div>
        <div>{item.telecome}</div>
        <div>{item.address}</div>
      </div>

    ));
  }

  createGridRows() {
    return this.records.map((item) => (
      <div className={styles.col}>
        <div>{item.name}</div>
        <div>{item.status}</div>
        <div>{item.telecome}</div>
        <div>{item.address}</div>
      </div>
    ));
  }
 /* createGridRows() {
    return this.records.map((item) => (
      Object.keys(item).filter((key) => key !== 'id')
        .map((key) => (
          <div >
            {item[key]}
          </div>
        ))
    ));
  }*/

  render() {
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.header}>
            {this.createGridHeaderColumns()}
          </div>
          <div className={styles.row}>
            {this.createGridRows()}
          </div>
        </div>
      </div>
    );
  }
}

GridLayout.propTypes = {

};

export default GridLayout;
