import useSWR from 'swr'
import styled from 'styled-components'
import SectionContainer from "../styles/section-container";
import Header from "../../components/header";
import Footer from "../../components/footer";


const fetcher = (url) => fetch(url,{
  method:'Post',
  
}).then((res) => res.json());
const ProjectSingles = ({ match }) => {
  const { data, error } = useSWR('/singleprojects?slug='+match.params.slug, fetcher)
 
  return (
    <div style={{backgroundImage:`url('/assets/page_bg.png')`}}> 
      <Header />
      {data && 
      <SectionContainer>
        <Heading className="featured-heading" style={{color:'white'}} dangerouslySetInnerHTML={{ __html: data[0].title.rendered }}></Heading>
        <div  dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}></div>
      </SectionContainer>
    }
      <Footer />
    </div>
  );
};

export default ProjectSingles;


const Heading = styled.div`
h1{
    position: relative;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px
    
  }
  h1:after{
    content: "";
    height: 10px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 10%;
    bottom: -16px;
    border-radius: 107px;
    background: #fe5656e3 0% 0% no-repeat padding-box;
    
  }
  h1:before{
    content: "";
    background: url('.//assets/whiteImage.png') 0% 0% no-repeat padding-box;
    width: 393px;
    height: 180px;
    display: table;
    margin: 0 auto;
    position: absolute;
    right: 0;
    left: 0;
    top: -59px;
    text-align: center;
    background-size: cover;
   
  }
  
`

