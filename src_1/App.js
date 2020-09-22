import React, {Component} from 'react'
import {createAddAction, createDecAction} from './redux/action_creator'

export default class App extends Component {

  add = ()=>{
    let {value} = this.refs.num
    // 步骤一：将操作对应数据传递过去
    // 这里面的：createAddAction并没有调用相应的方法，而是在中间人中通过对应名字创建了相应的对象 
    //dispatch类似于setstate，专门用来调整状态
    //这里面不再需要获取原来的值，原因是只需要告诉dispatch需要做什么，dispatch会帮助我们去对原来的值进行调整
    this.props.store.dispatch(createAddAction(value*1))
  }
  dec = ()=>{
    let {value} = this.refs.num
    this.props.store.dispatch(createDecAction(value*1))
  }
  addIfOdd = ()=>{
    // 从select中的ref取数据时需要先取出num对应的select，然后在取出select对应的value
    let count = this.props.store.getState()
    let {value} = this.refs.num
    if (count%2 === 1) {
      this.props.store.dispatch(createAddAction(value*1))
    }
  }
  addWaitOneS = ()=>{
    let {value} = this.refs.num
    setTimeout(()=>{
      this.props.store.dispatch(createAddAction(value*1))
    },1000)
  }

  render() {

    let count = this.props.store.getState()

    return (
      <div>
        <h1>今天我吃了{count}个馒头</h1>
        <select ref="num">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.add}>+</button>&nbsp;&nbsp;
        <button onClick={this.dec}>-</button>&nbsp;&nbsp;
        <button onClick={this.addIfOdd}>addIfOdd</button>&nbsp;&nbsp;
        <button onClick={this.addWaitOneS}>addWaitOneS</button>&nbsp;&nbsp;
      </div>
    )
  }
}
