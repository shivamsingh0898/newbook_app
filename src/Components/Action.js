import React from 'react';

class Action extends React.Component{
    handlepick(){
        console.log("Handle pick is called")
    }
    render(){
        return(<div>
            <button onClick={this.handlepick}>Which book shall I read?</button>
        </div>)
    }
}

export default Action;