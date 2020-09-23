import React,{Component} from 'react'
import { Button,Form,Input,message } from 'antd';
import { Icon } from '@ant-design/compatible'
import {connect} from 'react-redux'
import {createDemo1Action, createDemo2Action} from '../../redux/action_creators/test_action'
import './css/login.less'
import logo from './imgs/logo.png'
const {Item} = Form

// 由于每个UI组件都对应一个容器，因此如果将他们都分开写需要多一倍的文件，整合在一起效果相同，但是更整洁
class Login extends Component{
  
  //点击登录按钮的回调
  handleSubmit = (event)=>{
    //阻止默认事件--禁止form表单提交---通过ajax发送
    event.preventDefault();
    //表单的统一验证
    this.props.form.validateFields((err, values) => {
      if(!err){
        alert('想服务器发送登录请求！')
      }else{
        message.error('表单输入有误，请检查！')
      }
    });
  }

  //密码的验证器---每当在密码输入框输入东西后，都会调用此函数去验证输入是否合法。自定义校验，即：自己写判断
  pwdValidator = (rule,value,callback)=>{
    if(!value){
      callback('密码必须输入')
    }else if(value.length>12){
      callback('密码必须小于等于12位')
    }else if(value.length<4){
      callback('密码必须大于等于4位')
    }else if(!(/^\w+$/).test(value)){
      callback('密码必须是字母、数字、下划线组成')
    }else{
      callback()
    }
  }

  render(){
    const {getFieldDecorator} = this.props.form;
    //从redux中获取用户的登录状态
    return (
      <div className="login">
        <header>
          <img src={logo} alt="logo"/>
          <h1>商品管理系统</h1>
        </header>
        <section>
          <h1>用户登录</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Item>
            {getFieldDecorator('username', {
                rules: [
                  {required: true, message: '用户名必须输入！'},
                  {max: 12, message: '用户名必须小于等于12位'},
                  {min: 4, message: '用户名必须大于等于4位'},
                  {pattern: /^\w+$/, message: '用户名必须是字母、数字、下划线组成'},
                ],
              })(
                <Input 
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}}/>}
                    placeholder="用户名"
                />,
              )}
            </Item>
            <Item>
            {getFieldDecorator('password', {
                rules: [
                  {validator: this.pwdValidator},
                ],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />
              )}
            </Item>
            <Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Item>
          </Form>
        </section>
      </div>
    )
  }
}

//将UI组件和redux进行连接，连接后在页面修改数据时才能将数据保存到store中
export default connect(
  //父亲给孩子传递的参数
  state => ({test:state.test}), 
  {
    demo1:createDemo1Action,
    demo2:createDemo2Action
  }
)(Form.create()(Login))