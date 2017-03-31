import React, { Component, PropTypes } from 'react';

const visible = new ReactiveVar('');


export default class homePage extends Component {
  render() {
    return (
      <div>
        {this.props.header ? React.cloneElement(this.props.header, { visible }) : ''}
        <div className="clear-both">{ React.cloneElement(this.props.main, { visible }) }</div>
        {this.props.footer}
      </div>
    );
  }
}