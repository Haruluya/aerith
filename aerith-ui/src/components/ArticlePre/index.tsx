import { Card, Avatar, Image,Tag,Button } from 'antd';
import { EditOutlined, StarTwoTone,EyeTwoTone, SettingOutlined,DownloadOutlined ,TwitterOutlined } from '@ant-design/icons';
import styles from './index.less'
import { Link } from 'umi';

const { Meta } = Card;

const AritclPre = (props:any) => {
    return (
        <>
        <div className={styles.articPrePart}>
        <div className={styles.articPreContainer}>
            <div className={styles.avatarContainer}>
                <Avatar size="large" src={props.data.users[props.index][0].avatar} /> 
                <span className={styles.username}>{props.data.users[props.index][0].username}  </span>
                <span className={styles.time}>{props.data.articles[props.index].create_time}</span>
                <Button type="primary" shape="round" size='small' className={styles.focusButton}>
                    关注
                </Button>
            </div>
            <div className={styles.titleContainer}>
                <Tag color="#f50">官方</Tag>
                <Link to={'/articledetail?aid=' + props.data.articles[props.index].id}>
                <span>{props.data.articles[props.index].title}</span>
                </Link>
            </div>
            <div className={styles.contentContainer}>
                <span>{props.data.articles[props.index].description}</span>
            </div>
            <div className={styles.imageContainer}>
                <Image  width={240} src={props.data.articles[props.index].cover}>
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
    </>
    );
}

export default AritclPre;