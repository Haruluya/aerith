import { Col,Row,Image,AutoComplete,Input,Button} from 'antd';
import CenterMenu from './CenterMenu';
import UserMenu from './UserMenu';
import styles from './index.less'
import {Link} from 'umi'
import logo from '../../assets/images/logo.png'
const Header = () => {

    const options = [
        {
          label: 'xxx',
          options: [{'xxx':1}]
        },
      ];

    const handleSearch = ()=>{

    }

    return (
        <>
            <Row gutter={16} className={styles.headerRow} align="middle">
                <div className={styles.heightDiv}></div>
                <Col span={3}>
                    <div className={styles.logoContainer}>
                        <Link to="/">
                            <img alt="logo" className={styles.logo} src={logo} />

                            <Button type="link" block className={styles.title}>Aerith</Button>
                        </Link>
                    </div>
                </Col>
                <Col span={11}>
                    <CenterMenu></CenterMenu>
                </Col>
                <Col span={9}>
                    <div className={styles.headerSearch} >
                        <Row gutter={20} align="bottom">
                            <Col span={16}>
                                <AutoComplete options={options} style={{ width: '100%' }}>
                                    <Input.Search placeholder={'Input'} size="large" enterButton onSearch={handleSearch} />
                                </AutoComplete>
                            </Col>
                            <Col span={8}>
                                <UserMenu></UserMenu>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default Header;