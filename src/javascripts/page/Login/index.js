import './index.scss'

import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

import { bindActionCreators } from 'redux'
import actionCreator from '../../../store/user/actionCreator'
class Login extends Component {

	componentWillReceiveProps (props) {
		if(props.user.username) {
			props.history.replace('/mine')
		}
	}
    render () {
        return (
				
			<div className="">
				<div className="bar">
					<Link to="/" className="iconfont icon-sanjiaoxing-down"></Link>
					<h1 className="title">登录摩天轮票务</h1>
					
				</div>
				<div className="login">
					<input tupe="text" placeholder="请输入手机号码"/>
					
				</div>
				<div className="yzm">
					<input tupe="text" placeholder="请输入验证码" />
					<a>
						获取验证码
					</a>
				</div>
				<div className="denglu">
					<button onClick  = {this.props.login}>登录</button>
				</div>
			</div>
            
        )
    }

}

export default connect(state => state,dispatch =>{
	return bindActionCreators(actionCreator,dispatch)
}) (Login)