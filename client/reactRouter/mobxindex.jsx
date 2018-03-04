import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter as Router, HashRouter, Route, Link } from 'react-router-dom'

import Index from "../mobxjsx/index.jsx"
import A from "../mobxjsx/a.jsx"
import B from "../mobxjsx/b.jsx"
import C from "../mobxjsx/c.jsx"
import D from "../mobxjsx/d.jsx"

import AA from "../mobxjsx/aa.jsx"

export default class Routerssss extends React.Component{
  constructor(props){
    super(props);
    this.comps = [
      {
        name: "A",
        path: "A",
        comp: A
      },
      {
        name: "B",
        path: "B",
        comp: B
      },
      {
        name: "C",
        path: "C",
        comp: C
      },
      {
        name: "D",
        path: "D",
        comp: D
      }
    ]
  }
  render(){
    return (
      <Router>
        <div id="olzalaaa">
          <h2>stable</h2>
          {
            this.comps.map((item, index) => {
              return (
                <Link to={`/${item.path}`} key={item.path}>{item.name}</Link>
              )
            })
          }
          <Route path="/" exact component={Index} />
          <Route path="/a/a" exact component={AA} />
          <Route path="/:comps" exact render={(locations) => {
            console.log(locations, locations.params, `********************`)
            let r = this.comps.filter(item => item.path === locations.match.params.comps);
            console.log(r[0]);
            if(r.length){
            let RRR = r[0].comp;
              return <RRR />
            }
            return (<h2>not components mounted</h2>)
          }} />
          <Route path="" render={(locations) => {
            console.log(locations, locations.params, `********************`)
            return (
              <h1 style={{color: `red`}}>{locations.location.pathname} 11111111111</h1>
            )
          }} />
        </div>
      </Router>
    )
  }
}