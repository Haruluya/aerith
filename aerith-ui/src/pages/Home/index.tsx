import React from 'react'
import {connect} from 'dva'



function home(props:any) {
  console.log(props);
  return (
    <div>home</div>
  )
}


export default connect((state:any)=>state.home)(home)
