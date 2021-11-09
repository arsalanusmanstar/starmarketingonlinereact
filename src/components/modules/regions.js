import styled from 'styled-components'
import SectionContainer from "../styles/section-container";
import Card_reg from "../../assets/Card_reg.png";
import { Link } from 'react-router-dom';

const Regions = ({data}) => {
  console.log(data);
    return (
        <MainContainer >
         <SectionContainer>
          <h2 className="featured-heading">REGIONS</h2>
          <div className="featured-project-line"></div>


         <RegionsBoxesMain>
            {data && data.region_listing && data.region_listing.map((region,index)=>
              <RegionsBoxes background={Card_reg} key={index} to={"/projects/"+region.country.toLowerCase()} style={{textDecoration:'none'}}>
                <h1 style={{color:'#000000'}}>{region.country}</h1>
                <p className="black"><span>Total</span> {region.total_projects} </p> <br />
                <p className="green"><span>Completed</span> {region.completed_projects} </p>
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

@media only screen and (max-width: 1366px) {
  grid-template-columns: 50% 50%;

}

@media only screen and (max-width: 1024px) {
  grid-template-columns: 100%;

}
   
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
        margin: 2rem auto 0rem;
    }
    p {
      font-size: 20px; 
      padding: 2px 19px 0px 0px;
      margin: 14px 4px !important;
        border: 1px solid #000;
        color: #000;
        background: #fff;
        border-radius: 27px;
        display: inline-block;
        text-align: right;
        span{
          color:#fff;
          border-radius: 15px;    
          padding: 4px 18px;
          font-size: 17px;
          position: relative;
          top: -2px;
          margin-right: 4px;
        }
        &.black{
          span{

            background:#000;
          }
        }
        &.green{
          
    margin-top: 0px !important;
    border-color: #3abf3a;
          span{

            background: #3abf3a;
          }
        }
    }
    img {
        position: absolute;
        right: 60px;
        bottom: 0;
        filter: grayscale(100%);
        @media only screen and (max-width: 480px) {
          right: 0px;
          height: 200px;
        
        }
    }
    &:hover{
      img{
        filter: grayscale(0%);
      }
    }


`;

const Imge = styled.img`
  

`