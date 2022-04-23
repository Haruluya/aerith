import { Card, Avatar, Image,Tag,Button } from 'antd';
import { EditOutlined, UserOutlined,EllipsisOutlined, SettingOutlined,DownloadOutlined ,TwitterOutlined } from '@ant-design/icons';
import styles from './index.less'

const { Meta } = Card;

const AritclPre = () => (
    <div className={styles.articPrePart}>
        <div className={styles.articPreContainer}>
            <div className={styles.avatarContainer}>
                <Avatar size="large" icon={<UserOutlined />} /> 
                <span>Haruluya</span>
                <span>2022/4/23</span>
                <Button type="primary" shape="round" size='small' className={styles.focusButton}>
                    关注
                </Button>
            </div>
            <div className={styles.titleContainer}>
                <Tag color="#f50">官方</Tag>
                <span>「轻风雅游」网页活动现已开启——参与可得原石等奖励</span>
            </div>
            <div className={styles.contentContainer}>
                <span>「轻风雅游」网页活动现已开启——参与可得原石等奖励...</span>
            </div>
            <div className={styles.imageContainer}>
                <Image  width={240} src="https://upload-bbs.mihoyo.com/upload/2022/04/21/75379477/2a10140ac16e4a8508bee3b0e0e5d153_9204705589460030863.jpg">
                </Image>
                <Image  width={240} src="https://upload-bbs.mihoyo.com/upload/2022/04/21/75379477/2a10140ac16e4a8508bee3b0e0e5d153_9204705589460030863.jpg">
                </Image>
            </div>
            <div className={styles.tagContainer}>
                <div className={styles.classTags} >
                    <Tag color="magenta">官方</Tag>
                    <Tag color="magenta">热门</Tag>
                </div>
                <div className={styles.viewTags} >
                    <Tag icon={<TwitterOutlined />} color="#55acee">
                        100
                    </Tag>
                    <Tag icon={<TwitterOutlined />} color="#55acee">
                        999
                    </Tag>
                </div>
            </div>
        </div>
    </div>
);

export default AritclPre;