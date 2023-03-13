import React from "react"
import { Component  } from "react"
  

class App extends Component
{
  state={
    topic:"movies",
    names:["Kanatara","Kgf","UlidaruKandante","Ricky"]
  }
  render()
  {
    return(
      <>
      <h1>{this.state.topic}</h1>
      <ol type='A'>
        {this.state.names.map((x)=>{
          return <li>{x}</li>
        })}
      </ol>
      </>

    )
  }
}
export default App;
