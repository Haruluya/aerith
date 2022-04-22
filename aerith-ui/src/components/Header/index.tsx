import { Col,Row,Image,AutoComplete,Input} from 'antd';
import CenterMenu from './CenterMenu';
import UserMenu from './UserMenu';
import styles from './index.less'
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
            <Row gutter={16} className={styles.headerRow} align="bottom">
                <div className={styles.heightDiv}></div>
                <Col span={3}>
                </Col>
                    <div className={styles.logo}></div>
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
        `                       <UserMenu></UserMenu>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default Header;