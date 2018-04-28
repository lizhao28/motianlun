import React, { Component } from 'react';
 import{Featured,Mine,Show} from './javascripts/page'

import { connect } from 'react-redux'
import Header from "./javascripts/Header";
import Footer from "./javascripts/Footer";
//路由
import{
	Route,
  Switch,
  withRouter
}from 'react-router-dom'
import{Login}from "./javascripts/page"
const routes = [
	{id:1,path:'/',component:Featured,exact:true},
	{id:2,path:'/show',component:Show},
  {id:3,path:'/mine',component:Mine},
  {id:4,path:'/login',component:Login}
]

class App extends Component {
hasHeader(){
   let pathname = this.props.location.pathname
   let unneed = ['/mine','/login']
   let flag = unneed.some(item=>{
     if(pathname.startsWith(item)){
       return true
     }
     return false
   })
    return !flag
}

  render() {

    let { pathname } = this.props.location
    return (
      <div >
		{
        !this.hasHeader() || <Header/>
    }
			<Switch>
				{
					routes.map(item =>{
						return <Route exact={item.exact} path={item.path} component={item.component} key={item.id}/>
					})
				}
      </Switch>
      {
          pathname.startsWith('/mine') ? '' : <Footer />
      }
      </div>
    );
  }
}


export default withRouter(connect(state=>state)(App));















/*
		´´´´´´´´██´´´´´´´
		´´´´´´´████´´´´´´
		´´´´´████████´´´´
		´´`´███▒▒▒▒███´´´´´
        ´´´███▒●▒▒●▒██´´´
        ´´´███▒▒▒▒▒▒██´´´´´
        ´´´███▒▒▒▒██´                      项目：	react 摩天轮
        ´´██████▒▒███´´´´´                 语言： ES6-babel
        ´██████▒▒▒▒███´´                   框架： react
        ██████▒▒▒▒▒▒███´´´´                构建工具： webpack
        ´´▓▓▓▓▓▓▓▓▓▓▓▓▓▒´´                 版本控制： git-github
        ´´▒▒▒▒▓▓▓▓▓▓▓▓▓▒´´´´´              css预处理: scss
        ´.▒▒▒´´▓▓▓▓▓▓▓▓▒´´´´´             编辑器： vscode
        ´.▒▒´´´´▓▓▓▓▓▓▓▒                   
        ..▒▒.´´´´▓▓▓▓▓▓▓▒                  
        ´▒▒▒▒▒▒▒▒▒▒▒▒                      
        ´´´´´´´´´███████´´´´´              
        ´´´´´´´´████████´´´´´´´
        ´´´´´´´█████████´´´´´´
        ´´´´´´██████████´´´´             
        ´´´´´´██████████´´´                     
        ´´´´´´´█████████´´
        ´´´´´´´█████████´´´
        ´´´´´´´´████████´´´´´
        ________▒▒▒▒▒
        _________▒▒▒▒
        _________▒▒▒▒
        ________▒▒_▒▒
        _______▒▒__▒▒
        _____ ▒▒___▒▒
        _____▒▒___▒▒
        ____▒▒____▒▒
        ___▒▒_____▒▒
        ███____ ▒▒
        ████____███
        █ _███_ _█_███
——————————————————————————女神保佑，代码无bug——————————————————————
*/