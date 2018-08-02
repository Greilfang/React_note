class Lesson extends Component {
    constructor(){
        super();
    }
    render(){
        //创造了一个this.props.lesson,并令lesson为它
        //key属性为内置
        const lesson = this.props.lesson
        return(
            //this.props里有index,key和lesson
            <div onClick={()=>console.log(`${this.props.index} - ${lesson.title}`)}>
                <h1>{lesson.title}</h1>
                <p>{lesson.description}</p>
            </div>
        )
    }
}
//Lesson类里不涉及数组的实体,在LessonList的render方法里被传入
class LessonsList extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div>{
                this.props.lessons.map((les,i)=>{
                    //Lesson.props里的属性被传值
                    return <Lesson key={i} index={i} lesson={les} />})
            }</div>
        )
    }
}