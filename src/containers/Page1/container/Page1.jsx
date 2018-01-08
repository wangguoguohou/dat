import React, { Component } from 'react';
import { connect } from 'react-redux'
import {test} from '../actions/Page1'

@connect(
  state => state.Page1,
  {test}
)

class Page1 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        Page1
      </div>
    );
  }
}

export default Page1;