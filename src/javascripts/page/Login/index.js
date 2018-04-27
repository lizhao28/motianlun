import './index.scss'

import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
class Login extends Component {

	componentWillReceiveProps (props) {
		if(props.user.username) {
			props.history.replace('/mine')
		}
	}
    render () {
        return (
				
			<div>
				<header className="bar">
					<Link to="/" className="iconfont icon-sanjiaoxing-down"></Link>
					<h1 className="title">登录摩天轮票务</h1>
				</header>
			</div>
            
        )
    }

}

export default Login