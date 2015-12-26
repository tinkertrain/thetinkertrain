/* @flow */
import React, { Component } from 'react';
import styles from './list.scss';

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  render(): React.Element {
    return (
      <ul className={ this.state.root ? styles.root : styles.root2 }>
        <li>Hello</li>
        <li>Goodbye</li>
        <li>So cool</li>
        <li>So cool</li>
        <button onClick={this.switch.bind(this)}>Click</button>
      </ul>
    );
  }


  switch() {
    this.setState({root: !this.state.root});
  }
}
