import React, {Component} from 'react'
import { message } from 'antd'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
/*
应用根组件
 */
export default class App extends Component {

  handleClick = () => {
    message.success('成功啦...');
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          {/* 路由其实就是一种映射关系，即有key和value组成 
                无论是前台路由还是后台路由，key都是path
                value对于前台路由来说是component，而对于后台路由来说则是处理请求的回调函数
          */}
          <Route path="/login" component={Login} />
          <Route path="/" component={Admin} />
        </Switch>
      </HashRouter>
    )
  }
}
