import React from 'react'
import css from './home.css'
console.log(css)
function DivTest(props) {
  return <h4>姓名：{props.item.name}</h4>
}


export default class Home extends React.Component {
  constructor() {
    super()
    this.ddd = '12px'
    this.state = {
      name: 'lixp',
      list: [{ id: 1, name: 'AAA' }, { id: 2, name: 'BBB' }]
    }
  }

  render() {
    return <div className={css.welcome}>this is my home page{this.props.user.name}--{this.state.name}--
    {this.ddd}
      <div style={{ color: 'yellow', fontSize: this.ddd }}>{this.state.list.map(item => { return <DivTest item={item} key={item.id}></DivTest> })}</div>
    </div>

  }
}