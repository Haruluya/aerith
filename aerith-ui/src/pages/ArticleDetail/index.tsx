import React from 'react'
import styles from './index.less'
import { MessageTwoTone,StarTwoTone,LikeTwoTone,SmileTwoTone } from '@ant-design/icons'


import { Avatar, Divider,Tabs, Button,Tag} from 'antd'
const { TabPane } = Tabs;
import { Form, Input, InputNumber} from 'antd';
const { TextArea } = Input;

// markdown语法配置。
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vs} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Layout } from 'antd';
import {useEffect,useState} from 'react';
// 组件导入。
import ImgSwiper from '@/components/ImgSwiper';
import OfficialInfo from '@/components/OfficialInfo';
import RecTopic from '@/components/RecTopic';
import ArticleComment from './ArticleComment';
import {connect,Loading} from 'umi';
import { LoginProps } from '@/interfaces/login';
const { Sider, Content } = Layout;
import { GlobalStateType } from '@/interfaces/global';
import type { CSSProperties,FC } from 'react';

const ArticleDetaile:FC<LoginProps>= ({location,global,dispatch})=>{

  const artContent = `
  # react-markdown 支持markdown格式
  
  
  # Aerith身世

  A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a    | b    |
| ---- | ---- |


  ​	    **FF7**中几乎每一位主角都经历了悲剧，克劳德和蒂法要给死去的双亲复仇，巴瑞特要向神罗讨回村子被灭的血债，西德壮志难酬，十三无法原谅懦弱的父亲，文森特要为恋人向宝条讨回公道。而Aerith呢，只因为她是一个古代种，也因此从小就背负了沉重的宿命。
  ​	原本幸福的一家子，因为自己的特殊身份，导致父亲被杀，母女都被抓走做人体实验，最后母亲舍命带她逃出那个魔窟之后，一命呜呼，年幼的她就这样被当作了别人的养女，不过这段痛苦的经历却使她从小就变的坚强，古代种的能力，使她早已看透了生死，不再悲愤父母的惨死，不再仇恨酿成惨剧的凶手，过去的悲剧如过眼云烟，她担心的只是人类的命运。

  # Aeirth成长

​	    这个世界是如此阴暗，死气沉沉，Aerith很想改变这种局面。于是她在那个小教堂里栽满了芬芳的花儿，以她小小的能力为这个街道带来一点温馨，一点美丽，而她也成了一个卖花女，卑微却又纯洁，时刻守望着那巨大的魔晃炉，那是对星球造成致命伤害的文明的产物，每次看到它，Aerith碧绿的眼眸中都充满了疑惑与不安。
​	Aerith一直深深的隐藏着自己的真性情，和伙伴们在一起她更多的是表现活泼可爱的一面，她一直隐藏自己的内心世界，是因为她始终认为世界上真正理解自己的人很少，谁也不知道星球的未来究竟会怎样发展，只有她能清晰察觉到那笼罩在世界上空的危机，为了对抗那来自远古的邪恶力量，伙伴们踏上了一条改变命运的旅途， 古代种神殿，沉睡森林，忘却之都，伙伴们的战斗能力得到了极大的提高，而她却一步步走上了死亡的终点。

# Aeirth感情

​	Aerith对克    劳德的感情是含蓄的，尽管她极力把握自己，却还是深深地陷入了，不幸的是，和她那萌芽的爱情一起到来的是萨非罗斯的挑战，一方面是陨石的威胁，一方面是自己的幸福，而她必须立即作出一个抉择，于是她平静的选择了向克劳德告别。

​	Aerith始终是清醒的，也是悲伤的。她的悲伤源於她的清醒。她无法把握自己的爱情，是因为她慈爱的心始终关心着星球的安危；她深知自己是古代种的血脉，所以她总是以一种积极乐观的态度顽强的去生存，最后她的灵魂在天空中展现出的笑容，正是因为她的心里始终对人类充满希望。

​	一步步，我们看著Aerith倒下的那一幕，为她担心、为她叹息，而她自己也是恬静的走上了那神圣的祭坛，并且早就预料到了自己的命运。

# Code
~~~js
let aerith = new person();
aerith.heart = null;
~~~

**看透一切而又能超越一切，只有Aerith。**

`
let template = ["官方","闲聊","攻略","反馈"]
const [article, setArticle] = useState(null)

useEffect(() => {

  async function effectFun() {
      if (dispatch){
        await dispatch({
            type: 'global/getArticleDataById',
            payload:{
              id:location.query.aid,
            } 
        })

        setArticle(global.artDataDetail)
    }

  }
  effectFun().then(()=>{
    setArticle(global.artDataDetail)
  })
},[])

console.log(article);

return (
    <>
     {article &&(
        <div className={styles.mainContainer}>
        <Layout className={styles.layout}>
          <Content className={styles.content}>
            <div className={styles.artIndex}>
              <div>
               <MessageTwoTone style={{fontSize:'40px'}}/>
                <div className={styles.count}>666</div>
              </div>
              <Divider/>
              <div className={styles.artIndexItem}>
              <StarTwoTone style={{fontSize:'40px'}}/>
                <div className={styles.count}>666</div>
              </div>
              <Divider/>
              <div>
                <LikeTwoTone style={{fontSize:'40px'}}/>
                <div  className={styles.count}>666</div>
              </div>
              <Divider/>
            </div>
  
            <div className={styles.article}>
              <div className={styles.title}>
              {global.artDataDetail.article[0].title}
              </div>
              <Divider/>
              <div className={styles.description}>
                <span>帖子描述：</span><br/>
                <p> {global.artDataDetail.article[0].description}</p>
              </div>
              <div className={styles.template}>
                隶属板块：{template[global.artDataDetail.article[0].tid]}
              </div>
              <div className={styles.tags}>
              {global.artDataDetail.article[0].title}
              </div>
              <div className={styles.cover}>
                <img src={global.artDataDetail.article[0].cover}></img>
              </div>
              <div className={styles.time}>
                帖子发布时间：{global.artDataDetail.article[0].create_time} | 更新时间：{global.artDataDetail.article[0].update_time}
              </div>

              <div className={styles.artContent}>
                  <ReactMarkdown
                    children={global.artDataDetail.article[0].content}
                    remarkPlugins={[gfm]}
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
                />,
              </div>
              <Divider/>
            </div>
            <div className={styles.postComment}>
              <div className={styles.title}>
                评论发言：
              </div>
              <div className={styles.textArea}>
                <TextArea rows={5} placeholder="inpute comment:" maxLength={400} showCount />
              </div>
              <div className={styles.oprations}>
                  <div className={styles.smile}>
                    <SmileTwoTone style={{fontSize:'24px'}}/>
                  </div>
                  <div className={styles.commit}>
                    <Button type='primary' shape='round' size='large'>评论</Button>
                  </div>
              </div>
            </div>
            <div className={styles.comments}>
            <Tabs defaultActiveKey="1" onChange={(key)=>{}} size="large">
              <TabPane tab="全部评论" key="1">
                <ArticleComment></ArticleComment>
              </TabPane>
              <TabPane tab="只看贴主" key="2">
                
              </TabPane>
            </Tabs>
            </div>
          </Content>
          <Sider className={styles.sider} width={300}>
            <div className={styles.userInfo}>
              <div className={styles.avatar}>
              <Avatar size={90} src={global.artDataDetail.user[0].avatar}>
              </Avatar>
              </div>
              <div className={styles.info}>
                <div className={styles.username}>{global.artDataDetail.user[0].username}</div>
                <div><Tag color="green">LV{global.artDataDetail.user[0].level}</Tag></div>
                <div className={styles.signature}>{global.artDataDetail.user[0].signature}</div>
                <Button type='primary'>关注</Button>
              </div>
            </div>
            <ImgSwiper></ImgSwiper>
            <OfficialInfo></OfficialInfo>
            <RecTopic></RecTopic>
          </Sider>
        </Layout>
        
    </div>
     )

     }
    </>

  )
       
}


export default connect(
  ({ global,loading }: { global:GlobalStateType;loading: Loading }) => ({
    loading: loading.models.global,
    global,
  }),
)(ArticleDetaile);
