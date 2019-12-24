// console.log(123409)
const React = require('react')
const ReactDom = require('react-dom')

// 导入组件
import Home from './components/home/Home'
import Hello from './components/Hello'

// const div = React.createElement('h1', null, 'this is my first react')
let a = 12

const user = {
  name: 'lixp',
  age: 18
}
const div = <div id='div'>this jsx{a}<Hello user={user} /><Home user={user}></Home></div>

ReactDom.render(div, document.getElementById('app'))