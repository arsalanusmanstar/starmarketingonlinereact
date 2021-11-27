import styled from 'styled-components'
import SectionContainer from "../styles/section-container";
import Card_reg from "../../assets/Card_reg.png";
import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';

const Regions = ({data}) => {
    return (
        <MainContainer >
         <SectionContainer>
            <h2 className="featured-heading"><Bounce bottom >REGIONS </Bounce></h2>
            <Bounce top cascade><div className="featured-project-line"></div></Bounce>
            <Bounce bottom cascade><RegionsBoxesMain>
              {data && data.region_listing && data.region_listing.map((region,index)=>
              <RegionsBoxes background={Card_reg} key={index} to={"/projects/"+region.slug.toLowerCase()} style={{textDecoration:'none'}}>
                <h1 style={{color:'#000000'}}>{region.country}</h1>
                <Imge src={region.image}></Imge>
              </RegionsBoxes>
              )}
          </RegionsBoxesMain></Bounce>
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
  margin-top: 6%;
@media only screen and (max-width: 1366px) {
  grid-template-columns: 50% 50%;
}
@media only screen and (max-width: 1080px) {
  grid-template-columns: 48% 48%;
  margin-top: 4%;
}
@media only screen and (max-width: 480px) {
  grid-template-columns: 100%;
  gap: 10px 10px;

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
@media only screen and (max-width: 820px) {
  padding: 0px 20px;
  height: 250px;
}
@media only screen and (max-width: 480px) {
  padding: 0px 20px;
  height: 202px;
}
h1 {
  font-size: 2em;
  margin-bottom: 0px;
  font-weight: 600;
  margin: 2rem auto 0rem;
@media only screen and (max-width: 820px) {
  font-size: 30px;
}
@media only screen and (max-width: 480px) {
  font-size: 30px;
}
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
@media only screen and (max-width: 820px) {
  font-size: 16px;
  padding: 2px 10px 0px 0px;
  margin: 8px 4px!important;
}
@media only screen and (max-width: 480px) {
  font-size: 16px;
  padding: 2px 10px 0px 0px;
  margin: 6px 4px!important;
}
span{
  color:#fff;
  border-radius: 15px;    
  padding: 4px 18px;
  font-size: 17px;
  position: relative;
  top: -2px;
  margin-right: 4px;
@media only screen and (max-width: 820px) {
  padding: 4px 18px;
  font-size: 14px;
  top: -2px;
}
@media only screen and (max-width: 480px) {
  padding: 5px 18px;
  font-size: 12px;
  top: -2px;
}
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
@media only screen and (max-width: 820px) {
  right: 10px;
  height: 160px;
  bottom: 22px;
}
@media only screen and (max-width: 480px) {
  right: 10px;
  height: 120px;
  bottom: 0;
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