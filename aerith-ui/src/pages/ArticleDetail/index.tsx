import React from 'react'
import styles from './index.less'
import { MessageTwoTone,StarTwoTone,LikeTwoTone } from '@ant-design/icons'
import { Avatar, Divider,Tabs, Button} from 'antd'
const { TabPane } = Tabs;
import { Form, Input, InputNumber} from 'antd';
// markdown语法配置。
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vs} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Layout } from 'antd';

const { Sider, Content } = Layout;

const ArticleDetaile= ()=>{

  const artContent = `~~~js
  let codeInsertScript = <Code lang="js">{\`
  (function(d) {
      var wfAD = d.createElement('script'), sAD = d.scripts[0];
      wfAD.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      wfAD.async = true;
      sAD.parentNode.insertBefore(wfAD, sAD);
  })(document);
  \`}</Code>
`


return (
  <div className={styles.mainContainer}>
      <Layout className={styles.layout}>
        <Content className={styles.content}>
          <div className={styles.artIndex}>
            <div>
             <MessageTwoTone />
              <span>666</span>
            </div>
            <div>
            <StarTwoTone />
              <span>666</span>
            </div>
            <div>
              <LikeTwoTone />
              <span>666</span>
            </div>
          </div>
          <div className={styles.title}>

          </div>
          <div className={styles.description}>

          </div>
          <div className={styles.template}>

          </div>
          <div className={styles.tags}>

          </div>
          <div className={styles.time}>

          </div>
          <div className={styles.cover}>

          </div>
          <div className={styles.artContent}>

          </div>
          <div className={styles.focusIndex}>

          </div>
          <div className={styles.postComment}>
            <div className={styles.textAear}>

            </div>
            <div className={styles.operations}>

            </div>
          </div>
          <div className={styles.comments}>

          </div>
        </Content>
        <Sider className={styles.sieder}>

        </Sider>
      </Layout>
  </div>

  )
      {/* <ReactMarkdown
        children={content}
        components={{
        code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
            <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={vs}
                language={match[1]}
                PreTag="div"
                showLineNumbers={true}
                wrapLines={true}
                {...props}
            />
            ) : (
            <code className={className} {...props}>
                {children}
            </code>
            )
        }
        }}
    />, */}
}


export default ArticleDetaile;
