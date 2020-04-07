
import React from 'react'
class Hello extends React.Component {
  constructor() {
    super()
    console.log(this.props)
  }

  render() {

    return <p>"this is a test "{this.props.user.age}</p>
  }

}
// hello 组件
export default Hello