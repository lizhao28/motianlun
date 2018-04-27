import React,{Component} from "react"
import './index.scss'

import axios from "axios"

const ShowItem = props=>{
    let { showName, posterURL, venueName, firstShowTime, lastShowTime, discount, minPrice} = props.info
    return(
        <li className="wntjli">
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
            <div className="list-dazhe" > <span >
                    {discount} </span>折起 </div>
                <p className="lsit-lq"><strong>  {minPrice}</strong>元起</p>

        </div>
        </li>
    )
}
class Showitem extends Component{
    constructor(props) {
        super(props)
        this.state = {
            shows: []
        }
    }
    getShowitem(){
        axios.get('https://m.tking.cn/showapi/pub/site/1002/topMarketingShows?siteCityOID=1101&time=1524745866101&src=m_web').then(res=>{
            console.log(res);
           this.setState({
               shows: res.data.result.data.presaleShows
           })
        })
    }
    componentWillMount() {
        this.getShowitem()
    }
    render(){
        let { shows } = this.state
        return(
            <div className="wntj">
                <div className="wntidiv">
                    <ul>
                    {
                        shows.map(item=>{
                                return <ShowItem info={item} key={item.showOID}/>
                        })
                    }
                        
                    </ul>
                </div>
            </div>
        )
    }
}

export default Showitem