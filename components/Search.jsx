import  { Component } from 'react'

export class Search extends Component {
    constructor(){
        super();
        this.state={
            input: ""
        }
    }
    handleinput = (event) =>{
        this.setState({input: event.target.value})
    }
  render() {
    return (
      <div className='search'>
        <h1>Track Your Diet</h1>
        <input placeholder='Enter your food item ...' value={this.state.input} onChange={this.handleinput}></input>
      </div>
    )
  }
}

export default Search