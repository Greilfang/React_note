/*defaultProps 默认Props属性配置
* Props属性在类的内部是不可以改变的,但是在外部可以重新传入
* 用到类本身时,不要忘记bind(this)*/
class Computer extends Component {
    constructor(){
        super();
        this.state={
            status:"off"
        }
    }

    handleClick(){
        this.setState({
            status:this.state.status=="off"?"on":"off"
        })
    }

    render () {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>开关</button>
                <Screen
                    showContent={this.state.status=="off"?"显示器关了":"显示器亮了"}
                />
            </div>
        )
    }
}

class Screen extends Component {
    constructor(){
        super()
    }
    static defaultProps={
        showContent:"无内容"
    }
    render () {
        return (
            <div className='screen'>
                {this.props.showContent}
            </div>
        )
    }
}
