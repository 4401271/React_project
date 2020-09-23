// 该文件负责对不同的reducer进行汇总整合，在container中被调用（由于使用了thunk，就不必使用dispatch）时，集中修改store中指定的状态

import testReducer from './test_reducer'
import {combineReducers} from 'redux'

export default combineReducers({
  test:testReducer
})