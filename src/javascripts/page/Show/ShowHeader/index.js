import React,{Component} from "react"
import "./index.scss"

let Liinfo = props =>{
    let { title } = props.info
    return (
        <li>
            {title}
        </li>
    )
}

class ShowHeader extends Component{
    render(){
        let { lis } = this.props 
        return(
           <div className="showtop">
                <ul className="showul">
                   {
                        lis.map(item => {
                            return <Liinfo info={item} key={item.id} />
                        })
                   }
                </ul>
           </div>
        )
    }
}
ShowHeader.defaultProps={
    lis:[
        {id:1,title:"全部"},
        { id: 2, title: "演唱会" },
        { id: 3, title: "话剧歌剧" },
        { id: 4, title: "体育赛事" },
        { id: 5, title: "音乐会" },
        


    ]
}
export default ShowHeader
