import styled from 'styled-components'
import SectionContainer from "../styles/section-container";
import BackgroundImage from "../../assets/WebBg.png";
import roket from "../../assets/roket.gif";
import VideoImage from "../../assets/homepage.mp4";
import GuarantLogo from "../../assets/1Icon.png";
import Fade from 'react-reveal/Fade';
import FB from "../../assets/FB.png";
import TW from "../../assets/TW.png";
import YT from "../../assets/YT.png";
import In from "../../assets/In.png";
import INSTA from "../../assets/INSTA.png";
import axios from "axios";
import ReactLoading from "react-loading";
import { useEffect,useState } from "react";


const BannerText = ({state}) => {
    
    return (
    
        <BannerCont >
            <GuaranteeLogo  background={GuarantLogo}></GuaranteeLogo> 
            <Heading><Fade left big >{state.heading}</Fade></Heading>   
            <Subheading><Fade left big >{state.sub_heading} </Fade></Subheading>
            <Content>{state.content}</Content>
            <Button  href="#about"  style={{cursor:'pointer'}} >  Learn More  </Button>
            <SubButton> Work With Us <i className="fa fa-long-arrow-right"></i> </SubButton>   
        </BannerCont> 
          
    )
}
const Video = ({state}) => {
    const [success,setSuccess] = useState('');
  const [loader,setLoader] = useState(false);
    const submitHandler = e => {
        e.preventDefault();
        //validate project Type checkbox
        var project_type = document.getElementsByName('project_type[]')
        var pt_length = 0;
        for(var i=0; i< project_type.length; i++) {
            if(project_type[i].checked)
                pt_length++
        }
       if(pt_length<1)
       {
          setSuccess('Please select atleast one project type')
          return false;
       }
        
       //validate service checkbox
       
       var service = document.getElementsByName('service[]')
       var service_length = 0;
       for(var i=0; i< service.length; i++) {
           if(service[i].checked)
               service_length++
       }
      if(service_length<1)
      {
        setSuccess('Please select atleast one service')
         return false;
      }

         setLoader(true);
          const data = new FormData(e.target);
          axios.post('https://starmarketingonline.com/api/api.php', data, {
              headers: {
                  'Content-Type': 'application/json'
              }
          })
          .then(response => {
              console.log(response)
            document.getElementById("queryForm").reset();
            setLoader(false)
            setSuccess('Thank you for submitting the request. Our representative will contact you shortly.')
          })
       }
    return (
        <>
        {/*<VideoImg  controls loop autoPlay playsInline muted defer  id="video">
                <source src={VideoImage} type="video/mp4" />  
        </VideoImg>*/}
         <BannerFormSection>
                <h1><Fade right big >Manage your Real Estate marketing with us!</Fade></h1>
                <p>it takes less than <span>5 minutes</span>to fill out the information required know about your project.</p>
                <div className="BannerMainSection">
                <form method="POST" id="queryForm" onSubmit={(e)=>submitHandler(e)}>
                <div className="left">
                   <div className="fildeBanner"><input type="text" name="name" placeholder="Name" required /></div>
                   <div className="fildeBanner"><input type="text" name="email" placeholder="Email" required/></div>
                   <div className="fildeBanner"><input type="text" name="mobile" placeholder="Phone" required/></div>
                   <div className="fildeBanner"><input type="text" name="project_location" placeholder="Project Name" required/></div>
                   <div className="projectMain">
                      <div className="projectMainLeft">
                         <h4>Project type</h4>
                         <div className="checkboxBanner"><input type="checkbox" name="project_type[]" value="Apartments" id="Apartments" /><label for="Apartments">Apartments</label></div>
                         <div className="checkboxBanner"><input type="checkbox" name="project_type[]" value="Plots" id="Plots" /><label for="Plots">Plots</label></div>
                         <div className="checkboxBanner"><input type="checkbox" name="project_type[]" value="Housing Scheme" id="Housing"/><label for="Housing">Housing Scheme</label></div>
                         <div className="checkboxBanner"><input type="checkbox" name="project_type[]" value="Shops & Showrooms" id="Shops"/><label for="Shops">Shops & Showrooms</label></div>
                         <div className="checkboxBanner"><input type="checkbox" name="project_type[]" value="Resorts & Farmhouse" id="Resorts"/><label for="Resorts">Resorts & Farmhouse</label></div>
                         <div className="checkboxBanner"><input type="checkbox" name="project_type[]" value="Other" id="Other"/><label for="Other">Other</label></div>
                      </div>
                      <div className="projectMainRight">
                      <h4>Choose Services</h4>
                      <div className="checkboxBanner"><input type="checkbox" name="service[]" value="360 Marketing" id="Marketing" /><label for="Marketing">360 Marketing</label></div>
                         <div className="checkboxBanner"><input type="checkbox" name="service[]" value="Digital Marketing" id="Digital" /><label for="Digital">Digital Marketing</label></div>
                         <div className="checkboxBanner"><input type="checkbox" name="service[]" value="Project website" id="Project" /><label for="Project">Project website</label></div>
                         <div className="checkboxBanner"><input type="checkbox" name="service[]" value="Mobile app" id="Mobile" /><label for="Mobile">Mobile app</label></div>
                      </div>
                   </div>
                   <button className="submit" type="submit">Submit</button>
                   {/* <Button type="submit" className="submit">Submit</Button> */}
                </div>
                {success}
                </form>
                {loader && <ReactLoading type={'bubbles'}  className="loading red" style={{margin:'0 auto',color:"red",height:'100vh',width:"80px"}} />}
                <div className="right">
                    <Imge className="roket" style={{width:'80% '}} src={roket} ></Imge>
                    <h5>Let's connect</h5>
                    <h3>111 111 160</h3>
                    <SL>
                        <Slide bottom> <a href="https://twitter.com/starmarketingon" target="_blank"> <IconTW className="FS" src={TW}></IconTW></a> </Slide>
                        <Slide bottom> <a href="https://www.facebook.com/starmarketingpk" target="_blank"> <IconTW className="FS" src={FB}></IconTW></a> </Slide>
                        <Slide bottom><a href="https://www.youtube.com/c/StarMarketingPvtLtd" target="_blank"> <IconTW className="FS" src={YT}></IconTW></a> </Slide>
                        <Slide bottom><a href="https://www.linkedin.com/company/starmarketingpvtltd/mycompany/" target="_blank"><IconTW className="FS" src={In}></IconTW></a> </Slide>
                        <Slide bottom> <a href="https://www.instagram.com/starmarketingpvtltd/" target="_blank"> <IconTW className="FS" src={INSTA}></IconTW></a> </Slide>
                    </SL>
                </div>  
                </div>
         </BannerFormSection>
       </>
    )
}
const TopBanner = ({state,data}) => {
    return (
    <MainSection background={BackgroundImage}>
        <SectionContainer  style={{paddingTop:0, paddingBottom: 40}}>
           <BannerMainSection>
                 <BannerText state={data} />
                 {VideoImg && <Video state={state} />} 
          </BannerMainSection>
        </SectionContainer>
    </MainSection>    
    )
}



export default TopBanner;


const BannerMainSection = styled.section`
    display: grid;
    grid-template-columns: 49% 49%;
    gap: 2%;
    
    align-items: center;
@media only screen and (max-width: 820px) {
    grid-template-columns: 100%;
}
@media only screen and (max-width: 480px) {
    gap: 1%;
}


`;
const Slide = styled.div`
`;

const SL = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    @media only screen and (max-width: 1080px) {
        justify-content: flex-start;
    }
    @media only screen and (max-width: 820px) {
        justify-content: center;
    }
    img{
        width: 24px;
    }

`;
const IconTW = styled.img`
   
`;
const Imge = styled.img`
  
`;
const BannerFormSection = styled.section`
    background: #fff;
    padding: 30px 30px;
    border-radius: 20px;
    border-bottom-left-radius: 0px;
    @media only screen and (max-width: 820px) {
        padding: 20px 20px;
    }
h1 {
    font-size: 25px;
    margin: 0px;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    margin-bottom: 10px;
    font-weight: 600;
}
p {
    font-size: 14px;
    text-transform: capitalize;
    color: #939393;
  span {
        font-size: 16px;
        margin: 0px 6px;
        color: #000;
    }
}

.BannerMainSection {
    display: grid;
    grid-template-columns: 60% 38%;
    gap: 2%;
    align-items: center;
    padding: 20px 0px 0px 0px;
    @media only screen and (max-width: 1080px) {
        grid-template-columns: 100%;
        gap: 0%;
        padding: 0px 0px 0px 0px;
    }
    @media only screen and (max-width: 820px) {
        grid-template-columns: 65% 35%;
        gap: 0%;
    }
    @media only screen and (max-width: 480px) {
        grid-template-columns: 100%;
        gap: 0%;
    }
}
.fildeBanner input {
    width: 100%;
    border: 1px solid #ccc;
    padding: 16px 22px;
    border-radius: 10px;
    border-bottom-left-radius: 0px;
    font-size: 14px;
    letter-spacing: 0.5px;
    text-transform: capitalize;
}

.fildeBanner {
    margin: 0px 0px 6px 0px;
    @media only screen and (max-width: 1080px) {
        margin: 0px 2px 6px 2px;
        width: 49%;
        float: left;
    }
    @media only screen and (max-width: 480px) {
        margin: 0px 2px 6px 2px;
        width: 100%;
        float: none;
    }
}

.fildeBanner input:focus {
    outline: none;
}
.projectMain {
    display: grid;
    grid-template-columns: 49% 49%;
    gap: 2%;
    @media only screen and (max-width: 1080px) {
        clear: both;
    }
    @media only screen and (max-width: 480px) {
        grid-template-columns: 100%;
        gap: 0%;
    }
}

.projectMain h4 {
    font-size: 16px;
    text-transform: capitalize;
    margin: 16px 0px 14px 0px;
    color: #fe000a;
    font-weight: 600;
    letter-spacing: 0.1px;
    @media only screen and (max-width: 1080px) {
        width: fit-content;
        padding: 10px 0px;
        margin: 0px 0px 0px 0px;

    }
    
}

.checkboxBanner {
    font-size: 12px;
    text-transform: capitalize;
    margin: 0px 0px 4px 0px;
    gap: 10px;
    display: flex;
    letter-spacing: 0.5px;
}

.checkboxBanner input {
    margin: 0px;
    width: 16px;
    height: 16px;
}
.submit {
    cursor:pointer;
    display: block;
    width: 100%;
    text-align: center;
    border-bottom-left-radius: 0px;
    padding: 10px 0px;
    background: #fe000a;
    margin: 8px 0px 0px 0px;
    font-size: 16px;
    letter-spacing: 1px;
    border-radius: 6px;
    border-bottom-left-radius: 0px;
    color: #fff;
}
.BannerMainSection .right {
    text-align: center;
    @media only screen and (max-width: 1080px) {
        text-align: center;
        margin-top: 10px;
    }
    @media only screen and (max-width: 480px) {
        text-align: center;
        
    }
}

.BannerMainSection .right h5 {
    margin: 0px 0px 0px 0px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: #9b9b9b;
}

.BannerMainSection .right h3 {
    margin: 0px 0px;
    color: #fe000a;
    font-size: 46px;
    font-weight: 600;
}
.BannerMainSection .left {
    border-right: 1px solid #ededed;
    padding: 0px 30px 0px 0px;
    @media only screen and (max-width: 480px) {
        border-right: 0px solid #ededed;
        padding: 0px 0px 0px 0px;
    }
}

`;

const MainSection = styled.section`
    background: url(${(props) => props.background})no-repeat;
   
    display: flex;
    background-attachment: fixed;
    background-position: right;
    background-size: cover;
    height: 87vh;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1080px) {
        height: 100%;
    }
    @media only screen and (max-width: 1366px) {
        height: 100%;
    }
`;
const BannerCont = styled.div`
    background: rgb(255 255 255 / 28%) 0% 0% no-repeat padding-box;
    opacity: 1;
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    padding: 35px;
    z-index: 123;
    height: fit-content;
    border-radius: 20px;
    border-bottom-left-radius: 0px;
    @media only screen and (max-width: 1100px) {
        z-index: revert;

    }
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
        padding-bottom: 30px;
        margin-bottom: 0px;
        z-index: revert;
        }
      }
`;
    
const GuaranteeLogo = styled.section`
    background: url(${(props) => props.background});
    width: 135px;
    height: 135px;
    background-size: contain;
    position: relative;
    float: right;
    top: -10px;
    @media only screen and (max-width: 1080px) {
        width: 80px;
        height: 80px;

    }
    @media only screen and (max-width: 820px) {
        width: 100px;
        height: 100px;

    }
    @media only screen and (max-width: 480px) {
        width: 70px;
        height: 70px;
        right: -8px;
        top: 8px;

    }
`;
const Heading = styled.h1`
    padding:0px;
    margin:0px;
    text-align: left;
    font: normal normal 900 44px/80px 'Poppins',sans-serif;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    text-shadow: 1px 2px 1px #000;
    @media only screen and (max-width: 1080px) {
       
        font: normal normal 900 31px/45px 'Poppins',sans-serif;

    }
    @media only screen and (max-width: 820px) {
       
        font: normal normal 900 50px/45px 'Poppins',sans-serif;

    }
    @media only screen and (max-width: 480px) {
        font-size: 21px;
        line-height: 60px;

    }
`;
const Subheading = styled.h2`
    font: normal normal 300 32px/10px 'Poppins',sans-serif;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    padding:0px;
    margin:0px;
    text-shadow: 1px 2px 1px #000000b5;
    @media only screen and (max-width: 1080px) {
        line-height: 22px;
        font-size: 19px;

    }
    @media only screen and (max-width: 820px) {
        line-height: 30px;
        font-size: 32px;

    }
    @media only screen and (max-width: 480px) {
        font-size: 15px;
        line-height: 5px;
    }
    `;
const Content = styled.p`
    color: #fff;
    text-shadow: 1px 2px 1px #000000b5;
    margin: 44px 0px 50px 0px;
    letter-spacing: 0.5px;
    @media only screen and (max-width: 1080px) {
        margin: 0px 0px 30px 0px;
        font-size: 14px;

    }
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
    border-radius: 15px;
    font: normal normal 300 20px/30px 'Poppins',sans-serif;
    -webkit-letter-spacing: 0px;
    -moz-letter-spacing: 0px;
    -ms-letter-spacing: 0px;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    padding: 14px 30px;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-size: 14px;
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
    -webkit-transition: all 0.35s linear;
    transition: all 0.35s linear;
    float: left;
    border-bottom-left-radius: 0px;
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
    float: right;
    background: none;
    font: normal normal 300 16px/25px 'Poppins',sans-serif;
    -webkit-letter-spacing: 0px;
    -moz-letter-spacing: 0px;
    -ms-letter-spacing: 0px;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-size: 14px;
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
    position: relative;
    background: #13213A 0% 0% no-repeat padding-box;
    padding: 16px 40px 16px 20px;
    border-radius: 15px;
    border-bottom-right-radius: 0px;
    cursor: pointer;
    .fa {
        font-size: 16px;
        right: 17px;
        position: absolute;
        top: 21px;
        @media only screen and (max-width: 480px) {
            font-size: 16px;
            right: 8px;
            position: absolute;
            top: 11px;
        }
    }
    @media only screen and (max-width: 480px) {
        float: right;
    margin: 0px;
    font-size: 12px;
    padding: 6px 33px 7px 20px;
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