import './index.less';
import Header from '@/components/Header'
import Footer from '@/components/Footer';
import { getTwoToneColor, setTwoToneColor } from '@ant-design/icons';
import { useEffect } from 'react';


export default function Aerith(props:any) {
  setTwoToneColor('#42c6ff');
  getTwoToneColor();
  // 页面跳转时滚动到页面起始。
  useEffect(()=>{
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  })

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
