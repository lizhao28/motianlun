import React,{Component} from "react"
import "./index.scss"
import "swiper/dist/css/swiper.min.css"

import Banner from "./Banner" //引入轮播图

import NavList from "./NavList"

import HotBanner from "./Hotbanner" //第二个轮播图
import Recommend from "./Recommend"
class Featured extends Component{
    render(){
        return(
           <div className="mg">
                <Banner/>
                <NavList/>
                <HotBanner/>
                <Recommend/>
           </div>
        )
    }
}

export default Featured