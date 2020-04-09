// console.log(123409)
const React = require('react')
const ReactDom = require('react-dom')

// 导入组件
import Home from './components/home/Home'
import Hello from './components/Hello'

import HistoryDemo from './components/router1/router1'

import App from './components/test/test'

// const div = React.createElement('h1', null, 'this is my first react')
let a = 12

const user = {
  name: 'lixp',
  age: 18
}
// const div = <div id='div'>this jsx{a}<Hello user={user} /><Home user={user}></Home></div>
// const div = <div id='div'>{HistoryDemo}</div>

ReactDom.render(<App />, document.getElementById('app'))