import React from 'react';

class AddOption extends React.Component{
    formsubmit(e){
        e.preventDefault()
        console.log("form submit")
    }
    render(){
        return(<div>
             <form onSubmit={this.formsubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>)
    }
}

export default AddOption;