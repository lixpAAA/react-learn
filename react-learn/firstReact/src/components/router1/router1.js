import React from 'react'

const AA = () => <div>AA</div>
const BB = () => <div>BB</div>


class Router extends React.Component {

	render() {
		return this.props.children
	}
}


class Route extends React.Component {

	render() {
		return 'Route'
	}
}

function App(params) {
	return (
		<div className='app'>
			<Router>
				<header className='app-header'>
					<div>header</div>
					<Route path='aa' component={AA}></Route>
					<Route path='bb' component={BB}></Route>
				</header>
			</Router>
		</div>
	)
}
export default App