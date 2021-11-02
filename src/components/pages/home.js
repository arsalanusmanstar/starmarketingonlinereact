import useSWR from 'swr'
import Modules from "../modules"
import Header from "../../components/header";
import Footer from "../../components/footer";
import ReactLoading from "react-loading";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = ({state,location}) => {
  const { data, error } = useSWR('https://staging.starmarketingonline.com/wp-json/wp/v2/pages?_embed=true&slug=home-page', fetcher)
  return (
    <div style={{backgroundImage:`url("/assets/WebBg.png")`}}> 
      <Header />
         {!data ? <ReactLoading type={'bubbles'}  className="loading" style={{margin:'0 auto',color:"#fff",height:'100vh',width:"80px"}} /> :
         <Modules data={data && data[0]['acf']} location={location} /> } 
      <Footer />
    </div>
  );
};

export default Home;