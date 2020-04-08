import React, { Component } from 'react'
import Confirm from '../../components/confirm'

class App extends Component {
  state = {
    num: 1
  }
  render() {
    return (
      <div>
        {/* <button onClick={() => {
          let res = await Confirm1()
          if (res) {
            console.log('shi')
          } else {
            console.log('fou')
          }
        }}> 测试</button> */}
        {/* <Confirm onConfirm={() => console.log('你点击了确定')} showCancelText={false} /> */}
      </div>
    );
  }

  async componentDidMount() {
    let res = await Confirm()
    if (res) {
      console.log('shi')
    } else {
      console.log('fou')
    }
  }
}
export default App
// 123456789