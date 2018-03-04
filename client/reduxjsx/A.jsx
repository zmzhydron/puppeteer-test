import React from "react"
import ReactDom from "react-dom"

const Fuckyou = (name = 'lena rolads') => {
  return (
    <h2>fuck you {name}</h2>
  )
}


export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  changename() {
    this.props.actions.changesonname("zhangmingzhizzzzzzzzz");
  }
  render() {
    console.log(this.props, `this.props.params.name`);
    return (
      <div>
         <h1>AAAAAAAAAAAAAAAAAA</h1>
         {Fuckyou()}
      </div>
    )
  }
}