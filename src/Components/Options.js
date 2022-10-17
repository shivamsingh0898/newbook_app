import React from 'react';
import Option from './Option';

class Options extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.options)
        this.handleremoveall = this.handleremoveall.bind(this)
    }
    handleremoveall(){
        console.log(this.props.options)
    }
    render(){
        return(<div>
            <button onClick={this.handleremoveall}>Remove All</button>

               {
                this.props.options.map((book)=>{return <Option optiontext={book} />})
               }

        </div>)
    }
}

export default Options;