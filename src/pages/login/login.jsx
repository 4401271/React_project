import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './login.less'
import logo from './images/logo.png'

const {Item} = Form

export default class Login extends Component {

  onFinish = values => {
    console.log(values)
  }

  render() {
    return (
      <div className="login">
        <div className="login_header">
          <img src={logo} alt=""/>
          <h1>后台管理系统</h1>
        </div>
        <div className="login_content">
          <h1>用户登录</h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            // 绑定监听
            onFinish={this.onFinish}
          >
            {/* Item是由Form.Item个组件  */}
            {/* 用户名  */}
            <Item
              name="username"
              rules={[
                // 添加输入框限定条件 必填+不填时的提示信息
                {
                  required: true,
                  message: '请输入您的用户名!',
                },
                {
                  min:6,
                  message:"用户名格式错误，长度最少为4位！"
                },
                {
                  max:11,
                  message:"用户名格式错误，长度最多为11位！"
                },
                {
                  /* ?:0个或一个   *:0个或多个   +:一个或多个  必须要有^和$*/
                  pattern:/^[a-zA-Z0-9_]$/,
                  message:"用户名仅可以由字母、数字和下划线\"_\"组成！"
                },
              
              ]
            }
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" style={{color:'rgba(0,0,0,.25)'}}/>} placeholder="用户名" />
            </Item>
            {/* 密码  */}
            <Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入您的密码!',
                },
                {
                  min:6,
                  message:"密码格式错误，长度最少为4位！"
                },
                {
                  max:16,
                  message:"密码格式错误，长度最多为16位！"
                },
                {
                  pattern:/^[a-zA-Z0-9_]$/,
                  message:"密码仅可以由字母、数字和下划线\"_\"组成！"
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" style={{color:'rgba(0,0,0,.25)'}}/>}
                type="password"
                placeholder="密码"
              />
            </Item>
            {/* 登录按钮  */}
            <Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    )
  } 
}


/* 

  将上述代码进行简单修改：
    class Login extends Component {
      ...
    } 

    const WrapperLogin = Form.create()(Login)
    export default WrapperLogin

    在检查中就可以看到<Login>外侧包裹了一个<Form(Login)>标签

  ------------------------------------------------------------------------------------------  

  --------- 高阶函数：------------------
    接受的参数是函数，返回值也是函数

    数组相关的函数（例如map）、定时器、Prominse接受回调函数作为参数、.then接受的也是带参数的回调函数
      高阶组件的新功能create函数可以包装组件，然后再返回一个组件

    高阶函数接收的参数是一个函数，因此接收的参数就更加灵活，动态化更强，并且由于返回值也是个函数，因此
      高阶函数的功能更加强大

  --------- 高阶组件：------------------
    本质是一个函数
    函数接受一个组件

    Form.create()返回的就是一个高阶组件Form.create()(Login)接受的参数是Login，Login就是个组件
      但是！<Login/>是一个标签，就不是一个组件，它是Login组件的实例化对象，实例化对象的返回值就是一个标签

  --------- 声明式编程 -----------------
    map函数就是体现了声明式编程的思想，map遍历的过程不需要我们去写，已经被封装好了，我们只需要被被遍历
      的每个元素进行操作即可

*/
