import useSWR from 'swr'
import { useEffect} from "react"; 
import Modules from "../modules"
import Header from "../../components/header";
import Footer from "../../components/footer";
import ReactLoading from "react-loading";
import Meta from "../elements/meta"

const  fetcher =  async (url) => await fetch(url).then((res) => res.json());


const Home = ({state,match,location}) => {
  
useEffect(()=>{
  setTimeout(()=>
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  ,1000)
},[])

  const { data, error } = useSWR('https://staging.starmarketingonline.com/wp-json/wp/v2/pages?_embed=true&slug=home-page', fetcher)
  return (
    <div style={{backgroundImage:`url("/assets/WebBg.png")`}}> 
      <Meta meta={data && data[0].yoast_meta} page="home" />
         {!data ? <ReactLoading type={'bubbles'}  className="loading" style={{margin:'0 auto',color:"#fff",height:'100vh',width:"80px"}} /> :
         <Modules data={data && data[0]['acf']} location={location} /> } 
      <Footer />
    </div>
  );
};

export default Home;