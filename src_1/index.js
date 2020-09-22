import React from 'react'
import ReactDOM from 'react-dom'
//核心的store和入口文件做对话，那个子文件需要就把它传过去即可
import store from './redux/store'
import App from './App'

ReactDOM.render(<App store={store}/>,document.getElementById('root'))
// 让store中存储的状态发生改变时强制渲染一次
store.subscribe(()=>{
  ReactDOM.render(<App store={store}/>,document.getElementById('root'))
})

