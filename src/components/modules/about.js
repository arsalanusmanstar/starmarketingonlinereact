import styled from 'styled-components'
import SectionContainer from "../styles/section-container";
import AboutBackground from "../../assets/about_background.png";


const ScoreCounter = (state) => {
    return (
        <Score>
            <ScoreCont>
                <Icon><img src={state.icon} alt={state.title} /></Icon>
                <Count>{state.score}</Count>
                <Title>{state.title}</Title>
            </ScoreCont>
        </Score>
    )
}

const About = ({data}) => {
    return (
        <MainContainer background={AboutBackground} id="about">
            <SectionContainer>
                <h2 className="featured-heading">{data.heading}</h2>
                <div className="featured-project-line"></div>
                <AboutContent>
                    <Cont dangerouslySetInnerHTML={{ __html:data.content}}></Cont>
                    <SectionThree>
                        {data.counter && data.counter.map((count,index)=> 
                            <ScoreCounter score={count.number} title={count.title} icon={count.icon} key={index}/>
                        )}
                    </SectionThree>
                </AboutContent>
            </SectionContainer>
        </MainContainer>
    )
}

export default About;


const MainContainer = styled.div`
    background: #fff url(${(props) => props.background});
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
`
const SectionThree = styled.div`
    display: grid;
    grid-template-columns: 28% 28% 28%;
    grid-gap:8%;
    @media only screen and (max-width: 1366px) {
        grid-template-columns: 32% 32% 32%;
        grid-gap: 2%;
        
      }
      @media only screen and (max-width: 1024px) {
        grid-template-columns: 100% ;
    
      }
`
const Icon = styled.div``
const Count = styled.div`
    text-align: left;
    font: normal normal bold 64px/95px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;`
const Title = styled.div`
    text-align: left;
    font: normal normal 200 38px/42px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;`
