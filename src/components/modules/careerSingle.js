import styled from 'styled-components';
import { useEffect,useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SectionContainer from "../styles/section-container";
import Locations from "./locations";
import useSWR from 'swr';
import axios from "axios";
import CareerImage from "../../assets/career_image.PNG";
import ReactLoading from "react-loading";
import CareerUserIcon from "../../assets/career_user_icon.PNG";
import CareerCalenderIcon from "../../assets/career_calender_icon.PNG";
import CareerLocationIcon from "../../assets/career_location_icon.PNG";
import { Link,NavLink,Redirect } from 'react-router-dom';
import CareerDetails from "../../assets/career_details.PNG";
import {FacebookShareButton, TwitterShareButton,LinkedinShareButton,WhatsappShareButton} from "react-share"


const  fetcher =  async (url) => await fetch(url).then((res) => res.json());

const CareerSingle=({match,location})=>{
  const { data, error } = useSWR('https://staging.starmarketingonline.com/wp-json/wp/v2/awsm_job_openings?_embed=true&slug='+match.params.slug, fetcher)
  const baseUrl = 'https://starmarketingonline.com';
 

  const [activeContent,setActiveContent] = useState(false);

  const [success,setSuccess] = useState('');
  const [loader,setLoader] = useState(false);

  const submitHandler = e => {
    e.preventDefault();
  
     setLoader(true);
      const data = new FormData(e.target);
      axios.post('https://starclubcard.info/api/career-api.php', data, {
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(response => {
          console.log(response)
        document.getElementById("applicationForm").reset();
        setLoader(false)
        setSuccess('Thank you for your application. We will contact you shortly.')
      })
   }
  
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  },[match.path])


  //get simliar jobs
  const [similarData,setSimilarData] = useState([]);
  useEffect(async ()=>{
    try {
    axios.get('https://staging.starmarketingonline.com/wp-json/wp/v2/awsm_job_openings?_embed=true&per_page=100')
      .then(response => {
          setSimilarData(response.data)
          //console.log(response.data,'details')
      })
      } catch (e) {
          console.error(e);
      }
  },[])

    return(
      <>
        <Mainproject  style={{backgroundImage:`url('/assets/page_bg.png')`}}>
             {/* <Header /> */}
             {data ?  data[0] && data[0].acf &&
                <SectionContainer className="classContainerCustom">
                  <Heading>
                    <h1 className="featured-heading banners custom" style={{color:'white'}}>Careers</h1>
                  </Heading>
                      <CareerSection>
                        <h2 className="careerHeading">{data[0].acf.designation}</h2>
                        <h3 className="careerSubheading">{data[0].acf.job_category}</h3>
                        <div className="careerDetails">
                          <p><img style={{marginBottom:'-5px'}} src={CareerUserIcon}></img> {data[0].acf.no_of_vacancies}</p>
                          <p><img style={{marginBottom:'-9px'}} src={CareerCalenderIcon}></img> {data[0].acf.starting_date} - {data[0].acf.ending_date}</p>
                          <p><img style={{marginBottom:'-6px'}} src={CareerLocationIcon}></img> {data[0].acf.city}</p>
                        </div>
                          <img src={CareerImage} className="careerImage"></img>
                    <CareerSubSectionMain>
                      <CareerSubSectionLeft>
                        <img src={CareerDetails} className="userImg"></img>
                        <h3 className="careerSubsectionHeading">{data[0].acf.designation} <span style={{color:'#777777', fontWeight:'300', fontSize:'22px'}}>{data[0].acf.job_type}</span></h3>
                        <h3 className="careerSubsectionAddress">{data[0].acf.location}, {data[0].acf.city}</h3>
                        <h3 className="careerSubsectionSalary">{data[0].acf.salary_range}  <span>PKR</span></h3>
                        <p className="careerDescription">{data[0].acf.description}</p>
                        <h3 className="skillsHeading">Skills</h3>
                          <div className="skillsDetails">
                          { data[0].acf.skills && data[0].acf.skills.map((skill,index)=>
                            <p className="skills" key={index}>{skill.skill_title}</p>
                            )}
                              {/* <p className="skills">Group Manager HR</p>
                              <p className="skills">Asst. Manager HR & Admin</p>
                              <p className="skills">HR Executive</p>
                              <p className="skills">Asst. Manager HR & Admin</p>
                              <p className="skills">Director HR</p>
                              <p className="skills">Director HR</p> */}
                          </div>
                          <h3 className="skillsHeading Benefits">Benefits</h3>
                          <div className="skillsDetails">
                          { data[0].acf.benefits && data[0].acf.benefits.map((benefit,index)=>
                            <p className="benefits" key={index}>{benefit.benefit_title}</p>
                            )}
                            {/* <p className="benefits">Medical Facility</p>
                            <p className="benefits">Yearly Bonus</p> */}
                          </div>
                      </CareerSubSectionLeft>
                      <CareerSubSectionRight >
                          <div className="shareButton active" onClick={()=>{
                              setActiveContent(true)
                             
                          }}>
                          <i class="fa fa-id-badge" aria-hidden="true"></i><p>Apply for this job</p>
                         
                          </div>
                          <div className="shareButton">
                              {/* <i class="fa fa-facebook" aria-hidden="true"></i><p>Share on Facebook</p> */}
                              <FacebookShareButton 
                                  url={baseUrl+location.pathname}
                                  quote={""}
                                  hashtag=""
                                  >
                                  <i class="fa fa-facebook" aria-hidden="true"></i>
                                  <p>SHARE ON FACEBOOK</p>
                              </FacebookShareButton> 
                          </div>
                          <div className="shareButton">
                              {/* <i class="fa fa-twitter" aria-hidden="true"></i><p>Share on Twitter</p> */}
                              <TwitterShareButton
                                url={baseUrl+location.pathname}
                              >
                              <i class="fa fa-twitter" aria-hidden="true"></i><p>SHARE ON TWITTER</p>
                              </TwitterShareButton>
                          </div>
                          <div className="shareButton">
                              {/* <i class="fa fa-linkedin" aria-hidden="true"></i><p>Share on Linkedin</p> */}
                              <LinkedinShareButton
                                url={baseUrl+location.pathname}
                                >
                                <i class="fa fa-linkedin" aria-hidden="true"></i><p>SHARE ON LINKEDIN</p>
                              </LinkedinShareButton>
                          </div>
                          <div className="shareButton">
                              {/* <i class="fa fa-whatsapp" aria-hidden="true"></i><p>Share on Whatsapp</p> */}
                              <WhatsappShareButton
                                url={baseUrl+location.pathname}
                                >
                                <i class="fa fa-whatsapp" aria-hidden="true"></i><p>SHARE ON WHATSAPP</p>
                              </WhatsappShareButton>
                          </div>
                      </CareerSubSectionRight>
                   </CareerSubSectionMain>
                          <h3 className="skillsHeading">Find Similar Jobs</h3>
                          <div className="similarjobs">
                          {similarData.length>0 && similarData.filter((jobs)=> jobs.acf && jobs.acf.job_category === data[0].acf.job_category).map((jobs,index)=>
                          <Link to={`/career/${jobs.slug}`} style={{ textDecoration: 'none', color:'black' }}>
                            <div className="similarJobsDetails" key={index}>
                                <img src={CareerDetails} class="userImg"></img>
                                <h3>{jobs.acf.designation}</h3>
                                <h4>{jobs.acf.location}, {jobs.acf.city}</h4>
                                <h4 style={{marginTop:'-12px'}}><span>PKR</span>  {jobs.acf.salary_range}  <span className="similarSalary">Benefits</span></h4> 
                            </div>
                          </Link>
                          )}
                            {/* <div className="similarJobsDetails">
                              <img src={CareerDetails}></img>
                              <h3>Sr. Executive</h3>
                              <h4>Star Marketing PVT. Ltd - Manhill, Karachi</h4>
                              <h4 style={{marginTop:'-12px'}}><span>PKR</span>  85 - 95000  <span className="similarSalary">Benefits</span></h4> 
                            </div> */}
                          </div>
                          {/* <h3 className="skillsHeading similar">Find Similar Jobs</h3>
                          <div className="similarjobs">
                              <div className="similarJobsDetails">
                              <img src={CareerDetails} className="userImg"></img>
                              <h3>Sr. Executive</h3>
                              <h4>Star Marketing PVT. Ltd - Manhill, Karachi
                              <span>PKR</span>  85 - 95000  <span className="similarSalary">Benefits</span></h4> 
                                </div>
                              <div className="similarJobsDetails">
                              <img src={CareerDetails} className="userImg"></img>
                              <h3>Sr. Executive</h3>
                              <h4>Star Marketing PVT. Ltd - Manhill, Karachi
                              <span>PKR</span>  85 - 95000  <span className="similarSalary">Benefits</span></h4> 
                              </div>
                          </div> */}
                      </CareerSection>

                      <LatestBoxesSlides className={activeContent && 'active'} >
                     
                          <div className="projectContent " >
                          <button className="close" onClick={()=>setActiveContent(false)}><i class="fa fa-times-circle" aria-hidden="true"></i></button>
                            <h1>APPLY FOR THIS JOB</h1>
                           
                         <form method="post" enctype="multipart/form-data" id="applicationForm" onSubmit={(e)=>submitHandler(e)}>
                          <div className="fild"><input type="text" name="name" placeholder="Name" required /></div>
                          <div className="fild"><input type="text" name="email" placeholder="Email" required/></div>
                          <div className="fild"><input type="text" name="mobile" placeholder="Phone" required/></div>
                          <div className="fild"><input type="text" name="experience" placeholder="Experience" required /></div>
                          <input type="hidden" value={data[0].acf.designation} name="job_applied"/>
                          <input type="hidden" value={match.params.slug} name="slug"/>
                          <div className="fild">
                           
                            <input type="file" id="myFile" name="cv" accept=".doc, .docx,.ppt, .pptx,.txt,.pdf" required/>

                            
                            </div>
                          <button className="submit" type="submit">Submit</button>
                          <br/>
                          <br/>
                          {success}
                          </form>
                          {loader && <ReactLoading type={'bubbles'}  className="loading red" style={{margin:'0 auto',color:"red",height:'100vh',width:"80px"}} />}
                          </div>
                      </LatestBoxesSlides>


                </SectionContainer>
           : <ReactLoading type={'bubbles'}  className="loading red" style={{margin:'0 auto',color:"#fff",height:'100vh',width:"80px"}} /> } <Footer />
        </Mainproject>

      


</>

    )
}

const CareerSubSectionMain = styled.div`
  display: grid;
  grid-template-columns: 69% 25%;
  gap: 6%;
  margin-top: 4%;
@media only screen and (max-width: 1080px) {
  grid-template-columns: 62% 35%;
  gap: 3%;
  }
@media only screen and (max-width: 820px) {
  grid-template-columns: 100%;
  gap: 0%;
}
`
const Mainproject = styled.div`
  h1.featured-heading.banners.custom {
  margin-top: -70px;
  margin-bottom: 100px;
@media only screen and (max-width: 820px) {
  margin-top: 0px;
  line-height: 50px;
}
}
`
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
  background: url(/assets/whiteImage.png) 0% 0% no-repeat padding-box;
  width: 393px;
  height: 180px;
  display: table;
  margin: 0 auto;
  position: absolute;
  right: 0;
  left: 0;
  top: -21px;
  text-align: center;
  background-size: cover;
  @media only screen and (max-width: 820px) {
  width: 266px;
  height: 110px;
}
}
`
const CareerSection = styled.div`
  background-color: white;
  border-radius: 54px;
  padding: 40px 76px;
  margin-top: 40px;
  position: relative;
@media only screen and (max-width: 1080px) {
  padding: 40px 40px;
}
@media only screen and (max-width: 480px) {
padding: 10px 10px;
  border-radius: 10px;
}
.careerHeading{
  text-align: left;
  font: normal normal 700 48px/20px Poppins;
  -webkit-letter-spacing: 0px;
  -moz-letter-spacing: 0px;
  -ms-letter-spacing: 0px;
  letter-spacing: 1px;
  color: #000000;
  opacity: 1;
  margin: 50px 0px 10px 0px;
  text-transform: uppercase;
@media only screen and (max-width: 1080px) {
  font: normal normal 700 36px/10px Poppins;
}
@media only screen and (max-width: 480px) {
  font: normal normal 700 30px/28px Poppins;
}
}
.careerSubheading{
  text-align: left;
  font: normal normal 400 22px/30px Poppins;
  -webkit-letter-spacing: 0px;
  -moz-letter-spacing: 0px;
  -ms-letter-spacing: 0px;
  letter-spacing: 0.5px;
  color: #8790a2;
  opacity: 1;
  margin: 0px 0px 30px 0px;
@media only screen and (max-width: 1080px) {
  margin: 0px 0px 15px 0px;
}
}
.careerImage{
  position: absolute;
  right: 86px;
  top: 30px;
@media only screen and (max-width: 1080px) {
  top: 14px;
  width: 26%;
  right: 69px;
}
@media only screen and (max-width: 820px) {
  top: 14px;
  width: 30%;
  right: 20px;
}
@media only screen and (max-width: 480px) {
  top: 14px;
  width: 100%;
  right: 0;
  position: relative;
  left: 0;
}
}
.careerDetails{
  display:flex;
  width: fit-content;
  justify-content:space-between;
  text-align: center;
  font: normal normal normal 18px/32px Poppins;
  letter-spacing: 0px;
  color: #001439;
  opacity: 1;
  gap: 40px;
  align-items: center;
@media only screen and (max-width: 1080px) {
  gap: 16px;
}
@media only screen and (max-width: 820px) {
  font: normal normal normal 14px/25px Poppins;
}
@media only screen and (max-width: 480px) {
  display: inline;
}
}
`
const CareerSubSectionLeft = styled.div`
.careerSubsectionHeading{
  font: normal normal 600 25px/36px 'Poppins', sans-serif;
  letter-spacing: 1px;
  color: #000000;
  margin: 0;
  text-transform: uppercase;
}
.careerSubsectionAddress{
  text-align: left;
  font: normal normal 300 18px/15px 'Poppins', sans-serif;
  letter-spacing: 1px;
  color: #000000;
  opacity: 1;
  margin: 0;
}
.careerSubsectionSalary{
  text-align: left;
  font: normal normal 500 18px/86px 'Poppins', sans-serif;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin: 0;
@media only screen and (max-width: 1080px) {
  font: normal normal 500 18px/66px 'Poppins', sans-serif;
}
span{
  background-color: rgb(209,236,239);
  color: rgb(96,123,155);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  margin-left: 10px;
  border-bottom-left-radius: 0px;
  position: relative;
  top: -12px;
  letter-spacing: 0.5px;
}
}
.careerDescription{
  text-align: left;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 1px;
  color: #000000;
  opacity: 1;
  font-weight: 300;
}
.skillsHeading{
  text-align: left;
  font: normal normal 600 25px/40px Poppins;
  -webkit-letter-spacing: 0px;
  -moz-letter-spacing: 0px;
  -ms-letter-spacing: 0px;
  letter-spacing: 1px;
  color: #3a7cf2;
  text-transform: uppercase;
@media only screen and (max-width: 1080px) {
  margin: 30px 0px 10px 0px;
}
}
.skillsDetails{
  display: inline-flex;
  flex-wrap: wrap;
.skills{
  background: #3A7CF2 0% 0% no-repeat padding-box;
  background: #3A7CF2 0% 0% no-repeat padding-box;
  -webkit-letter-spacing: 0px;
  -moz-letter-spacing: 0px;
  -ms-letter-spacing: 0px;
  letter-spacing: 1px;
  color: #FFFFFF;
  opacity: 1;
  padding: 14px 14px;
  border-radius: 10px;
  font-size: 14px;
  text-transform: capitalize;
  margin: 0px 10px 0px 0px;
  border-bottom-left-radius: 0px;
@media only screen and (max-width: 480px) {
  margin: 0px 10px 10px 0px;
}
}
.benefits{
  background: #D1ECEF 0% 0% no-repeat padding-box;
  -webkit-letter-spacing: 0px;
  -moz-letter-spacing: 0px;
  -ms-letter-spacing: 0px;
  letter-spacing: 1px;
  color: #000;
  opacity: 1;
  padding: 14px 14px;
  border-radius: 10px;
  font-size: 14px;
  text-transform: capitalize;
  margin: 0px 10px 0px 0px;
  border-bottom-left-radius: 0px;
@media only screen and (max-width: 480px) {
  margin: 0px 10px 10px 0px;
}
}
}
}
`
const CareerSubSectionRight = styled.div`
.shareButton{
  cursor:pointer;
  border: 1px   solid #ABABAB;
  border-radius: 13px;
  opacity: 1;
  margin: 10px 0px;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 30px;
  gap: 10px;
  text-transform: uppercase;
  border-bottom-left-radius: 0px;
p{
  text-align: center;
  font: normal normal 300 18px/28px Poppins;
  -webkit-letter-spacing: 0px;
  -moz-letter-spacing: 0px;
  -ms-letter-spacing: 0px;
  letter-spacing: 1px;
  color: #000000;
  opacity: 1;
  margin: 0px;
}
button{
p{
  float:right;
  font: normal normal 300 18px/28px Poppins;
  -webkit-letter-spacing: 0px;
  -moz-letter-spacing: 0px;
  -ms-letter-spacing: 0px;
  letter-spacing: 1px;
  color: #000000;
  opacity: 1;
  margin-top:6px;
  margin-left:7px;
}
i
{
  float:left;
}
}
}
`

const  LatestBoxesSlides = styled.div`
  position: fixed;
  right: -2000px;
  width: 100%;
  background: rgb(0 0 0 / 85%);
  height: 100%;
  z-index: 9999;
  top: 0;
.projectContent {
  width: 30%;
  position: fixed;
  right: -2000px;
  padding: 0px;
  height: fit-content;
  overflow: scroll;
  top: 23%;
  -webkit-transition: all 0.5s 0s ease;
  -moz-transition: all 0.5s 0s ease;
  -o-transition: all 0.5s 0s ease;
  -webkit-transition: all 0.5s 0s ease;
  -webkit-transition: all 0.5s 0s ease;
  transition: all 0.5s 0s ease;
  border-radius: 10px;
  background-size: cover !important;
  background-position: center!important;
  padding: 34px 60px;
  @media only screen and (max-width: 480px) {
    padding: 24px 20px;
  }
  background: #ffffffe6;
h2.popupheadings {
  text-align: center;
  font-weight: 300;
  font-size: 29px;
  padding: 14px 0px 40px 0px;
@media only screen and (max-width: 480px) {
  padding: 46px 0px 40px 0px;
  font-size: 24px;
}
}
h1 {
  padding: 0;
  margin: 0;
  font-size: 59px;
}
h2 {
  margin: 0;
  font-weight: 300;
  font-size: 29px;
  padding: 20px 0px;
}
}
&.active{
.projectContent {
  position: fixed;
  right: 0;
  left: 0;
  margin: 0 auto;
}
  right: 0;
}
.content {
  background: #fff;
  width: 90%;
  margin: 0 auto;
  box-shadow: 0px 3px 10px #00000029;
  border-radius: 20px;
  padding: 30px 30px;

@media only screen and (max-width: 480px) {
  padding: 10px 10px;
}
img {
  width: 100%;
  margin-bottom: 10px;
  border-radius: 8px;
  height: auto;
}
figure {
  margin: 0px;
}
}
.popupheadermain {
  display: grid;
  grid-template-columns: 20% 70%;
  gap: 10%;
  width: 90%;
  margin: 0 auto;
  padding: 30px 0px;
  margin-top: 5%;
@media only screen and (max-width: 480px) {
  grid-template-columns: 90%;
}
tag {
  display: flex;
  background: #58AF78;
  color: #fff;
  font-size: 20px;
  border-radius: 16px;
  box-shadow: 0px 5px 5px #00000029;
  position: relative;
  padding: 12px 0px 13px 49px;
  font-weight: 300;
  letter-spacing: 0.5px;
  left: 23px;
img {
  position: absolute;
  left: -24px;
  top: 0px;
}
}
text {
  display: flex;
  justify-content: end;
  align-items: center;
@media only screen and (max-width: 480px) {
  display: contents;
}
img {
  height: fit-content;
  width: fit-content;
  margin: 0px 10px;
  filter: invert(100%);
  -webkit-filter: invert(100%);
}
}
date {
  display: flex;
  align-items: center;
}
views {
  display: flex;
  align-items: center;
}
user {
  display: flex;
  align-items: center;
}
}
tag.red.secound {
  display: table;
  margin: 0 auto;
  background: #FE5656;
  border-radius: 16px;
  box-shadow: 0px 12px 13px #00000029;
  color: #fff;
  font-size: 20px;
  line-height: 54px;
  padding: 0px 40px 0px 0px;
  position: relative;
  margin-top: 22px;
  margin-bottom: 30px;
img {
  float: left;
  position: relative;
  left: -15px;
}
}
.popupheadermain.secound {
  grid-template-columns: revert;
text {
  justify-content: center;
}
}
.full_img.secound {
  width: 95%;
  display: table;
  margin: 0 auto;
  border-radius: 20px;
}
@media only screen and (max-width: 1366px) {
.projectContent{
  top: 4%;
  width: 90%;
}
}
@media only screen and (max-width: 1080px) {
}

 button.close {
  position: absolute;
  right: 15px;
  top: 15px;
  background: none;
  color: #000;
  font-size: 28px;
  cursor:pointer;
}

.projectContent h1 {
  padding: 0;
  margin: 30px 0px 30px 0px;
  font-size: 43px;
  color: #c7292f;
  text-shadow: 1px 1px 1px #00000021;
  @media only screen and (max-width: 480px) {
    font-size: 26px;
  }
}

.fild {
  margin-bottom: 20px;
}
.fild input {
  width: 100%;
  border: 0px;
  padding: 20px 20px;
  font-size: 15px;
  letter-spacing: 1px;
  background: #ffffffbf;
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  :focus {
    outline: none;
}
}
button.submit {
  background: #c7292f;
  color: #fff;
  padding: 16px 36px;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  cursor: pointer;
  :hover {
    background: #9b0f15;
}
}
`


export default CareerSingle;