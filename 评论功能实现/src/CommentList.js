import React,{Component} from "react"
import Comment from "./Comment"
class CommentList extends Component{
    render(){
        const comments=[
            {username:"Tom",content:"I am a good man"},
            {username:"Mary",content:"Just so so"},
            {username:"Jack",content:"Fuck you off"}
        ]
        return(
          <div>
              {comments.map((comment,i)=> <Comment comment={comment} key={i}/>)}
          </div>
        )
    }
}

export default CommentList