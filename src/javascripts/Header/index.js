import React,{Component} from "react"
import "./index.scss"
import{
    withRouter
} from 'react-router-dom'
class Header extends Component{
    render(){
        let { pathname } = this.props.location
        return(
            
           <div className="app-top">
           
                <div className="top-dingwei">北京<i className="iconfont icon-sanjiaoxing-down"></i></div>
                <form>
                    <span className="iconfont icon-sousuo"></span> <input type="text" placeholder="共有6247场折扣演出在售"/>                
                </form>
               
                <div className="top-rl">
                    {
                        pathname.startsWith('/show') ? '' : <i className=" iconfont icon-iconset0208"></i>
                     }
                </div>
               
           </div>
        )
    }
}

export default withRouter(Header)

