import React,{Component} from "react"
import Input from "./Input"
import PercentageShower from "./PercentageShower"

class PercentageApp extends Component{
    constructor(){
        super();
        this.state={
            percentage:0
        }
    }
    handleConvertToPercentage(inum) {
        console.log("test1"+inum)
        let temp = inum * 100;
        temp=temp.toFixed(2)
        console.log("test2"+temp)
        this.setState({percentage:temp.toString()+"%"})
    }
    render(){
        return(
            <div>
                <Input onConvert={this.handleConvertToPercentage.bind(this)}/>
                <PercentageShower percentage={this.state.percentage}/>
            </div>
        )
    }
}
export default PercentageApp