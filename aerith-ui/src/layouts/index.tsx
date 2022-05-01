import './index.less';
import Header from '@/components/Header'
import Footer from '@/components/Footer';
import { getTwoToneColor, setTwoToneColor } from '@ant-design/icons';


export default function IndexPage(props:any) {
  setTwoToneColor('#42c6ff');
  getTwoToneColor();


  return (
    <div className="app">
      <Header></Header>

      <div className='app_center'>
         { props.children }
      </div>

      <div className='app_footer'>
        <Footer></Footer>
      </div>
    </div>
  );
}
