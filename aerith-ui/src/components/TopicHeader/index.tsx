import { Button, Menu } from 'antd';
import styles from './index.less'

export default function TopicHeader() {
  return (
    <div className={styles.gossipHeaderPart}>
        <Menu mode="horizontal" defaultSelectedKeys={['hot']}>
            <Menu.Item key="hot">
                热门
            </Menu.Item>
            <Menu.Item key="newReply" >
                最新回复
            </Menu.Item>
            <Menu.Item key="newPost"  >
                最新发帖
            </Menu.Item>
        </Menu>
        <div className={styles.postButton}>
            <Button type='primary'>
                发布我的贴子
            </Button>
        </div>
    </div>
  )
}
