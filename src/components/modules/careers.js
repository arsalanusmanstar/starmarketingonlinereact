import styled from 'styled-components';
import { useEffect,useState } from "react";
import SectionContainer from "../styles/section-container";

import latest_icon06 from "../../assets/latest_icon06.png";

const Careers = (career)=>{



return (
  <div>
    <SectionContainer>
        <Heading>
        <h1 className="featured-heading" style={{color:'white'}}>Careers</h1>
        </Heading>
      </SectionContainer>  

      <SectionContainer>
         <MainContainer>
      <HeaderSection>
           <div className="headingSection">
           <h2>Trending Jobs</h2>
           </div>
           <div>
             <JobSearch>
           <input type="text" placeholder="Search"></input>
           <button> <i className="fa fa-search"></i></button>
           </JobSearch>
           </div>
           </HeaderSection>

           <JobSection>
            
             <div className="job_single">
             <div className="job_top_line"></div>
             <h3>Sales Executive</h3>
             <p style={{float:'left', marginLeft:'40px'}}> <img src={latest_icon06} style={{marginBottom:'-4px'}}></img>  2</p>
             <p style={{float:'right', marginRight:'40px', marginTop:'-4px'}}> <i style={{color:'#9adfa3',fontSize:'28px'}} class="fa fa-map-marker"></i>   Karachi</p>
          
             </div>
             <div className="job_single">
             <div className="job_top_line"></div>
             <h3>Mern Stack Dev.</h3>
             <p style={{float:'left', marginLeft:'40px'}}> <img src={latest_icon06} style={{marginBottom:'-4px'}}></img>  2</p>
             <p style={{float:'right', marginRight:'40px', marginTop:'-4px'}}> <i style={{color:'#9adfa3',fontSize:'28px'}} class="fa fa-map-marker"></i>   Karachi</p>
             </div>
             <div className="job_single">
             <div className="job_top_line"></div>
             <h3>Accountant</h3>
             <p style={{float:'left', marginLeft:'40px'}}> <img src={latest_icon06} style={{marginBottom:'-4px'}}></img>  2</p>
             <p style={{float:'right', marginRight:'40px', marginTop:'-4px'}}> <i style={{color:'#9adfa3',fontSize:'28px'}} class="fa fa-map-marker"></i>   Lahore</p>
             </div>
           </JobSection>
           <CategorySection>
           
             <h2 className="category_heading">Browse by Category</h2>
             <div className="category_details">
               <h3 className="category_subheading">Human Resource</h3>
                <div className="sub_categories">
                <h4 className="catgory_subheading_details">Director HR</h4>
               
                <h4 className="catgory_subheading_details">Group Manager HR</h4>
               
                <h4 className="catgory_subheading_details">Asst. Manager HR & Admin</h4>
                <h4 className="catgory_subheading_details">HR Executive</h4>
                <h4 className="catgory_subheading_details">HR Executive</h4>

                <h4 className="catgory_subheading_details">Asst. Manager HR & Admin</h4>
                <h4 className="catgory_subheading_details">HR Executive</h4>
                <h4 className="catgory_subheading_details">HR Executive</h4>
              
                </div>
                </div>
              
              <div className="other_categories">
              <p className="other_categories_description">Sales & Marketing</p>
              <p className="other_categories_description">Information Technology</p>
              <p className="other_categories_description">Accounts & Finance</p>
              <p className="other_categories_description">Administration</p>
              </div>
                
           </CategorySection>
         </MainContainer>


         </SectionContainer>  
         </div>
    
        )

    }


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
        background: url(./assets/whiteImage.png) 0% 0% no-repeat padding-box;
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

    const MainContainer = styled.div`
    padding:40px;
    background-color:white;
    width:100%;
    margin-top:50px; 
      
    }
    `

 
    const HeaderSection = styled.div`
    display:grid;
    grid-template-columns: 40% 40%;
    grid-gap: 20%;


    .headingSection{
      background: #001439 0% 0% no-repeat padding-box;
      border-radius: 34px 34px 34px 0px;
      opacity: 1;
    
    
      h2{
        text-align: center;
        font: normal normal 500 48px/77px Poppins;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
        margin-top: 23px;
      }

       
   
    
    }
   

    `
    
const JobSearch = styled.div`
position: relative;
margin: 40px 0px 0px 0px;


input {
  border: none;
  width: 100%;
  font-size: 22px;
  padding: 18px 36px;
  border-radius: 49px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 8px #00000029;
  :focus {
    outline: none;
}
}
button {
  position: absolute;
  right: 35px;
  top: 16px;
  background: none;
  font-size: 27px;
}
`


const JobSection = styled.div`

display:grid;
grid-template-columns: 32% 32% 32%;
justify-content:space-between;
margin-top:40px;

.job_top_line{
  background: #248043 0% 0% no-repeat padding-box;
border-radius: 100px;
opacity: 1;
height:7px;
margin-top:-2px;
}

.job_single{
  background: #40C351 0% 0% no-repeat padding-box;
  border: 1px solid #C0D2C6;
  border-radius: 16px;
  opacity: 1;

  h3{
     margin-left:41px;
     margin-top:25px;
     font: normal normal 400 30px/50px Poppins;
     letter-spacing: 0px;
     color: #FFFFFF;
     opacity: 1;
  }

  p{
    text-align: left;
    font: normal normal normal 28px/48px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
   
  }
}
}

`

const CategorySection = styled.div`

margin-top:40px;

.category_heading
{
  text-align: left;
font: normal normal 500 57px/106px Poppins;
letter-spacing: 0px;
color: #000000;
opacity: 1;
}

.category_details
{
padding: 20px;  
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #707070;
border-radius: 15px;
opacity: 1;
}

.category_subheading
{
  
  font: normal normal 520 38px/50px Poppins;
  letter-spacing: 0px;
  color: #40C351;
  opacity: 1;
  margin-top:26px;
  margin-left:30px;
}


.sub_categories > * {
  margin: 25px 0 0 35px;
  
}

.sub_categories
{
  display: inline-flex;
  flex-wrap: wrap;
  margin: -30px 0 0 -12px;
  width: calc(100% + 12px);
  
  
  
}

.catgory_subheading_details
{
  background: #CBE2D3 0% 0% no-repeat padding-box;
  border-radius: 16px;
  opacity: 1;
  text-align: left;
font: normal normal 500 24px/35px Poppins;
letter-spacing: 0px;
color: #000000;
opacity: 1;
padding:20px;
}

.other_categories
{
  margin-top:40px;
  margin-left:35px;
  line-height: 0.5em
}

.other_categories_description
{
  text-align: left;
font: normal normal 500 38px/50px Poppins;
letter-spacing: 0px;
color: #000000;
opacity: 1;
}
`



export default Careers;