import styled from 'styled-components';
import { useEffect,useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SectionContainer from "../styles/section-container";
import Locations from "./locations";
import useSWR from 'swr';
import CareerImage from "../../assets/career_image.PNG";
import ReactLoading from "react-loading";
import CareerUserIcon from "../../assets/career_user_icon.PNG";
import CareerCalenderIcon from "../../assets/career_calender_icon.PNG";
import CareerLocationIcon from "../../assets/career_location_icon.PNG";

import CareerDetails from "../../assets/career_details.PNG";

import ApplyIcon from "../../assets/apply_icon.PNG";
import FacebookIcon from "../../assets/facebook_icon.PNG";
import TwitterIcon from "../../assets/twitter_icon.PNG";
import LinkedinIcon from "../../assets/linkedin_icon.PNG";
import WhatsappIcon from "../../assets/whatsapp_icon.PNG";


const  fetcher =  async (url) => await fetch(url).then((res) => res.json());

const CareerSingle=({match,location})=>{

  const { data, error } = useSWR('https://staging.starmarketingonline.com/wp-json/wp/v2/awsm_job_openings?_embed=true&slug='+match.params.slug, fetcher)
  const baseUrl = 'https://starmarketingonline.com';

  {console.log(data)}
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  },[match.path])

    return(
        <Mainproject  style={{backgroundImage:`url('/assets/page_bg.png')`}}>
             <Header />
             {data ?  data[0] && data[0].acf &&
      <>
        <SectionContainer>
              <Heading>
              <h1 className="featured-heading" style={{color:'white'}}>Careers</h1>

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
                <CareerSubSectionLeft>
                <img src={CareerDetails}></img>
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

                 <h3 className="skillsHeading">Benefits</h3>
                 <div className="skillsDetails">
                 { data[0].acf.benefits && data[0].acf.benefits.map((benefit,index)=>
                   <p className="benefits" key={index}>{benefit.benefit_title}</p>
                   )}
                   {/* <p className="benefits">Medical Facility</p>
                   <p className="benefits">Yearly Bonus</p> */}
                  
                 </div>

                 <h3 className="skillsHeading">Find Similar Jobs</h3>
                 <div className="similarjobs">
                   <div className="similarJobsDetails">
                   <img src={CareerDetails}></img>
                   <h3>Sr. Executive</h3>
                   <h4>Star Marketing PVT. Ltd - Manhill, Karachi</h4>
                   <h4 style={{marginTop:'-12px'}}><span>PKR</span>  85 - 95000  <span className="similarSalary">Benefits</span></h4> 
                     </div>
                   <div className="similarJobsDetails">
                   <img src={CareerDetails}></img>
                   <h3>Sr. Executive</h3>
                   <h4>Star Marketing PVT. Ltd - Manhill, Karachi</h4>
                   <h4 style={{marginTop:'-12px'}}><span>PKR</span>  85 - 95000  <span className="similarSalary">Benefits</span></h4> 
                     </div>
                 </div>
                </CareerSubSectionLeft>
                <CareerSubSectionRight>
                   <div className="shareButton" style={{backgroundColor:'#40C351'}}>
                    <p style={{color:'#FFFFFF', marginLeft:'-30px'}}><img className="applyImage" src={ApplyIcon}></img>Apply for this job</p>
                   </div>
                   <div className="shareButton">
                     <p style={{marginLeft:'5px'}} ><img className="facebookImage" src={FacebookIcon}></img>Share on Facebook</p>
                   </div>
                   <div className="shareButton">
                     <p style={{marginLeft:'-19px'}}><img className="twitterImage" src={TwitterIcon}></img>Share on Twitter</p>
                   </div>
                   <div className="shareButton">
                     <p style={{marginLeft:'0px'}}><img className="linkedinImage" src={LinkedinIcon}></img>Share on Linkedin</p>
                   </div>
                   <div className="shareButton">
                     <p style={{marginLeft:'24px'}}><img className="whatsappImage" src={WhatsappIcon}></img>Share on Whatsapp</p>
                   </div>
                </CareerSubSectionRight>

            </CareerSection>
        
            
        </SectionContainer>
        <Locations/>
        </> : <ReactLoading type={'bubbles'}  className="loading red" style={{margin:'0 auto',color:"#fff",height:'100vh',width:"80px"}} /> 
        }
        <Footer />
        </Mainproject>
    )
}


const Mainproject = styled.div`

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
    top: -59px;
    text-align: center;
    background-size: cover;
   
  }
  
`

const CareerSection = styled.div`

background-color: white;
border-radius: 20px;
padding: 50px;
margin-top: 40px;



.careerHeading{
  text-align: left;
font: normal normal 800 60px/96px Poppins;
letter-spacing: 0px;
color: #000000;
opacity: 1;
margin-top:-10px;
}


.careerSubheading{
  text-align: left;
font: normal normal 500 28px/42px Poppins;
letter-spacing: 0px;
color: #8790a2;
opacity: 1;
margin-top:-30px;
}

.careerImage{
  float:right;
  margin-top:-220px;
}


.careerDetails{
  display:flex;
  width:50%;
  justify-content:space-between;
  text-align: center;
font: normal normal normal 23px/32px Poppins;
letter-spacing: 0px;
color: #001439;
opacity: 1;
}

`

const CareerSubSectionLeft = styled.div`
width:70%;
margin-top:70px;



.careerSubsectionHeading{
font: normal normal 600 30px/40px Poppins;
letter-spacing: 0px;
color: #000000;
margin-left: 135px;
margin-top: -120px;

}

.careerSubsectionAddress{
  text-align: left;
font: normal normal 500 22px/25px Poppins;
letter-spacing: 0px;
color: #000000;
opacity: 1;
margin-left: 135px;
margin-top: -30px;

}

.careerSubsectionSalary{
  text-align: left;
font: normal normal 500 22px/25px Poppins;
letter-spacing: 0px;
color: #000000;
opacity: 1;
margin-left: 135px;
margin-top:-12px;

span{
  background-color: rgb(209, 236, 239);
    color: rgb(96, 123, 155);
    padding: 6px;
    border-radius: 10px;
    font-size: 18px;
    margin-left: 30px;
    
}
}

.careerDescription{
  text-align: left;
font: normal normal normal 18px/25px Poppins;
letter-spacing: 0px;
color: #000000;
opacity: 1;
}

.skillsHeading{
  text-align: left;
font: normal normal 500 30px/40px Poppins;
letter-spacing: 0px;
color: #000000;
opacity: 0.41;
}



.skillsDetails > * {
  margin: 25px 0 0 35px;
  
}

.skillsDetails
{
  display: inline-flex;
  flex-wrap: wrap;
  margin: -30px 0 0 -36px;
  width: calc(100% + 12px);
  
  .skills{
    background: #3A7CF2 0% 0% no-repeat padding-box;
    opacity: 1;
    font: normal normal medium 27px/40px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    padding:10px;
    border-radius: 10px;
  }

  .benefits{
    background: #D1ECEF 0% 0% no-repeat padding-box;
    opacity: 1;
    font: normal normal medium 27px/40px Poppins;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    padding:10px;
    border-radius: 10px;
  }
  
 
}


.similarjobs
{
  display:flex;
  justify-content:space-between;
  
  margin-left:-40px;

  .similarJobsDetails{
    padding-top: 20px;
    padding-left:20px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 15px;
    opacity: 1;
    margin-left: 40px;

    h3{
     font: normal normal 600 25px/40px Poppins;
      letter-spacing: 0px;
      color: #000000;
      opacity: 1;
      margin-left: 135px;
    margin-top: -120px;
    }

    h4{
     
    font: normal normal 500 16px/18px Poppins;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    margin-left: 135px;
    margin-top: -30px;

    span{
      background: #dce8f7 0% 0% no-repeat padding-box;
      padding: 4px;
      border-radius: 10px;
      color:#697fa2;
      font-size:12px;
      
    }

    .similarSalary{
      color: rgb(168, 168, 168);
      background: none;
      font-size: 16px;
      display: list-item;
      list-style-type: disc;
      list-style-position: inside;
      margin-left: 150px;
      margin-top: -23px;
    }
    }
  }
}


`

const CareerSubSectionRight = styled.div`
width:30%;
float:right;
margin-top:-950px;

.shareButton{
  border: 1px solid #ABABAB;
  border-radius: 16px;
  opacity: 1;
  margin-top:20px;
  text-align:center;

  p{
    padding-top:18px;
    text-align: center;
    font: normal normal 300 20px/28px Poppins;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }
 
  .applyImage{
    margin-right:15px;
    margin-bottom: -9px;
  }

  .facebookImage{
    margin-right:15px;
    margin-bottom:-17px;
  }

  .twitterImage{
    margin-right:15px;
    margin-bottom:-17px;
  }

  .linkedinImage{
    margin-right:15px;
    margin-bottom:-12px;
  }

  .whatsappImage{
    margin-right:15px;
    margin-bottom:-14px;
  }
}
`

export default CareerSingle;