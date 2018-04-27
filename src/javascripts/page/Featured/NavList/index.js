import React,{Component} from "react"
import "./index.scss"

const Navlist =props=>{
    let { title,icon } =props.info
    return(
         <a>
             <i className={`iconfont icon-${icon}`}></i>
            {title}
        </a>
    )
}

class NavList extends Component{
   
    render(){
         let { lists}  = this.props
        return(

           <div className="navlist">
              { /* <a>
                    <i className="iconfont icon-sousuo"></i>
                    演唱会
                </a>
              */ }
              {
                  lists.map(item=>{
                      return <Navlist info ={ item } key={item.id} />
                  })
              }
           </div>
        )
    }
}
NavList.defaultProps={
    lists:[
        {id:1,title:'演唱会',icon:'yanchanghui'},
        {id:2,title:'话剧歌剧',icon:'yanchufuwu'},
        {id:3,title:'音乐',icon:'yinlehui'},
        {id:4,title:'体育',icon:'tiyuzhuanhuan'},
        {id:5,title:'更多',icon:'ai238'}
    ]
}

export default NavList