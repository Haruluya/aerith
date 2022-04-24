import './index.less';
import Header from '@/components/Header'
import Footer from '@/components/Footer';


export default function IndexPage(props:any) {
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
