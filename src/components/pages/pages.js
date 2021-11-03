import useSWR from 'swr'
import { useEffect,useState } from "react";
import Modules from "../modules"
import SinglePage from "./singlePage"
import Header from "../../components/header";
import Footer from "../../components/footer";
import ReactLoading from "react-loading";
import axios from "axios";

const Pages = ({ match,location }) => {
  const [data,setData] = useState('');
  
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    axios.get('https://staging.starmarketingonline.com/wp-json/wp/v2/pages?_embed=true&slug='+match.path)
      .then(response => {
        setData(response.data)
      })
  },[match.path])

  return (
    <div > 
      <Header />
      {console.log(data,'data')}
         {!data ? <ReactLoading type={'bubbles'}  className="loading" style={{margin:'0 auto',color:"#fff",height:'100vh',width:"80px"}} /> :
          data[0] && data[0].acf ? <Modules data={data[0].acf} location={location}  /> : <SinglePage data={data[0]}/>  }
      <Footer />
    </div>
  );
};

export default Pages;