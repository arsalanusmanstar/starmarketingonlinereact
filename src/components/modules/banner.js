import styled from 'styled-components'
import SectionContainer from "../styles/section-container";
import BackgroundImage from "../../assets/WebBg.png";
import VideoImage from "../../assets/home.mp4";
import GuarantLogo from "../../assets/1Icon.png";
const BannerText = ({state}) => {
    return (
            <BannerCont >
                <GuaranteeLogo background={GuarantLogo}/>
                <Heading>{state.heading}</Heading>
                <Subheading>{state.sub_heading}</Subheading>
                <Content>{state.content}</Content>
                <Button href="#about" style={{cursor:'pointer'}}> Learn More </Button>
                <SubButton>Know us in 2 mintues <i className="fa fa-long-arrow-right"></i></SubButton>
            </BannerCont>   
    )
}
const Video = ({state}) => {
    return (
        <VideoImg controls loop autoPlay playsInline muted id="video">
            <source src={VideoImage} type="video/mp4" />
        </VideoImg>
    )
}
const TopBanner = ({state,data}) => {
    return (
    <MainSection background={BackgroundImage}>
        <SectionContainer minHeight="800px" style={{paddingTop:0}}>
                 <BannerText state={data} />
                 <Video state={state} />
        </SectionContainer>
    </MainSection>    
    )
}



export default TopBanner;

const MainSection = styled.section`
    background: url(${(props) => props.background});
    margin-top: -210px;
    padding-top: 260px;
    display: flex;
`;
const BannerCont = styled.div`
    width: 691px;
    height: 393px;
    position:absolute; 
    top: 40%;
    transform: translate(0%, -50%);
    background: rgb(255 255 255 / 28%) 0% 0% no-repeat padding-box;
    opacity: 1;
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    padding: 35px;
`;
    
const GuaranteeLogo = styled.section`
    background: url(${(props) => props.background});
    width: 135px;
    height: 135px;
    background-size: contain;
    position: absolute;
    right: 26px;
`;
const Heading = styled.h1`
    padding:0px;
    margin:0px;
    text-align: left;
    font: normal normal 900 64px/103px 'Poppins',sans-serif;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
`;
const Subheading = styled.h2`
    font: normal normal 300 32px/29px 'Poppins',sans-serif;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    padding:0px;
    margin:0px;
    `;
const Content = styled.p`
    margin-top:40px;
    margin-bottom:30px;
    color: #fff;`;
const Button = styled.a`
    background: #13213A 0% 0% no-repeat padding-box;
    box-shadow: 0px 20px 29px #00000029;
    border-radius: 8px;
    font: normal normal 300 20px/30px 'Poppins',sans-serif;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    padding: 14px 42px;
    text-decoration:none;
`;
const SubButton = styled.a`
    float:right;
    background:none;
    font: normal normal 300 16px/25px  'Poppins',sans-serif;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    text-decoration:none;
    .fa {
        font-size: 28px;
        margin-left: 8px;
        position: relative;
        top: 5px;
    }`;

const VideoImg = styled.video`
    float: right;
    width: 60%;
    margin-bottom:30px;
    box-shadow: -1px 0px 19px rgb(0 0 0 / 47%);
`