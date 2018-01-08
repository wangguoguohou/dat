import React, { Component } from 'react';
import { connect } from 'react-redux'
import {WhiteSpace} from 'antd-mobile'
import Header from '../../../components/Header/Header'
import {test} from '../actions/DATDrawHome'
import axios from 'axios'

@connect(
  state => state.DATDrawHome,
  {test}
)

class DATDrawHome extends Component {
  componentDidMount() {
    axios.get('/test').then(res => {
      if(res.status === 200) {
        alert(1)
      }
    })
  }
  render() {
    return (
      <div>
        <Header></Header>  
        <WhiteSpace></WhiteSpace>  
        <WhiteSpace></WhiteSpace>  
        <WhiteSpace></WhiteSpace>  
        <WhiteSpace></WhiteSpace>  
        <WhiteSpace></WhiteSpace>  
        <WhiteSpace></WhiteSpace>  
        {this.props.data}
        <button onClick={this.props.test}>test</button>
      </div>
    );
  }
}

export default DATDrawHome;