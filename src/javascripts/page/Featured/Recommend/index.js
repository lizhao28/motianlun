import React,{Component} from "react"
import "./index.scss"
import axios from "axios";

const Recommends = props=>{
    let { showName, posterURL, venueName, firstShowTime, lastShowTime, discount, minPrice}=props.info

    return(
        <li className="list-li">
            <div className="list-left">
                <a>
                    <img width="100%" src={posterURL} alt="" />
                </a>
            </div>
            <div className="list-right">
                <p>{showName}</p>
                <em>{firstShowTime}-{lastShowTime}</em>
                <em>{venueName}</em>
                <span>可选座</span><br />
                <div className="list-dazhe" > < span >
                    {discount} </span>折起 </div>
                <p className="lsit-lq"><strong> {minPrice}</strong> 元起</p>

            </div>
        </li>
    )
}


class Recommend extends Component{
    constructor(props){
        super(props)
        this.state = {
            recommends:[]
        }
    }
    getRecommend(){
        axios.get('https://m.tking.cn/showapi/pub/site/1002/hot_show?&offset=0&length=30&siteCityOID=1101&time=1524724817599&src=m_web').then(res=>{
            this.setState({
                recommends:res.data.result.data
            })
        })
    }
    componentWillMount() {
        this.getRecommend()
    }
    render(){
        let { recommends} = this.state
        return(
            <div className="wntj">
                <div className="tj">
                    <i>为你推荐</i>
                </div>
                <div>
                    <ul>
                        {/*<li className="list-li">
                            <div className="list-left">
                                <a>
                                    <img width="100%" src="https://img1.tking.cn/assets/img/yKjCES38hP.jpg" alt=""/>
                                </a>
                            </div>
                            <div className="list-right">
                                <p>【沈阳站】【A CLASSIC TOUR学友·经典】张学友世界巡回演唱会</p>
                                <em>2018.06.30-2018.07.01</em>
                                <em>2018.06.30-2018.07.01</em>
                                <span>可选座</span><br/>
                                 <div className = "list-dazhe" > < span >
                                     9.9 </span>折起 </div>
                                <p className="lsit-lq"><strong> 342</strong> 元起</p>
                               
                            </div>
                        </li>*/}
                        {
                            recommends.map(item=>{
                                return <Recommends info={item} key={item.showOID}/>
                            })
                        }
                    </ul>
                </div>
           </div>
        )
    }
}

export default Recommend