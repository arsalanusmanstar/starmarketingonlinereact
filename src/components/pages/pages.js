import useSWR from 'swr'
import { useEffect,useState } from "react";
import Modules from "../modules"
import Header from "../../components/header";
import Footer from "../../components/footer";
import ReactLoading from "react-loading";
import axios from "axios";

const Pages = ({ match,location }) => {
  const [data,setData] = useState('');
  
  useEffect(()=>{
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
          <Modules data={data && data[0] && data[0].acf} location={location}  /> } 
      <Footer />
    </div>
  );
};

export default Pages;