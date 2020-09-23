import React,{Component} from 'react'
import {connect} from 'react-redux'
import {createDemo1Action} from '../../redux/action_creators/test_action'

class Admin extends Component{

  render(){
    return(
      <div>
        Admin
      </div>
    )
  }
}
export default connect(
  // state是container组件传递给UI组件的参数，containers是父，UI组件是子
  state => ({peiqi:state.test}),
  {
    demo1:createDemo1Action
  }
)(Admin)

