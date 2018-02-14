import React from "react"
import ReactDom from "react-dom"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  changename() {
    this.props.actions.changesonname("zhangmingzhizzzzzzzzz");
  }
  render() {
    return (
      <div>
        <Link to={{
          pathname: "/A",
          state: {
            name: "zmz"
          },
          search: '?name="zhangmingzhi"'
        }}>BLINK</Link>
        <h1>BBBBBBBBBBBBBBBB</h1>
      </div>
    )
  }
}