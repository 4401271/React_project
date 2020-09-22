// 步骤二：创建一个中间人，专门用于将操作的名称和操作的数据封装成对象
// 中间人这里才调用了每个功能对应的操作
import {ADD, DEC} from './action_types'

export const createAddAction  = value => ({type:ADD, data:value})
export const createDecAction  = value => ({type:DEC, data:value})