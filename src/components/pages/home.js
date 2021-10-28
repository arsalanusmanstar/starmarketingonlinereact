import useSWR from 'swr'
import Modules from "../modules"
import Header from "../../components/header";
import Footer from "../../components/footer";

const fetcher = (url) => fetch('/expressPost?data='+url,{
  method:'Post',
  
}).then((res) => res.json());
const Home = ({state}) => {
  const { data, error } = useSWR('/pages?_embed=true&slug=home-page', fetcher)
  return (
    <div style={{backgroundImage:`url("/assets/WebBg.png")`}}> 
      <Header />
      <Modules data={data && data[0]['acf']} />
      <Footer />
    </div>
  );
};

export default Home;