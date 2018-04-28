import React,{Component} from "react"
import "./index.scss"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
class Mine extends Component{
    componentWillMount(){
       if(!this.props.user.username){
           this.props.history.replace('/login')
       }
    }
    render(){

        return (
         
                <header className="bar bar-nav">
                <Link to="/" className="iconfont icon-sanjiaoxing-down"></Link>
                    <a className="icon icon-refresh pull-right"></a>
                    Mine --{this.props.user.username}
                </header>
           
        )
    }
}

export default connect(state=>state)(Mine)