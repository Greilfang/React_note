import React,{Component} from "react"
class PercentageShower extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                {this.props.percentage}
            </div>
        )
    }
}
export default  PercentageShower