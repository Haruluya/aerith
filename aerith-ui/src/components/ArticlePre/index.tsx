import { Card, Avatar, Image,Tag,Button } from 'antd';
import { EditOutlined, StarTwoTone,EyeTwoTone, SettingOutlined,DownloadOutlined ,TwitterOutlined } from '@ant-design/icons';
import styles from './index.less'
import { Link } from 'umi';

const { Meta } = Card;

const AritclPre = () => (
    <div className={styles.articPrePart}>
        <div className={styles.articPreContainer}>
            <div className={styles.avatarContainer}>
                <Avatar size="large" src="https://img-static.mihoyo.com/avatar/avatar14.png" /> 
                <span className={styles.username}>Haruluya</span>
                <span className={styles.time}>2022/4/23</span>
                <Button type="primary" shape="round" size='small' className={styles.focusButton}>
                    关注
                </Button>
            </div>
            <div className={styles.titleContainer}>
                <Tag color="#f50">官方</Tag>
                <Link to={'/articledetail'}>
                <span>《最终幻想7：重制版》</span>
                </Link>
            </div>
            <div className={styles.contentContainer}>
                <span>艾瑞丝是《最终幻想Ⅶ》正传及外传《核心危机》中官方设定的女主角，在《圣子降临》等其他作品中出场。作为唯一仅存的古代种（赛特拉，Cetra）、白魔石的持有者，身负沉重的宿命。</span>
            </div>
            <div className={styles.imageContainer}>
                <Image  width={240} src="https://5b0988e595225.cdn.sohucs.com/images/20191222/c091a181332a42f3b83d8ffd383b8ead.jpeg">
                </Image>
                {/* <Image  width={240} src="https://upload-bbs.mihoyo.com/upload/2022/04/21/75379477/2a10140ac16e4a8508bee3b0e0e5d153_9204705589460030863.jpg">
                </Image> */}
            </div>
            <div className={styles.tagContainer}>
                <div className={styles.classTags} >
                    <Tag color="magenta">官方</Tag>
                    <Tag color="magenta">热门</Tag>
                </div>
                <div className={styles.viewTags} >
                    <div className={styles.tag} >
                        <EyeTwoTone style={{fontSize:'20px'}} />3
                    </div>
                    <div className={styles.tag} >
                        <StarTwoTone style={{fontSize:'20px'}} />1
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AritclPre;