import React,{Component} from "react"
import CommentInput from "./CommentInput"
import CommentList from "./CommentList"
class CommentApp extends Component{
    constructor(){
        super()
        this.state={
            comments:[]
        }
    }
    handleSubmitComment(comment){
        this.state.comments.push(comment)
        this.setState({
            comments:this.state.comments
        })
    }
    render(){
        return(
            <div className="wrapper">
                <!--负责增加评论-->
                <CommentInput
                onSubmit={this.handleSubmitComment.bind(this)}/>
                <!--负责显示评论-->
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp