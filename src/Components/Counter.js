import React from 'react';

class Counter extends React.Component{
    constructor(){
        super()
        this.pluscount= this.pluscount.bind(this)
        this.minuscount= this.minuscount.bind(this)
        this.reset= this.reset.bind(this)
        this.state = {
            count: 0
        }
    }
    pluscount(){
        this.setState((previouState)=>{
            return{
                count: previouState.count +1
            }
        })
    }
    minuscount(){
        this.setState((previouState)=>{
            return{
                count: previouState.count -1
            }
        })
    }
    reset(){
        this.setState((previouState)=>{
            return{
                count: 0
            }
        })
    }
    render(){
        return(
            <div>
                <h1>count:{this.state.count}</h1>
                <button onClick={this.pluscount}>+1</button>
                <button onClick={this.minuscount}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

export default Counter;