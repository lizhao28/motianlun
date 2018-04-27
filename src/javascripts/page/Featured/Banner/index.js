import React,{Component} from "react"
import "./index.scss"
import axios from "axios"
import "swiper/dist/css/swiper.min.css"
import Swiper from "swiper"

const SwiperSlide = props =>{
    let { posterUrl } =props.info
    return (
          <div className="swiper-slide">
             <img width ="100%" src ={ posterUrl } alt = ""/>
         </div>      
    )
}

class Banner extends Component{
    constructor (props){
        super(props)
        this.state={
            banners:[]
        }
    }
    getBanners(){
        axios.get('https://m.tking.cn/showapi/pub/site/1002/banner/app?bannerCategory=&siteCityOID=1101&time=1524637036683&src=m_web').then(res=>{
      
            
            this.setState({ banners:res.data.result.data} )
            
        })
    }
     componentWillMount () {
        this.getBanners()
    }
    render(){
        let { banners } = this.state
        return(
            <div className="swiper-container lunbo1">
                <div className="swiper-wrapper">
                    {
                        banners.map(item=>{
                            return <SwiperSlide info={item} key={item.bannerOID} />
                        })
                    }
                </div>
                <div className="swiper-pagination"></div>
           </div>
        )
    }
     componentDidUpdate () {
        new Swiper('.lunbo1',{
            autoplay:true,
            pagination:{
               el: '.swiper-pagination',
             clickable: true,
            }
        })
    }
}

export default Banner