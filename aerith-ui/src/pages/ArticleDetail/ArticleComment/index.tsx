import { Comment, Tooltip, List, Row } from 'antd';
import moment from 'moment';

import { Button, message, Space } from 'antd';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import ProForm, {
    ProFormTextArea,
  } from '@ant-design/pro-form';
const reComment = ()=>{

}

const data = [
  {
    actions: [<span key="comment-list-reply-to-0" id="1" onClick={reComment}>回复</span>],
    author: 'Haruluyx',
    avatar: 'https://avatars.githubusercontent.com/u/91101915?v=4',
    content: (
      <p>
        我觉得你说的是对的。
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
];

export default () => (
    <>
        <List
            className="comment-list"
            header={`${data.length} 回复`}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <ModalForm
                title="评论回复"
                trigger={
                    <li>
                        <Comment
                        actions={item.actions}
                        author={item.author}
                        avatar={item.avatar}
                        content={item.content}
                        datetime={item.datetime}
                        />
                   </li>
                }
                submitter={{
                  searchConfig: {
                    submitText: '确认',
                    resetText: '取消',
                  },
                }}
                onFinish={async (values) => {
                  console.log(values);
                  message.success('回复成功');
                  return true;
                }}
              >
                <ProFormTextArea colProps={{ span: 24 }} name="comment" label="" 
                    placeholder={"输入回复内容"}  
                    fieldProps={{ showCount: true,maxLength: 400,rows:5} }/>       
              </ModalForm>

            )}
        />
  
    </>
);