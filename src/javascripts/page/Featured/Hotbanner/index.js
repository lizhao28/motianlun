import React,{Component} from "react"
import "./index.scss"

import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
import axios from "axios"
const SwiperSlide2 =props=>{
    let { posterURL,showName,latestShowTime ,minPrice} =props.info   
    return(
        <div className="swiper-slide lubo-div">
                <img  src={posterURL} alt=""/>
               <div className="divv">
                    <i>{showName} </i>
                    <span>{latestShowTime}</span>
                    <em>
                    <strong>{minPrice}</strong>
                    元起</em>
               </div>
         </div>
    )
}
class HotBanner extends Component{
    constructor (props){
        super(props)
        this.state={
            hotbanners:[]
        }
    }
    getHotbnners(){
        axios.get('https://m.tking.cn/showapi/pub/site/1002/topMarketingShows?siteCityOID=1101&time=1524657911343&src=m_web').then(res=>{
     
        this.setState({ hotbanners:res.data.result.data.recentShows} )
        })
    }
     componentWillMount () {
        this.getHotbnners()
    }
    render(){
        let {hotbanners} = this.state
        return(
            <div className="hotbanner">
                    <div className="jinhot">
                    <span>
                        近期热门
                    </span>
                        <i>
                        查看更多
                        </i>
                    </div>
                  <div className="swiper-container lunbo2">
                        <div className="swiper-wrapper ">
                           {/* <div className="swiper-slide lubo-div">
                                <img  src="https://img2.tking.cn/assets/img/Ey43YK7Dre.jpg" alt=""/>
                            </div>
                        */}
                            {
                                hotbanners.map(item=>{
                                    return <SwiperSlide2 info={item} key={item.showOID}/>
                                })
                            }
                        </div>
                    </div>
            </div>
        )
    }
    componentDidUpdate () {
        new Swiper('.lunbo2',{
            slidesPerView: 3,
            // spaceBetween: 100,
            freeMode: true,
            pagination:{
                el:'.swiper-pagination'
            }
        })
    }
}

export default HotBanner