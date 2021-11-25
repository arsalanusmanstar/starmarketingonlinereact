import useSWR from 'swr'
import { useEffect,useState } from "react";
import Modules from "../modules"
import SinglePage from "./singlePage"
import Header from "../../components/header";
import Footer from "../../components/footer";
import ReactLoading from "react-loading";
import axios from "axios";
import Meta from "../elements/meta"

const Pages = ({ match,location }) => {
  const [data,setData] = useState('');
  
  console.log(match)
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    axios.get('https://staging.starmarketingonline.com/wp-json/wp/v2/pages?_embed=true&slug='+match.url.replace('.html',''))
      .then(response => {
        setData(response.data)
      })
  },[match.path])

  return (
    <div > 
      {data && data[0] && <Meta meta={data && data[0].yoast_meta} page="page" />}
         {!data ? <ReactLoading type={'bubbles'}  className="loading" style={{margin:'0 auto',color:"#fff",height:'100vh',width:"80px"}} /> :
          data[0] && data[0].acf ? <Modules data={data[0].acf} location={location}  /> : <SinglePage data={data[0]}/>  }
      <Footer />
    </div>
  );
};

export default Pages;