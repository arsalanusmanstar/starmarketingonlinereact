import useSWR from 'swr'
import Modules from "../modules"
import Header from "../../components/header";
import Footer from "../../components/footer";


const fetcher = (url) => fetch('/expressPost?data='+url,{
  method:'Post',
  
}).then((res) => res.json());
const Pages = ({ match }) => {
  
  const { data, error } = useSWR('/pages?_embed=true&slug='+match.path, fetcher)
  
  return (
    <div style={{backgroundImage:`url('/assets/page_bg.png')`}}> 
      <Header />
      <Modules data={data && data[0]['acf']} />
      <Footer />
    </div>
  );
};

export default Pages;