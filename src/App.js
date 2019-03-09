import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/controls/Input';

class App extends Component {
  state={
    words:"",
    data:[]
  }
  onChange=(event)=>{
    this.setState({words:event.target.value});
  }
  
  onSubmit=(event)=>{
    event.preventDefault();
    this.populateTable();
  }

  populateTable=()=>{
    const data = [];
    const words =this.state.words===""?[]:this.state.words.split(" ");
    const rows = Math.ceil(words.length/4);
    debugger;
    for(let i=0;i<rows;i++){
      let initial=[];
      for(let j=0;j<4;j++){
        words[i*4+j]? initial.push(words[i*4+j]): initial.push("")
      }
      data.push(initial);
    }
    this.setState({data});
  }

  onClick=(e,cell)=>{
    e.preventDefault();
    const {words} = this.state;
    console.log(words);
    this.setState({words:words.toString().split(" ").filter((word)=>word!==cell).join(" ")},function(){
      console.log(this.state.words);
      this.populateTable();
    });
  }

  render() {
    const {words,data}=this.state;
    console.log(data);
    return (
      <div className="App">
        <form>  
          <Input name="words" type="text" value={words} onChange={this.onChange}/>
          <Input type="submit" value="SUBMIT" onClick={this.onSubmit}/>
          {data.length?<table border="1">
            <tbody>
          {data.map((val)=>{
            return (<tr>{val.map(cell=>
              {
              return (<td style={{width:'20%'}}>
                {cell}      {cell&& <button onClick={(e)=>this.onClick(e,cell)}>&#x2715;</button>}
            </td>)
            
          }
            )}</tr>)
            }
          )}
          </tbody>
          </table>:null}
        </form>
      </div>
    );
  }
}

export default App;
