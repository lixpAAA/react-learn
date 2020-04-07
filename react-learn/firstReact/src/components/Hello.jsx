
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
export default Hello