import React,{Component} from "react"
class Input extends  Component{
    constructor(){
        super()
        this.state={
            num_to_convert:0
        }
    }
    handleConvert(event){
        this.setState({num_to_convert:event.target.value})
        if(this.props.onConvert)
        {
            this.props.onConvert(event.target.value)
        }
        //this.setState({num_to_convert:0})
    }
    render(){
        return(
            <div>
                <input type = 'number'
                onChange={this.handleConvert.bind(this)}/>
            </div>
        )
    }
}
export default Input