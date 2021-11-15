import styled from 'styled-components'
import SectionContainer from "../styles/section-container";
import BackgroundImage from "../../assets/WebBg.png";
import VideoImage from "../../assets/homepage.webm";
import GuarantLogo from "../../assets/1Icon.png";
import latest_icon07 from "../../assets/latest_icon07.png";
import ReactAnime from 'react-animejs'


const BannerText = ({state}) => {
    
    const {Anime, stagger} = ReactAnime
    return (
      
               
              
             
               <BannerCont >
                    <GuaranteeLogo  background={GuarantLogo}/> 
                    <Heading >{state.heading}</Heading> 
                    <Subheading >{state.sub_heading}</Subheading>
                    <Content >{state.content}</Content>
                    <Button  href="#about"  style={{cursor:'pointer'}} > Learn More <LeftArrow src={latest_icon07} /></Button>
                    <SubButton >Know us in 2 mintues <i className="fa fa-long-arrow-right"></i></SubButton>
                    </BannerCont> 
              
              
             
                
               
               
          
    )
}
const Video = ({state}) => {
    return (
        
        <VideoImg  controls loop autoPlay playsInline muted defer  id="video">
            <source src={VideoImage} type="video/mp4" />
        </VideoImg>
    )
}
const TopBanner = ({state,data}) => {
    return (
    <MainSection background={BackgroundImage}>
        <SectionContainer  style={{paddingTop:0, paddingBottom: 40}}>
                 <BannerText state={data} />
            
                 {VideoImage && <Video state={state} />}
        </SectionContainer>
    </MainSection>    
    )
}


export default TopBanner;



const MainSection = styled.section`
    background: url(${(props) => props.background})no-repeat;
    margin-top: -210px;
    padding-top: 200px;
    display: flex;
    background-attachment: fixed;
    background-position: right;
    background-size: cover;
    height: 100vh;
    @media only screen and (max-width: 1024px) {
        height: 100%;
    }
`;
const BannerCont = styled.div`
    width: 691px;
    height: 393px;
    position:absolute; 
    transform: translateY(40%);
    
    background: rgb(255 255 255 / 28%) 0% 0% no-repeat padding-box;
    opacity: 1;
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    padding: 35px;
    z-index: 123;
    @media only screen and (max-width: 820px) {
        position: relative;
        transform: translateY(0%);
        width: 100%;
        height: auto;
        z-index: revert;
        @media only screen and (max-width: 480px) {
            top: 0%;
            height: auto;
            padding: 20px;
            padding-bottom: 90px;
            margin-bottom: -30px;
            z-index: revert;

        }
    
      }

`;
    
const GuaranteeLogo = styled.section`
    background: url(${(props) => props.background});
    width: 135px;
    height: 135px;
    background-size: contain;
    position: absolute;
    right: 20px;
    @media only screen and (max-width: 480px) {
            width: 70px;
            height: 70px;
            right: 14px;
            top: 25px;

    }
`;
const Heading = styled.h1`
    padding:0px;
    margin:0px;
    text-align: left;
    font: normal normal 900 64px/103px 'Poppins',sans-serif;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    text-shadow: 1px 2px 1px #000;
    @media only screen and (max-width: 480px) {
        font-size: 30px;
        line-height: 60px;

    }
`;
const Subheading = styled.h2`
    font: normal normal 300 32px/29px 'Poppins',sans-serif;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    padding:0px;
    margin:0px;
    text-shadow: 1px 2px 1px #000000b5;
    @media only screen and (max-width: 480px) {
        font-size: 15px;
        line-height: 0px;

    }
    `;
const Content = styled.p`
    margin-top:40px;
    margin-bottom:30px;
    color: #fff;
    text-shadow: 1px 2px 1px #000000b5;
    @media only screen and (max-width: 480px) {
        font-size: 14px;
        margin: 22px 0px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;

    }
    @media only screen and (max-width: 820px) {
        margin-top:15px;
        margin-bottom:19px;
    }
    
    
    `;
const Button = styled.a`
    background: #13213A 0% 0% no-repeat padding-box;
    box-shadow: 0px 20px 29px #00000029;
    border-radius: 8px;
    font: normal normal 300 20px/30px 'Poppins',sans-serif;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    padding: 18px 32px 18px 20px;
    text-decoration:none;
    font-size: 14px;
    letter-spacing: 1px;
    transition: all 0.35s linear;
    :hover{
        background: #000  0% 0% no-repeat padding-box;


    }
    :hover img {
        right: -10px;
        transition: all 0.35s linear;
    }
    @media only screen and (max-width: 480px) {
        font-size: 12px;
        padding: 4px 16px ;
        float: left;

    }
    

`;
const LeftArrow = styled.img`
    width: 26px;
    right: -2px;
    position: relative;
    transition: all 0.35s linear;
`;
const SubButton = styled.a`
    float:right;
    background:none;
    font: normal normal 300 16px/25px  'Poppins',sans-serif;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    text-decoration:none;
    font-size: 14px;
    letter-spacing: 1px;
    .fa {
        font-size: 28px;
        margin-left: 8px;
        position: relative;
        top: 5px;
    }
    @media only screen and (max-width: 480px) {
        float: left;
        margin: 0px;
        font-size: 12px;
        clear: both;
    }
    
    
    
    
    `;

const VideoImg = styled.video`
    float: right;
    width: 60%;
    margin-bottom:30px;
    box-shadow: -1px 0px 19px rgb(0 0 0 / 47%);
    object-fit: cover;
    height: -webkit-fill-available;
    
    
 @media only screen and (max-width: 1366px) {
    height: 727px;
    object-fit: cover;
    @media only screen and (max-width: 480px) {
        height: auto;
 
    }
  }
  @media only screen and (max-width: 820px) {
    width: 100%;
    height: 400px;

  }


`