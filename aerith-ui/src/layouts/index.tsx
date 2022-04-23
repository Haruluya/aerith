import './index.less';
import Header from '@/components/Header'
import Footer from '@/components/Footer';


export default function IndexPage(props:any) {
  return (
    <div className="app">
      <Header></Header>

      { props.children }
      
      <Footer></Footer>
    </div>
  );
}
