import React,{Component} from "react"
import "./index.scss"

import{NavLink}from 'react-router-dom'
let FooterItem = props =>{
    let {title,icon,path}= props.info
    return(
        <NavLink exact activeClassName={`active`}to = { path }>
            <i className={`iconfont icon-${icon}` }></i>
            <span>{title}</span>
        </NavLink>
    )

}


class Footer extends Component{
    render(){
        let { navs } = this.props
        return(
           
           <div className="footer-bot">
                {/*<a>
                    <i className="iconfont icon-sousuo"></i>
                    <span>我的</span>
                </a>*/}
                {
                    navs.map(item=>{
                        return<FooterItem info ={ item } key={item.id}/>
                    })
                }
           </div>
        )
    }
}

Footer.defaultProps={
    navs : [
        { id: 1, title: '精选', icon: 'fl-jia',path:'/'},
        { id: 2, title: '演出', icon: 'yanchufuwu',path:'/show' },
        { id: 3, title: '我的', icon: 'wodedamaijihuo',path:'/mine' }
    ]
}
export default Footer