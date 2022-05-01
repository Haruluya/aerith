
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
const AddAritcle = (props) => {
    // 表单配置。
    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 14},
      };
    const onFinish = (values: any) => {
        console.log(values);
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
    function tagRender(props) {
        const { label, value, closable, onClose } = props;
        const onPreventMouseDown = event => {
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

      function onChange(value) {
        console.log(`selected ${value}`);
      }
      
      function onSearch(val) {  
        console.log('search:', val);
      }

    // 提交确认。
    function confirmSubmit() {
        Modal.confirm({
          title: '发布',
          icon: <ExclamationCircleOutlined />,
          content: '你确认发布吗？',
          okText: '确认',
          cancelText: '取消',
          onOk:()=>{
              message.success("发布成功");
              history.push('/home');
          }
        });
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
                    <Content></Content>
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
                        <Option value="jack">闲聊</Option>
                        <Option value="lucy">攻略</Option>
                        <Option value="tom">求助</Option>
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
                    <ProFormUploadDragger max={4} name="dragger" />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit" shape='round' size='large'
                        onClick={confirmSubmit} >
                        发布
                    </Button>
                </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default AddAritcle;