import styled from 'styled-components'
import SectionContainer from "../styles/section-container";
import AboutBackground from "../../assets/about_background.png";
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import LightSpeed from 'react-reveal/LightSpeed';

const ScoreCounter = (state) => {
    return (
        <Score >
          <ScoreCont>
            <Icon><LightSpeed top cascade><img src={state.icon} alt={state.title} /></LightSpeed></Icon>
            <Count> <Bounce bottom cascade>{state.score}</Bounce></Count>
            <Title><Bounce top cascade>{state.title}</Bounce></Title>
          </ScoreCont>
        </Score>
    )
}

const About = ({data}) => {
    return (
        <MainContainer background={AboutBackground} id="about">
            <SectionContainer>
                <h2  className="featured-heading " ><Bounce left cascade>{data.heading}</Bounce></h2>
                <Bounce right cascade> <div className="featured-project-line"></div>  </Bounce>
                <AboutContent>
                <Bounce right cascade><Cont dangerouslySetInnerHTML={{ __html:data.content}}></Cont></Bounce>
                 <Slide bottom cascade> <SectionThree>
                    {data.counter && data.counter.map((count,index)=> 
                    <ScoreCounter score={count.number} title={count.title} icon={count.icon} key={index}/>
                    )}  
                    </SectionThree></Slide>
                </AboutContent>
            </SectionContainer>
        </MainContainer>
    )
}

export default About;
const MainContainer = styled.div`
    background: #fff url(${(props) => props.background});
@media only screen and (max-width: 480px) {
    padding-bottom: 40px;
}
`
const AboutContent = styled.div`
`
const Cont = styled.p`
    text-align: center;
    font: 24px/44px Poppins;
    -webkit-letter-spacing: 0px;
    -moz-letter-spacing: 0px;
    -ms-letter-spacing: 0px;
    letter-spacing: 0px;
    color: #929292;
    opacity: 1;
    padding: 60px 30px;
    text-rendering: optimizeLegibility;
@media only screen and (max-width: 1080px) {
    font-size: 16px;
    line-height: 30px;
    padding: 30px 0px;
}
@media only screen and (max-width: 480px) {
    text-align: left;
    font-size: 14px;
    line-height: 26px;
    padding: 14px 6px;
}
` 
const Score = styled.div`
    opacity: 1;
    color:#fff;
    position: relative;
&:before{
    content:'';
    background: #333B58 0% 0% no-repeat padding-box;
    box-shadow: 0px 68px 79px #8585854A;
    border-radius: 19px;
    position: absolute;
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    z-index: 1;
}
&:after{
    content:'';
    background: #212841 0% 0% no-repeat padding-box;
    border-radius: 19px 19px 463px 19px;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
    left: 0;
    top:0;
}
`  
const ScoreCont = styled.div`
    position: relative;
    z-index: 3;
    padding:40px;
@media only screen and (max-width: 820px) {
    padding:20px;
}
@media only screen and (max-width: 480px) {
    padding:20px;
}
`
const SectionThree = styled.div`
    display: grid;
    grid-template-columns: 28% 28% 28%;
    grid-gap:8%;
@media only screen and (max-width: 1366px) {
    grid-template-columns: 32% 32% 32%;
    grid-gap: 2%;
}
@media only screen and (max-width: 1080px) {
    grid-template-columns: 32% 32% 32% ;
}
@media only screen and (max-width: 480px) {
    grid-template-columns: 100% ;
}
`
const Icon = styled.div``
const Count = styled.div`
    text-align: left;
    font: normal normal bold 64px/95px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
@media only screen and (max-width: 1080px) {
    font-size: 48px;
} 
@media only screen and (max-width: 1080px) {
    font-size: 38px;
} 
@media only screen and (max-width: 820px) {
    line-height: 40px;
}  
@media only screen and (max-width: 480px) {
    line-height: 44px;
} 
 `
const Title = styled.div`
    text-align: left;
    font: normal normal 200 30px/42px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
@media only screen and (max-width: 1080px) {
    font-size: 22px;
    line-height: 28px;
}  
@media only screen and (max-width: 820px) {
    font-size: 18px;
    line-height: 25px;
} 
`
