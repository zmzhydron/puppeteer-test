import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter as Router, HashRouter, Route, Link } from 'react-router-dom'

import Indexs from "../reduxjsx/index.jsx"
import A from "../reduxjsx/A.jsx"
import B from "../reduxjsx/B.jsx"
import C from "../reduxjsx/C.jsx"

const Hhehe = () => {
	return (
		<h1>SHIT MAN</h1>
	)
}
const ASDF = () => {
	return (
		<h1>FUCKYOU MAN</h1>
	)
}

export default class RouterSs extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Router>
				<div className="shitman">
					<Route path="/shitman" component={Hhehe} />
					<Route path='/olala' exact component={ASDF} />
					<Route path="/" component={Indexs} />
					<Route path="/A" exact component={A} />
					<Route path="/B" component={B} />
					<Route path="/C" component={C} />
				</div>
			</Router>
		)
	}
}