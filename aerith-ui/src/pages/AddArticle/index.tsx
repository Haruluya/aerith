import React from 'react'
import { Form, Select,Input,Tag, InputNumber, Button, Divider, message } from 'antd';
import ReactDom from 'react-dom'
import styles from './index.less'
import Content from './Content';
import { ProFormUploadDragger } from '@ant-design/pro-form';
import {FormOutlined} from '@ant-design/icons'
import { Modal, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { history } from 'umi';
import {connect,Loading} from 'umi';
import { LoginProps } from '@/interfaces/login';
import type { CSSProperties,FC } from 'react';
import { GlobalStateType } from '@/interfaces/global';
import { Value } from 'sass';
const AddAritcle:FC<LoginProps> = ({global,dispatch}) => {
    // 表单配置。


    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 14},
      };
    // 提交确认。
    const onFinish = (values:any)=>{
        Modal.confirm({
          title: '发布',
          icon: <ExclamationCircleOutlined />,
          content: '你确认发布吗？',
          okText: '确认',
          cancelText: '取消',
          onOk:async ()=>{
            if (dispatch){
                await dispatch({
                    type: 'global/addArticle',
                    payload:{
                        uid:global.userData.id,
                        tid:values.article.template,
                        title:values.article.title,
                        description:values.article.describe,
                        content:values.article.content,
                        status:1,
                        cover:values.article.cover,
                        create_time:new Date(),
                        update_time:new Date()
                    } 

                })

              }
              history.push('/home');
              message.success("发布成功");
          }
        });
      }
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    // tag渲染。
    const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];
    function tagRender(props:any) {
        const { label, value, closable, onClose } = props;
        const onPreventMouseDown = (event:any) => {
          event.preventDefault();
          event.stopPropagation();
        };
        return (
          <Tag
            color={value}
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{ marginRight: 3 }}
          >
            {label}
          </Tag>
        );
      }
    //   板块select处理程序。
      const { Option } = Select;

      function onChange(value:any) {
        console.log(`selected ${value}`);
      }
      
      function onSearch(val:any) {  
        console.log('search:', val);
      }


    return(
        <div className={styles.mainContainer}>
            <div className={styles.header}>
                <span>发布帖子</span>
            </div>
            <Divider/>
            <div className={styles.formPart}>
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['article', 'title']} label="标题" rules={[{ required: true }]}>
                    <Input prefix={<FormOutlined />} style={{width:'50%'}}/>
                </Form.Item>

                <Form.Item name={['article', 'describe']} label="描述" rules={[]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['article', 'content']} label="内容" rules={[]}>
                  <div><Input.TextArea showCount defaultValue="输入帖子内容:" maxLength={10000} style={{ height: 450 }}/></div>
                </Form.Item>
                <Form.Item name={['article', 'template']} label="板块">
                    <Select
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        allowClear
                        style={{width:'30%'}}
                        filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value={2}>闲聊</Option>
                        <Option value={3}>攻略</Option>
                        <Option value={4}>反馈</Option>
                    </Select>
                </Form.Item>
                <Form.Item name={['article', 'tags']} label="标签">
                    <Select
                        mode="multiple"
                        showArrow
                        allowClear
                        tagRender={tagRender}
                        defaultValue={['杂谈']}
                        style={{ width: '60%' }}
                        options={options}
                    />
                </Form.Item>
                <Form.Item name={['article', 'cover']} label="封面" rules={[]}>
                    {/* <ProFormUploadDragger max={4} name="dragger" /> */}
                    <Input prefix={<FormOutlined />} style={{width:'50%'}}/>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit" shape='round' size='large'
                         >
                        发布
                    </Button>
                </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default connect(
  ({ global,loading }: { global:GlobalStateType;loading: Loading }) => ({
    loading: loading.models.global,
    global,
  }),
)(AddAritcle);


