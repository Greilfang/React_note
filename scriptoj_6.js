class Dog extends Component {
    constructor () {
        super()
        this.state = {
            isRunning: false,
            isBarking: false
        }
    }
    bark () {
        console.log('bark')
        this.setState({ isBarking: true })
        setTimeout(() => this.setState({ isBarking: false }), 20)
    }

    run () {
        console.log('run')
        this.setState({ isRunning:true })
        setTimeout(() => this.setState({ isRunning: false }), 20)
    }

    render () {
        return (<div onClick={()=>{this.bark();this.run();}}>DOG</div>)
    }
}