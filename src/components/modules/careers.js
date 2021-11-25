import styled from 'styled-components';
import axios from "axios";
import { useEffect,useState } from "react";
import SectionContainer from "../styles/section-container";
import { Link,NavLink,Redirect } from 'react-router-dom';
import latest_icon06 from "../../assets/latest_icon06.png";

const Careers = (career)=>{
  const [data,setData] = useState([]);


  //For Search
 
 const [searchTerm,setSearchTerm] = useState('');

 console.log(searchTerm);

  useEffect(async ()=>{
    try {
    axios.get('https://staging.starmarketingonline.com/wp-json/wp/v2/awsm_job_openings?_embed=true&per_page=100')
      .then(response => {
          setData(response.data)
          console.log(response.data,'details')
      })
      } catch (e) {
          console.error(e);
      }
  },[])
return (
  <div>
     <SectionContainer>
        <Heading>
          <h1 className="featured-heading banners">Careers</h1>
        </Heading>
    </SectionContainer >  
      <div className="careersMain">
      <SectionContainer style={{paddingTop:'2px'}} >
         <MainContainer>
      <HeaderSection>
           <div className="headingSection">
           <h2>Trending Jobs</h2>
           </div>
           <div>
             <JobSearch>
           <input type="text" placeholder="Search"  onChange={e=>setSearchTerm(e.target.value)}></input>
           <button> <i className="fa fa-search"></i></button>
           </JobSearch>
           </div>
           </HeaderSection>

           <JobSection>
           
           
           {data.length>0 && data.filter((jobs)=> jobs.acf && jobs.acf.trending ===true).filter((jobs)=>{
             if(searchTerm==""){
               return jobs;
             }
             else if(jobs.acf.designation.toLowerCase().includes(searchTerm.toLowerCase()))
             {
               return jobs;
             }
             else if(jobs.acf.no_of_vacancies.toLowerCase().includes(searchTerm.toLowerCase()))
             {
               return jobs;
             }
             else if(jobs.acf.city.toLowerCase().includes(searchTerm.toLowerCase()))
             {
               return jobs;
             }

           }).map((jobs,index)=>
           <Link to={jobs.link.replace('https://staging.starmarketingonline.com/jobs','career')} style={{ textDecoration: 'none' }}>
             <div className="job_single" key={index}>
                <div className="job_top_line"></div>
                <h3>{jobs.acf.designation}</h3>
                <div className="job_bottom_main">
                  <div className="job_bottom"> <i class="fa fa-user"></i>  {jobs.acf.no_of_vacancies}</div>
                  <div className="job_bottom"> <i class="fa fa-map-marker"></i>   {jobs.acf.city}</div>
                </div>
             </div>
             </Link>
           )}
             {/* <div className="job_single">
             <div className="job_top_line"></div>
             <h3>Mern Stack Dev.</h3>
             <div className="job_bottom_main">
             <div className="job_bottom"> <i class="fa fa-user"></i>  2</div>
             <div className="job_bottom"> <i class="fa fa-map-marker"></i>   Karachi</div>
             </div>
             </div>
             <div className="job_single">
             <div className="job_top_line"></div>
             <h3>Accountant</h3>
             <div className="job_bottom_main">
             <div className="job_bottom"> <i class="fa fa-user"></i>  2</div>
             <div className="job_bottom"> <i  class="fa fa-map-marker"></i>   Lahore</div>
             </div>
             </div> */}
             
           </JobSection>
           <CategorySection>
             <h2 className="category_heading">Browse by Category</h2>
                <div className="category_details">
                  <h3 className="category_subheading">Human Resource</h3>
                    <div className="sub_categories">
                        {data.length>0 && data.filter((jobs)=> jobs.acf && jobs.acf.job_category === 'Human Resource').map((jobs,index)=>
                        <Link to={jobs.link.replace('https://staging.starmarketingonline.com/jobs','career')} style={{ textDecoration: 'none' }}>
                      <h4 className="catgory_subheading_details"  key={index}>{jobs.acf.designation}</h4>
                      </Link>
                        /* <h4 className="catgory_subheading_details">Asst. Manager HR & Admin</h4>
                        <h4 className="catgory_subheading_details">HR Executive</h4>
                        <h4 className="catgory_subheading_details">HR Executive</h4>
                        <h4 className="catgory_subheading_details">Asst. Manager HR & Admin</h4>
                        <h4 className="catgory_subheading_details">HR Executive</h4>
                        <h4 className="catgory_subheading_details">HR Executive</h4> */
                        )}
                    </div>
                </div>
           </CategorySection>
             </MainContainer>
            </SectionContainer>  
           </div>
         </div>
        )
    }

const Heading = styled.div`
h1{
    position: relative;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
@media only screen and (max-width: 1080px) {
    font: normal normal 900 60px/50px 'Poppins', sans-serif !important;
}
@media only screen and (max-width: 820px) {
    margin: 20px 0px 60px 0px !important;
    font: normal normal 900 40px/35px 'Poppins', sans-serif !important;
}
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
@media only screen and (max-width: 820px) {
    width: 290px;
    height: 80px;
    top: -14px;
}
}
`
const MainContainer = styled.div`
    padding:40px;
    background-color:white;
    width:100%;
    margin-top:50px; 
@media only screen and (max-width: 1080px) {
    margin-top:0px;

}
@media only screen and (max-width: 820px) {
    padding: 0px;
    margin-top:10px; 
}
@media only screen and (max-width: 480px) {
    padding: 0px;
    margin-top:10px; 
}
}
`
const HeaderSection = styled.div`
    display:grid;
    grid-template-columns: 40% 40%;
    grid-gap: 20%;
    align-items: center;
@media only screen and (max-width: 1080px) {
    grid-template-columns: 50% 50%;
    gap: 1%;
    margin-bottom: 50px;
}
@media only screen and (max-width: 820px) {
    grid-template-columns: 50% 50%;
    gap: 1%;
    margin-bottom: 50px;
}
@media only screen and (max-width: 480px) {
    grid-template-columns: 100%;
    gap: 5%;
}
.headingSection{
    background: #001439 0% 0% no-repeat padding-box;
    border-radius: 100px 0px 100px 0px;
    opacity: 1;
    text-transform: uppercase;
    @media only screen and (max-width: 480px) {
      border-radius: 10px 0px 10px 0px;
      margin-bottom: 16px;
    }
h2{
    text-align: center;
    font: normal normal 500 40px/77px Poppins;
    letter-spacing: 2px;
    color: #FFFFFF;
    opacity: 1;
    margin-top: 23px;
@media only screen and (max-width: 1080px) {
    font: normal normal 500 35px/38px Poppins;
}
@media only screen and (max-width: 820px) {
    font: normal normal 500 24px/30px Poppins;
}
@media only screen and (max-width: 480px) {
  margin: 23px;
}
}
}
`
const JobSearch = styled.div`
    position: relative;
input {
    border: none;
    width: 100%;
    font-size: 26px;
    padding: 30px 36px;
    border-radius: 49px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 8px #00000029;
    letter-spacing: 1px;
@media only screen and (max-width: 820px) {
    font-size: 18px;
    padding: 18px 36px;
}
:focus {
    outline: none;
}
}
button {
    position: absolute;
    right: 35px;
    top: 25px;
    background: none;
    font-size: 34px;
@media only screen and (max-width: 820px) {
    right: 20px;
    top: 15px;
    color: #000;
    font-size: 22px;
}
}
`
const JobSection = styled.div`
    display:grid;
    grid-template-columns: 31% 31% 31%;
    justify-content:space-between;
    margin-top:40px;
    gap: 3%;
@media only screen and (max-width: 820px) {
    grid-template-columns: 32% 32% 32%;
    gap: 12px;
}
@media only screen and (max-width: 480px) {
    grid-template-columns: 100%;
    gap: 1%;
}
.job_single{
    background: #40C351 0% 0% no-repeat padding-box;
    border-top: 10pxsolid #248043;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    opacity: 1;
    padding: 40px 40px;
    border-top: 10px solid #248043;
@media only screen and (max-width: 820px) {
    padding: 20px 20px;
    padding-bottom: 40px;
}
h3{
    font: normal normal 500 29px/50px Poppins;
    -webkit-letter-spacing: 0px;
    -moz-letter-spacing: 0px;
    -ms-letter-spacing: 0px;
    letter-spacing: 2px;
    color: #FFFFFF;
    opacity: 1;
    margin: 0px 0px 40px 0px;
    text-transform: uppercase;
    font-family: -webkit-pictograph;
@media only screen and (max-width: 1080px) {
    font: normal normal 500 21px/25px Poppins;
    min-height: 50px;
    margin: 0px 0px 30px 0px;
}
@media only screen and (max-width: 820px) {
    font: normal normal 500 21px/25px Poppins;
    min-height: 50px;
    margin: 0px 0px 30px 0px;
}

@media only screen and (max-width: 480px) {
  min-height: auto;
  margin: 0px 0px 18px 0px;
}
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
.category_heading{
    text-align: left;
    font: normal normal 600 45px/106px Poppins;
    letter-spacing: 1px;
    color: #000000;
    opacity: 1;
    text-transform: uppercase;
@media only screen and (max-width: 820px) {
    font: normal normal 600 26px/25px Poppins;
}
@media only screen and (max-width: 480px) {
  margin-bottom: 30px;
}
}
.category_details{
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 15px;
    opacity: 1;
    padding: 30px 40px;  
@media only screen and (max-width: 820px) {
    padding: 20px 30px;  
}
}
.category_subheading{
    font: normal normal 520 38px/50px 'Poppins', sans-serif;
    -webkit-letter-spacing: 0px;
    -moz-letter-spacing: 0px;
    -ms-letter-spacing: 0px;
    letter-spacing: 1px;
    color: #40C351;
    opacity: 1;
    margin: 20px 0px 10px 0px;
@media only screen and (max-width: 820px) {
    font: normal normal 520 26px/50px 'Poppins',sans-serif;
    margin: 0px 0px 10px 0px;
}
}
.sub_categories{
    display: inline-flex;
    flex-wrap: wrap;
    gap: 20px;
@media only screen and (max-width: 820px) {
    gap: 4px;
}
}
.catgory_subheading_details{
    background: #CBE2D3 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
    text-align: left;
    font: normal normal 500 20px/30px 'Poppins', sans-serif;
    -webkit-letter-spacing: 0px;
    -moz-letter-spacing: 0px;
    -ms-letter-spacing: 0px;
    letter-spacing: 1px;
    color: #000000;
    opacity: 1;
    padding: 20px 30px;
    margin: 10px 0px;
@media only screen and (max-width: 820px) {
    font: normal normal 500 16px/20px 'Poppins',sans-serif;
}
}
.other_categories{
    margin-top:40px;
    margin-left:35px;
    line-height: 0.5em
}
.other_categories_description{
    text-align: left;
    font: normal normal 500 38px/50px Poppins;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}
`
export default Careers;