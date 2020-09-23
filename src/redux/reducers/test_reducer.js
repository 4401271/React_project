// 该文件会对状态进行指定操作

import {TEST1, TEST2} from '../action_types'

let initState = 'hello'
export default function test(preState = initState, action){
  let {type, data} = action
  let newState
  switch (type) {
    case TEST1:
      newState = preState + data
      return newState
    case TEST2:
      newState = preState + data + '!'
      return newState
    default:
      return preState
  }
}