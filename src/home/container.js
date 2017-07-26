import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Button, Modal} from 'wrn-cat';

class Home extends Component {
  static propTypes = {
    total: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func
  };

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Modal title="王若男的测试模态框" okText='确认' cancelText='取消'>
          <Button>王若男测试Button</Button>
        </Modal>
      </div>
    );
  }
}


export default connect()(Home);
