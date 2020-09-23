import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
// redux-thunk的作用是使只能传递对象的dispatch可以传递一个函数
import thunk from 'redux-thunk'
// 支持开发者调试工具的运行
import {composeWithDevTools} from 'redux-devtools-extension'

//其作用就是创建一个仓库，当调用这个文件时就是想要创建一个仓库
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))