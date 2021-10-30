import useSWR from 'swr'
import Modules from "../modules"
import Header from "../../components/header";
import Footer from "../../components/footer";
import ReactLoading from "react-loading";

const fetcher = (url) => fetch('/expressPost?data='+url,{
  method:'Post',
  
}).then((res) => res.json());
const Home = ({state}) => {
  const { data, error } = useSWR('/pages?_embed=true&slug=home-page', fetcher, {refreshInterval: 0,
    refreshWhenOffline : false})
  return (
    <div style={{backgroundImage:`url("/assets/WebBg.png")`}}> 
      <Header />
         {!data ? <ReactLoading type={'bubbles'}  className="loading" style={{margin:'0 auto',color:"#fff",height:'100vh',width:"80px"}} /> :
         <Modules data={data && data[0]['acf']} /> } 
      <Footer />
    </div>
  );
};

export default Home;