import React,{Component} from "react"
import "./index"
import ShowHeader from './ShowHeader'
import Showitem from './ShowItem'
import Showli from './Showli'
class Show extends Component{
    render(){
        return(
           <div  className="mg">
                <ShowHeader/>
              
                <Showli/>
           </div>
        )
    }
}

export default Show