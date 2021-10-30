import styled from 'styled-components'
import SectionContainer from "../styles/section-container";
import Card_reg from "../../assets/Card_reg.png";
import { Link } from 'react-router-dom';

const Regions = ({data}) => {
  console.log(data,'Regions');
    return (
        <MainContainer >
         <SectionContainer>
         <h2 className="featured-heading">REGIONS</h2>
         <div className="featured-project-line"></div>


         <RegionsBoxesMain>
            {data && data.region_listing && data.region_listing.map((region,index)=>
              <RegionsBoxes background={Card_reg} key={index} to={"/projects/"+region.country.toLowerCase()} style={{textDecoration:'none'}}>
                <h1 style={{color:'#000000'}}>{region.country}</h1>
                <p style={{color:'#000000'}}>{region.total_projects} Projects</p>
                <Imge src={region.image}></Imge>
              </RegionsBoxes>
            )}
         </RegionsBoxesMain>



          </SectionContainer>
        </MainContainer>
    )
}

export default Regions;
const MainContainer = styled.div`
background: #fff;
width: 100%;
display: block;
   
`;


const RegionsBoxesMain = styled.div`
display: grid;
grid-template-columns: 32% 32% 32%;
gap: 29px 29px;
margin-top: 10%;
   
`;
const RegionsBoxes = styled(Link)`
    background:url(${(props) => props.background}) no-repeat center;
    padding: 30px 30px;
    -webkit-background-size: cover;
    background-size: cover;
    border-radius: 20px;
    padding-bottom: 0px;
    position: relative;
    height: 420px;  
    h1 {
        font-size: 48px;
        margin-bottom: 0px;
        font-weight: 600;
    }
    p {
        font-size: 24px;
    }
    img {
        position: absolute;
        right: 60px;
        bottom: 0;
        filter: grayscale(100%);
    }
    &:hover{
      img{
        filter: grayscale(0%);
      }
    }


`;

const Imge = styled.img`
  

`