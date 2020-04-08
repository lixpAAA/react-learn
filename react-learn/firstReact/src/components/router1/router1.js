import React from 'react'
import PropTypes from 'prop-types'
import utils from '../../utils'
import Page404 from '../../pages/404'


class AA extends React.Component {
	static contextTypes = {
		query: PropTypes.object
	}
	render() {
		const {
			query
		} = this.context
		return <div><h2>AA</h2><h3>{JSON.stringify(query)}</h3></div>
	}
}
class BB extends React.Component {
	static contextTypes = {
		query: PropTypes.object
	}
	render() {
		const {
			query
		} = this.context
		return <div><h2>BB</h2><h3>{JSON.stringify(query)}</h3></div>
	}
}
class Router extends React.Component {
	//   提供给子组件的数据
	static childContextTypes = {
		hash: PropTypes.string,
		query: PropTypes.object,
		routeLength: PropTypes.number
	}
	constructor(props) {
		super(props)
		const mode = props.mode ? props.mode : 'hash'
		this.state = {
			hash: window.location.hash,
			mode: mode
		}
		this.history = window.location.pathname
	}
	//  得到路由路径
	// 1. 如果为hash模式则路径为#后面部分： 例如 localhost:80/#/aa?a=1得到/aa
	// 2. 如果为history模式： 例如 localhost:80/aa?a=1得到/aa
	getHash() {
		let url
		let { mode } = this.state
		if (mode === 'hash') {
			url = window.location.hash.replace('#', '')
			url = url.split('?')[0]
		} else {
			url = window.location.pathname
		}
		return url
	}
	// 得到路由参数
	getQuery() {
		let url, query
		let { mode } = this.state
		if (mode === 'hash') {
			url = window.location.hash.replace('#', '')
			query = utils.queryURL(url)
		} else {
			url = window.location.href
			query = utils.queryURL(url)
		}
		return query
	}

	getRouteLength() {
		let length = 0
		if (this.props.children)
			length = this.props.children.filter((item) => {
				return toString.call(item.type) !== '[object String]'
			})

		return length
	}
	getChildContext() {
		return {
			hash: this.getHash(),
			query: this.getQuery(),
			routeLength: this.getRouteLength()
		}
	}

	render() {
		console.log(this.props.children)
		return this.props.children
	}
	componentDidMount() {
		window.onhashchange = () => {
			this.setState({
				hash: this.getHash()
			})
		}
		// this.history.route = (name) => {
		// 	this.setState({
		// 		hash: `/${name}`
		// 	})
		// 	window.history.pushState(null, null, name)
		// }
	}
}


class Route extends React.Component {
	//  接收父组件数据
	static contextTypes = {
		hash: PropTypes.string
	}
	render() {
		let { path, component } = this.props
		const { hash } = this.context
		let instance = null
		if (path === hash) {
			instance = React.createElement(component, null, null)
		}
		return instance
	}
}

function App(params) {
	return (
		<div className='app'>
			<Router>
				<header className='app-header'>
					<div>header</div>
					<Route path='/aa' component={AA}></Route>
					<Route path='/bb' component={BB}></Route>
					{/* <Route path='/*' component={Page404}></Route> */}
				</header>
			</Router>
		</div>
	)
}
export default App