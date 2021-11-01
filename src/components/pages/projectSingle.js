import styled from 'styled-components'
import { useEffect,useState } from "react";
import SectionContainer from "../styles/section-container";
import latest_icon07 from "../../assets/latest_icon07.png";
import Button from "../elements/button"
import Input from "../elements/input"
import Textarea from "../elements/textarea"
import description01 from "../../assets/description01.png";
import description02 from "../../assets/description02.png";
import description03 from "../../assets/description03.png";
import description04 from "../../assets/description04.png";
import description05 from "../../assets/description05.png";
import penthousewhite from "../../assets/penthousewhite.png";
import plotswhite from "../../assets/plotswhite.png";
import description06 from "../../assets/description06.png";
import description07 from "../../assets/description07.png";
import description08 from "../../assets/description08.png";
import description09 from "../../assets/description09.png";
import descriptionbanner from "../../assets/descriptionbanner.png";
import projects09 from "../../assets/projects09.png";
import description10 from "../../assets/description10.png";
import Facilities01 from "../../assets/Facilities01.png";
import Facilities02 from "../../assets/Facilities02.png";
import Facilities03 from "../../assets/Facilities03.png";
import Facilities04 from "../../assets/Facilities04.png";
import Facilities05 from "../../assets/Facilities05.png";
import Facilities06 from "../../assets/Facilities06.png";
import Facilities07 from "../../assets/Facilities07.png";
import Facilities08 from "../../assets/Facilities08.png";
import pdfImage from "../../assets/pdf.png";
import back from "../../assets/back.png";
import rightboxes from "../../assets/rightboxes.png";
import useSWR from 'swr'
import axios from "axios";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ReactLoading from "react-loading";
import {EmailShareButton,FacebookShareButton,LinkedinShareButton,TwitterShareButton,WhatsappShareButton} from "react-share";
import {EmailIcon,FacebookIcon,LinkedinIcon,TwitterIcon,WhatsappIcon} from "react-share";



const fetcher = (url) => fetch(url,{
  method:'Post',
  
}).then((res) => res.json());

const ProjectSingle = ({match,location}) => {
  const { data, error } = useSWR('/singleprojects?slug='+match.params.slug, fetcher, {refreshInterval: 0,
    refreshWhenOffline : false})
  const baseUrl = 'https://starmarketingonline.com';
  const [pdf,setPdf] = useState(0);
  const [activeContent,setActiveContent] = useState(false);
  const [videoModel,setVideoModel] = useState();
  const [success,setSuccess] = useState('');
  const [shareActive,setShareActive] = useState(false);
  
  const submitHandler = e => {
      e.preventDefault();
      const data = new FormData(e.target);
      axios.post('https://sheet.best/api/sheets/3f32dba9-712b-4a21-8585-48cc2c2da400', data, {
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(response => {
          setSuccess('Thank you for submit your request. We will contact you shortily.')
      })
   }

  

  return (
    <Mainproject  style={{backgroundImage:`url('/assets/page_bg.png')`}}>
      <Header />
      {data ?  data[0] &&
      <>
        <DescriptionBanner background={data[0]._embedded['wp:featuredmedia'][0].source_url}>
            <SectionContainer>
            
            <>
               {data[0].acf.filters.video &&  <div className="play_section" onClick={()=>setVideoModel(data[0].acf.filters.video)}>
                 <Imge src={description09}></Imge>
                 <p >Watch<br/>Property Video</p>
               </div>
               }
               <h1  dangerouslySetInnerHTML={{ __html: data[0].title.rendered }}></h1>
               <h5 dangerouslySetInnerHTML={{ __html: data[0].acf.filters.tagline }}></h5>
               <div className="loction_section">
                 <Imge src={projects09}></Imge>
                 <p dangerouslySetInnerHTML={{ __html: data[0].acf.filters.address_information.address }}></p>
               </div>
               
               <button className="red" >
                 
                   Scroll to see detail <Imge src={description10}></Imge>
                </button>
                </>
              
            </SectionContainer>
        </DescriptionBanner>
          

     
        <ProjectsDescription>
           <SectionContainer>

              <ProjectsDescriptionLMain background={description01}>

                  <ProjectsDescriptionLfet >
                     <h1>PROJECT DESCRIPTION</h1>
                    <div  dangerouslySetInnerHTML={{ __html:htmlDecode(data[0].excerpt.rendered)}} ></div>
                     <button onClick={()=>setActiveContent(true)}>Read more  <Imge src={latest_icon07}></Imge></button>
                     <ProjectSectionBoxesMain>
                      { data[0].acf.filters.categories && data[0].acf.filters.categories.map((cat,index)=>
                        <ProjectSectionBoxes key={index}>
                          <Imge src={ 
                            cat == 'shop' ? description02 
                            : cat == 'apartments' ? description03 
                            : cat == 'offices' ? description04 
                            : cat == 'penthousewhite' ? penthousewhite 
                            : cat == 'plots' ? plotswhite 
                            : cat == 'houses' && description05 
                            
                            }></Imge>
                          <button>{cat}</button>
                        </ProjectSectionBoxes>
                      )}
                     </ProjectSectionBoxesMain>
                  </ProjectsDescriptionLfet>
                  <ProjectsDescriptionRight>
                  <CallSectionMain>
                <CallRequests >
                    <Imge className="description_top" src={description06}></Imge>
                    <h2>Instant Call Back</h2>
                </CallRequests>
                <form className="callform" method="POST" id="contactForm"  onSubmit={(e)=>submitHandler(e)}>
                    <Input type="text" name="Name" placeholder="Name" title="Name" />
                    <Input type="text" name="Country" placeholder="Your Country" title="Email" />
                    <Input type="text" name="City" placeholder="Your City" title="City" />
                    <Input type="number" name="Phone" placeholder="+92" title="Phone" />
                    <Input type="hidden" name="Url" title="Url" value={location.pathname} />
                    <Textarea name="Details" placeholder="Enter your message..." title="Details" />
                    <Button type="submit" value="Request info" />
                    <br />
                    {success}
                </form>
                </CallSectionMain>
                <SaveShare>
                  {/* <SaveShareLfet>
                  <Imge src={description07}></Imge>
                  <p>Save</p>
                  </SaveShareLfet> */}

                  <SaveShareLfet onClick={()=>setShareActive(shareActive ? false:true)}>
                    <Imge src={description08}></Imge>
                    <p>Share</p>
                    </SaveShareLfet>
                  </SaveShare>
                  <div className={shareActive ? "ShareButtons active":"ShareButtons"}>
                    <EmailShareButton  url={baseUrl+location.pathname} onClick={()=>setShareActive(false)}><EmailIcon size={32} round={true} /></EmailShareButton>
                    <FacebookShareButton  url={baseUrl+location.pathname} onClick={()=>setShareActive(false)}><FacebookIcon size={32} round={true} /></FacebookShareButton>
                    <TwitterShareButton  url={baseUrl+location.pathname} onClick={()=>setShareActive(false)}><LinkedinIcon size={32} round={true} /></TwitterShareButton>
                    <EmailShareButton  url={baseUrl+location.pathname} onClick={()=>setShareActive(false)}><TwitterIcon size={32} round={true} /></EmailShareButton>
                    <WhatsappShareButton  url={baseUrl+location.pathname} onClick={()=>setShareActive(false)}><WhatsappIcon size={32} round={true} /></WhatsappShareButton>
                  </div>



                  </ProjectsDescriptionRight>

              </ProjectsDescriptionLMain>




              <Facilities>
                <h1>FACILITIES</h1>
                <FacilitiesBack>
                  {data[0].acf.filters.facilities && data[0].acf.filters.facilities.facility.map((faci,index)=>
                  <FacilitiesBoxes key={index}>
                    <Imge src={
                      faci == 'beach' ? Facilities01 : 
                      faci == 'scurity' ? Facilities02 : 
                      faci == 'gated' ? Facilities03 : 
                      faci == 'lounge' ? Facilities04 : 
                      faci == 'playarea' ? Facilities05 : 
                      faci == 'gym' ? Facilities06 : 
                      faci == 'swimming' ? Facilities07 :
                      faci == 'gaming' && Facilities08
                    }></Imge>
                    <p>{faci}</p>
                  </FacilitiesBoxes>
                  )}
                  <FacilitiesBoxesBottom> <h5>& ALL MODERN AMENITIES</h5> </FacilitiesBoxesBottom> 
                  </FacilitiesBack>
            
             </Facilities>

             <PropertySection>
                <h1>PROPERTY PORTFOLIO</h1>
                <PropertyMain>
                   <PropertyLeft>
                      {data && data[0].acf.filters.property_portfolio_f  && data[0].acf.filters.property_portfolio_f.property_file && data[0].acf.filters.property_portfolio_f.property_file.map((files,index)=>
                        <Boxes key={index} className={pdf == index && 'active'} onClick={()=>setPdf(index)}>
                          <Imge src={pdfImage}></Imge>
                          <h3>{files.file_title}</h3>
                        </Boxes>
                      )}
                   </PropertyLeft>

                   <PropertyRight>
                   {data[0].acf.filters.property_portfolio_f  && data[0].acf.filters.property_portfolio_f.property_file &&  data[0].acf.filters.property_portfolio_f.property_file.filter((file,index)=> index == pdf).map((files,index)=>
                       <embed src={files.file_url} type="application/pdf" width="100%" height="100%" />
                   )}
                   </PropertyRight>

                </PropertyMain>

            </PropertySection>
            



            <GallerySection>
                <h1>GALLERY</h1>
                <GalleryMain>
                {data[0].acf.filters.gallery && data[0].acf.filters.gallery.map((gallery,index)=>
                   <GBoxes key={index}>
                     <Imge src={gallery} width="100%"></Imge>
                   </GBoxes>
                )}

              </GalleryMain>

            </GallerySection>


            <LocationSection>
              <h1>PROJECT LOCATION</h1>
              <LocationSectionyMain>

                  <LocationSectionLeft>
                    <iframe src={data[0].acf.filters.address_information && data[0].acf.filters.address_information.map} width="100%" height="450" loading="lazy"></iframe>
                  </LocationSectionLeft>

                  <LocationSectionRight>
                      <Imge src={rightboxes}></Imge>
                       
                      <RightBoxes>
                       <p>Location</p>
                       <h4 dangerouslySetInnerHTML={{ __html: data[0].acf.filters.address_information.location }}></h4>
                      </RightBoxes>
                      <RightBoxes>
                      <p>Contact</p>
                      <h2  dangerouslySetInnerHTML={{ __html: data[0].acf.filters.address_information.phone }}></h2>
                      </RightBoxes>

                  </LocationSectionRight>

              </LocationSectionyMain>

            </LocationSection>


         
           </SectionContainer>
        </ProjectsDescription>
        
        <ProjectContentSlides className={activeContent && 'active'}>
          <div className="projectContent">
              <Back bg={back} onClick={()=>setActiveContent(false)}></Back>
              {/* <h1>PROJECT DESCRIPTION</h1> */}
              <div className="content" dangerouslySetInnerHTML={{ __html:htmlDecode(data[0].content.rendered)}}></div>
          </div>
        </ProjectContentSlides>
        <VideoModel className={videoModel && 'active'}>
          <div className="back" onClick={()=>setVideoModel()}>X</div>
          {videoModel && 
            <VideoImg controls autoplay>
                <source src={videoModel} type="video/mp4" />
            </VideoImg> 
          }
        </VideoModel>

        </> : <ReactLoading type={'bubbles'}  className="loading red" style={{margin:'0 auto',color:"#fff",height:'100vh',width:"80px"}} /> 
        }
      <Footer />
   </Mainproject>
  );
};

export default ProjectSingle;


const  htmlDecode = (content) => {
  let e = document.createElement('div');
  e.innerHTML = content;
  return e.innerHTML;
}

const LocationSection = styled.div`
 h1 {
  font-size: 53px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 14% 0px 60px 0px;
  clear: both;
}
`

const LocationSectionyMain = styled.div`
display: grid;
grid-template-columns: 65% 30%;
gap: 5%;
background: #000;
color: #fff;
padding: 60px 60px;


`

const LocationSectionLeft = styled.div`

`
const LocationSectionRight = styled.div`
background: #FF4148;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
border-top: 10px solid  #B5292E;
padding: 20px 30px;
img {
  margin:0 auto;
  margin-bottom: 30px;
  width: 100px;
  display:block;
}

`
const RightBoxes = styled.div`

  background: #ffffff26;
  border-radius: 18px;
  display: block;
  text-align: center;
  padding: 16px 20px;
  margin-bottom: 20px;
   p {
    margin: 0px;
    margin-bottom: 10px;
}
 h4 {
  font-size: 17px;
  font-weight: 500;
  margin: 0px;
}

h2 {
  margin: 0px;
  font-size: 30px;
  letter-spacing: 1px;
}

`


const GallerySection = styled.div`
 h1 {
  font-size: 53px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 100px 0px 60px 0px;
}

`
const GalleryMain = styled.div`
display: grid;
grid-template-columns: 30% 30% 30%;
gap: 5%;

`

const GBoxes = styled.div`


`




const PropertySection = styled.div`
h1 {
  font-size: 53px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 80px 0px 40px 0px;
}

  
  `
  const PropertyMain = styled.div`
  display: grid;
  min-height:700px;
  grid-template-columns: 20% 70%;
  gap: 5%;
  background: #F3F3F3;
  padding: 5% 5%;
  `
  const PropertyLeft = styled.div`
  
  `
  const Boxes = styled.div`
  background: #fff;
  display: block;
  text-align: center;
  padding: 30px 0px;
  margin: 30px 0px 30px 0px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 8px;
 img {
    text-align: center;
    margin: 0 auto;
}

 h3 {
    color: #6A6A6A;
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;
    margin: 24px 0px 0px 0px;
}
&.active{
  background: #f3f3f3;
}
  
  `
  const PropertyRight = styled.div`
    background: #000;
    p{
      text-align: center;
      height: 600px;
      color: #f3f3f3;
      padding-top: 90px;
      font-size: 24px;
    }
  `

const FacilitiesBoxesBottom = styled.div`
  position: absolute;
  bottom: 21px;
  text-align: center;
  left: 0;
  right: 0;
`
const Facilities = styled.div`
h1 {
  font-size: 53px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 80px 0px 40px 0px;
}
h5 {
  font-size: 15px;
  font-weight: 100;
  letter-spacing: 7px;
  color: #fff;
}
`
const FacilitiesBoxes = styled.div`
margin: auto;
p {
  margin: 16px 0px;
  letter-spacing: 1px;
  text-align: center;
  text-transform: capitalize;
}
 img {
  margin: auto;
}
`
const FacilitiesBack = styled.div`
  background: #001439;
  border-radius: 10px;
  color: #fff;
  padding: 50px 30px 100px 30px;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  position: relative;
`

const DescriptionBanner = styled.div`
background:url(${(props) => props.background}) no-repeat center;
height: 716px;
display: block;
background-size: cover;
position: relative;
&:before{
  content: '';
  background-image: linear-gradient(-90deg, rgba(255, 255, 255, 0) 1%, black 100%);
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
}
button {
  background: rgb(255 255 255 / 14%);
  border: 1px solid #B9AB66;
  color: #fff;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 33px 80px 33px 35px;
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: 100;
  text-transform: capitalize;
  border-radius: 10px;
  img {
    position: absolute;
    right: 38px;
    top: 28px;
  }
}

.play_section {
  display: flex;
  color: #fff;
  cursor: pointer;
  img {
    width: fit-content;
    height: fit-content;
    margin-right: 9px;
}
 p {
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 1px;
  margin: 2px 0px;
}
}
 h1 {
  color: #fff;
  letter-spacing: 1px;
  font-weight: 600;
  text-shadow: 0px 4px #000;
}
 h5 {
  font-size: 28px;
  color: #fff;
  font-weight: 300;
  letter-spacing: 1px;
  border-bottom: 1px solid #ffffff5e;
  width: 50%;
  padding: 0px 0px 8px 0px;
  margin: 0px 0px 38px 0px;
}
.loction_section {
  color: #fff;
  display: flex;
  margin: 22px 0px;
   img {
    height: fit-content;
    width: fit-content;
    margin-right: 10px;
}
p {
  letter-spacing: 1px;
}

}
`
const SaveShare = styled.div`
  display: grid;
  grid-template-columns: 100%;
  padding: 40px 30px 0px 30px;
  
 img {
    width: fit-content;
    height: fit-content;
    margin-right: 15px;
  }
  .css-1vw4uqh-SaveShare p {
    margin: 0px;
    font-size: 20px;
  }
`
const SaveShareLfet = styled.div`

  display: flex;
  justify-content: center;

`

const CallSectionMain = styled.div` 
display: grid;
.callform{
  padding: 79px 30px;
    padding-top: 20px;
    padding-bottom: 0px;
  }
.fild {
    float: left;
    width: 100%;
}
.fild input {
  border: 0px;
  border-bottom: 1px solid #929292;
  width: 100%;
  font-size: 18px;
  text-transform: uppercase;
  line-height: 45px;
  letter-spacing: 1px;}
textarea {
    width: 100%;
    font-size: 18px;
    text-transform: uppercase;
    line-height: 24px;
    letter-spacing: 1px;
    border: 0px;
    border-bottom: 1px solid #929292;
}
textarea, input:focus {
    outline: none;
}

`
const CallRequests = styled.div` 
    width: 100%;
     h2 {
        font-size: 34px;
        font-weight: 400;
        color: #fff;
        margin: 20px 31px;
        line-height: 43px;
        text-shadow: 1px 1px 1px #00000070;
    }
    
`

const Imge = styled.img`
  
`
const ProjectSectionBoxesMain = styled.div`
display: grid;
grid-template-columns: 16% 16% 16% 16%;
justify-content: flex-start;
gap: 45px;
margin: 55px 0px 0px 0px;
`
const Mainproject = styled.div`

`
const ProjectsDescription = styled.div`
  background: #fff;
  display: block;
    .ShareButtons{
      display:none;
      text-align: center;
      position: absolute;
      background: #fff;
      width: 194px;
      box-shadow: 0px 1px 5px #ff4148;
      border-radius: 42px;
      padding: 13px 0px 8px;
      margin-left: 95px;
      margin-top: -5px;
      &.active{
        display:block;
      }
      :before {
        content: '';
        width: 0;
        height: 0;
        border-left: 10px
        solid transparent;
        border-right: 10px
        solid transparent;
        border-bottom: 10px
        solid #ffffff;
        position: absolute;
        top: -10px;
        right: 0;
        left: 0;
        margin: 0 auto;}
    }
`
const ProjectsDescriptionLMain = styled.div`
background:url(${(props) => props.background}) no-repeat right;
background-size: cover;
  color: #fff;
  display: grid;
  grid-template-columns: 74% 26%;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 66% 34%;

}
  label {
    display: none;
}
`
const ProjectsDescriptionLfet = styled.div`

  padding: 50px 20% 50px 50px;
  letter-spacing: 1px;
  h1 {
  font-size: 53px;
  font-weight: 600;
  }

  p {
  font-size: 24px;
  font-weight: 300;
  color: #ffffffe6;
  }

  button {
    background: #afafaf4f;
    padding: 23px 44px;
    color: #ffffffc7;
    border-radius: 10px;
    font-size: 21px;
    letter-spacing: 1px;
    cursor:pointer;
  img {
    float: right;
    margin: 4px 0px 0px 24px;
  }
  }
  

`
const ProjectSectionBoxes = styled.div`
text-align: center;
padding: 12px 10px;
margin: 0 auto;
background: #5152524f;
width: -webkit-fill-available;
border-radius: 14px;
img {
  text-align: center;
  margin: 0 auto;
  display: block;
  height: 44px;
}
button {
  background: none;
  padding: 0px;
  margin: 12px 0px 0px 0px;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: capitalize;
}

`
const ProjectsDescriptionRight = styled.div`
background: #FF4148;
img.description_top {
  width: 150px;
  height: 150px;
  border-radius: 20px;
  
  margin-top: -70px ;
      margin-left: 25px;
}
input {
  padding: 10px 20px;
  border-radius: 10px;
}
.input_fild {
  margin-bottom: 8px;
}
textarea {
  padding: 12px 20px;
  border-radius: 10px;
  height: 130px;
}
.fild_button button {
  background: none;
  width: 100%;
  border: 1px solid #fff;
  text-align: center;
  font-size: 21px;
  font-weight: 300;
  padding: 17px 0px;
  border-radius: 10px;
  color: #fff;
}
 .fild_button button img {
  display: none;
}

`

const  ProjectContentSlides = styled.div`
  position: fixed;
  right: -2000px;
  width: 100%;
  background: rgb(0 0 0 / 90%);
  height: 100%;
  z-index: 9999;
  top: 0;
  .projectContent {
    background: #fff;
    width: 70%;
    position: fixed;
    right: -2000px;
    padding: 40px;
    height: 100vh;
    overflow: scroll;
    -webkit-transition: all 0.5s 0s ease;
    -moz-transition: all 0.5s 0s ease;
    -o-transition: all 0.5s 0s ease;
    transition: all 0.5s 0s ease;
    h1 {
      padding: 0;
      margin: 0;
      font-size: 59px;
    }
    h2 {
      margin: 0;
    }
  }
  &.active{
    .projectContent {
        position: fixed;
        right: 0;
    }
    right: 0;
  }
`
const ProjectContentText = styled.div`

`
const Back = styled.button`
  background:url(${(props) => props.bg}) no-repeat center;
  height: 40px;
  width: 40px;
  display: block;
  background-size: contain;
  margin-bottom: 20px;
  cursor:pointer;
`

const VideoModel = styled.div`
  position: fixed;
  right: -2000px;
  width: 100%;
  background: rgb(0 0 0 / 85%);
  height: 100%;
  z-index: 9999;
  top: 0;
  video{
    width: 50%;
    margin: 0 auto;
    display: block;
    top: 22%;
    position: absolute;
    right: 0;
    left: 0;
  }
  .back{
    color: #000;
    z-index: 99;
    position: absolute;
    font-size: 28px;
    right: 20px;
    top: 20px;
    background: #fff;
    width: 60px;
    height: 60px;
    border-radius: 37px;
    text-align: center;
    padding: 9px 0 0;
    cursor:pointer;
  }
  }
  &.active{
    right: 0;
  }
`
const VideoImg = styled.video`
    float: right;
    width: 60%;
    margin-bottom:30px;
    box-shadow: -1px 0px 19px rgb(0 0 0 / 47%);
`
