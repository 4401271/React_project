// 步骤三，将对应名字的数据进行相应的操作
// 这里面具体的操作是被中间人调用的
// 存放被频繁使用的操作，如本例中的加、减

import {ADD, DEC} from './action_types'

//设置初始值
let initCount = 0

//preCount不传值的时候即等于initCount
export default function reducer(preCount=initCount, action){
  // 原则：不能修改传递过来的参数
  const {type, data} = action
  switch (type) {
    case ADD:
      return preCount + data

    case DEC:
        return preCount - data

    default:
      return preCount
  }
}