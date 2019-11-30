console.log(123409)
const React = require('react')
const ReactDom = require('react-dom')
const div = React.createElement('h1', null, 'this is my first react')

ReactDom.render(div, document.getElementById('app'))