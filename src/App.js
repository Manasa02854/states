import React,{Component} from 'react' 
import JSON from './user.json'
// import Users from './Users'
import './global.css'
 
class App extends Component
{
  constructor()
  {
    super()
    {
      // this.state={
      //   json:JSON
      // }
      this.state={
        count:0
      }
    }
  }
  incrementButton =()=>{
    this.setState({count:this.state.count+1})
  }
  decrementButton =()=>{
    this.setState({count:this.state.count-1})
  }
  resetButton=()=>{
    this.setState({count:0})
  }
  render()
  {
    return<>
    {/* <Users data={this.state.json}/> */}
    <div className='counter'>
      <h1>Counter Application</h1>
     <h1>{this.state.count}</h1>
     <button  className='increment'  onClick={ this.incrementButton}>+</button>
     <button className='decrement' onClick={this.decrementButton}>-</button>
     <button className='reset' onClick={ this.resetButton}>0</button>
     </div>
    </>
  }
}

export default App