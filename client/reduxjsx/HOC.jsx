import Content from "./contents.js" // 引入Consumer组件
import React from "react" // 不引入react的话，会报错。

/*
第一个参数为需要使用context的组件即Consumer组件调用函数调用的组件
这个组件作为新的子组件被export出去供父组件调用
第二个参数为包装后的react组件的props。
*/
export default SUCK => props => {
    console.log(`HOC: `,props);
    return (
      <Content.Consumer>
        { shit => {
          console.log(shit, ' HOCCC shit');
          return (
            <SUCK {...props} {...shit}/>
          )
        }}
      </Content.Consumer>
    )
  }
// import React from "react"
// import ReactDom from "react-dom"
// import propTypes from "prop-types"
// import Content from "./contents.js"
// import Subone from "./subone.jsx"
// import HOC from "./HOC.jsx"
// // <Content.Consumer>
// // function Hehe(props){
// //   console.log(props, `props`);
// //   return (
    
// //   )
// // }
// class ASDGF extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log(`this.props.age`, this.props)
//     return (
//       <Subone age={this.props.age} {...this.props} />
//     )
//   }
// }
// export default HOC(ASDGF);


// import React from "react"
// import ReactDom from "react-dom"
// import propTypes from "prop-types"
// import Content from "./contents.js"
// import Subone from "./subone.jsx"
// // <Content.Consumer>
// function Hehe(props){
//   console.log(props, `props`);
//   return (
//     <Subone {...props}/>
//   )
// }
// export default class Father extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log(`this.props.age`, this.props.age)
//     return (
//       <Content.Consumer>
//         { props => <Subone age={this.props.age} {...props}/>}
//       </Content.Consumer>
//     )
//   }
// }
