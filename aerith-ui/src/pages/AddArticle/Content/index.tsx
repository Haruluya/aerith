import React from 'react'
import {Input} from 'antd'
export default function () {
  return (
    <div><Input.TextArea showCount defaultValue="输入帖子内容:" maxLength={2000} style={{ height: 250 }}/></div>
  )
}
