import React from "react"
import Content from "./contents.js"
import Subone from "./subone.jsx"
import HOC from "./HOC.jsx"
class ASDGF extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(`this.props `, this.props)
    return (
      <Subone  {...this.props} />
    )
  }
}
export default HOC(ASDGF);