import useSWR from 'swr'
import Modules from "../modules"
import Header from "../../components/header";
import Footer from "../../components/footer";
import ReactLoading from "react-loading";
import WebImage from "../../assets/page_bg.png";


const fetcher = (url) => fetch(url).then((res) => res.json());
const Pages = ({ match }) => {
  
  const { data, error } = useSWR('/wp-json/wp/v2/pages?_embed=true&slug='+match.path, fetcher,{refreshInterval: 0,
    refreshWhenOffline : false})
  
  return (
    <div style={{backgroundImage:`url(${WebImage})`}}> 
      <Header />
         {!data ? <ReactLoading type={'bubbles'}  className="loading" style={{margin:'0 auto',color:"#fff",height:'100vh',width:"80px"}} /> :
          <Modules data={data && data[0]['acf']} /> } 
      <Footer />
    </div>
  );
};

export default Pages;