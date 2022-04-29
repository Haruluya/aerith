import './index.less';
import Header from '@/components/Header'
import Footer from '@/components/Footer';
import { getTwoToneColor, setTwoToneColor } from '@ant-design/icons';


export default function IndexPage(props:any) {
  setTwoToneColor('#eb2f96');
  getTwoToneColor();


  return (
    <div className="app">
      <Header></Header>

      <div className='center'>
         { props.children }
      </div>

      <Footer></Footer>
    </div>
  );
}
