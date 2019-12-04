console.log(123409)
const React = require('react')
const ReactDom = require('react-dom')
// const div = React.createElement('h1', null, 'this is my first react')
let a = 12
function Hello() {
  return "this is a test"
}
const div = <div id='div'>this jsx{a}<Hello /></div>

ReactDom.render(div, document.getElementById('app'))