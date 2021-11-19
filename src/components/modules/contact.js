import styled from 'styled-components';
import { useEffect,useState } from "react";
import SectionContainer from "../styles/section-container";
import CallRequest from "./callrequest";
import { Row, Col, Alert, Container,FormGroup} from "react-bootstrap";
import Bounce from 'react-reveal/Bounce';
import Select from 'react-select';


const Contact = ({offices,get_in_touch}) => {
    const [office,setOffice] = useState(offices.office)
    const [currentLocation,setCurrentLocation] = useState({
      "key"   : 0,
      "value" : 0,
      "label" : 'karachi'
    })


    //get locations
    const Locations = office.map((location,index) => ({
      "key"   : index,
      "value" : index,
      "label" : location.city
    }))
    
    return (
        <SectionContainer>
            <Heading>
            <h1 className="featured-heading banners" style={{marginTop:'-40px',color:'white'}}><Bounce top cascade>CONTACT US</Bounce></h1>
            </Heading>
           
            <br/> <br/>
            <div className="contactMain" style={{backgroundColor:'white', borderRadius:'20px', padding:'40px'}}>
             <h2 className="contactMainHeading"> <Bounce left cascade>{get_in_touch.heading}</Bounce></h2>
             <p  className="getinTouch">{get_in_touch.content}</p>
             {get_in_touch.image && <img className="contactTopimg" src={get_in_touch.image}  alt="Get in touch"/>}
             <CallRequestMain className="contactPages"><CallRequest  title={"Request Instant Call Back"} bg={'off'} >
             
            </CallRequest></CallRequestMain>
            <h2 className="have">WE HAVE <span  style={{color:'red'}}>{offices.office.length}</span> OFFICES</h2>
            <br/>
            <Container style={{width: '', margin: '0 auto'}} className="contactMap">
                
              <div className="addressLeft">
                  {/* <select style={RegionDropdown}  onChange={(x)=>setCurrentLocation(x.target.value)}>
                      {office.map((location,index) => 
                        <option key={index} value={index}>{location.city}</option>
                    )}
                  </select> */}
                     <br/>
                  <Select
        
                    onChange={(x)=>setCurrentLocation(x)}
                    value={currentLocation}
                    options={Locations}        
                    placeholder="Type to Search..."
                    style={RegionDropdown}
                  />


                  <br/>
                  {office[currentLocation.key] && office[currentLocation.key].phone &&
                   <>
                    <label style={LabelHeading}>Phone</label>
                    <br/>
                    <label style={LableDescription}>{office[currentLocation.key].phone}</label>
                    </>
                  }
                  {office[currentLocation.key] &&  office[currentLocation.key].fax &&
                  <>
                    <br/> 
                    <label style={LabelHeading}>Fax</label>
                    <br/>
                    <label style={LableDescription}>{office[currentLocation.key].fax}</label>
                    </>
                  }
                   {office[currentLocation.key] && office[currentLocation.key].toll_free &&
                    <>
                    <br/>
                    <label style={LabelHeading}>Toll Free</label>
                    <br/>
                    <label style={LableDescription}>{office[currentLocation.key].toll_free}</label>
                    </>
                    }
                    {office[currentLocation.key] && office[currentLocation.key].location &&
                    <>
                      <br/>
                      <label style={LabelHeading}>Location</label>
                      <br/>
                      <label style={LableDescriptionAddress}>{office[currentLocation.key].location}</label>
                    </>
                    }
              </div>
              <div  className="addressRight">
              {office[currentLocation.key] && office[currentLocation.key].map_url &&
              <iframe src={office[currentLocation.key].map_url}
               width="950" height="auto" style={{border:'0'}} loading="lazy"></iframe>
              }
              </div>
             
              </Container>
            </div>
        </SectionContainer>   
    )
}

const CallRequestMain = styled.div`
.contactPages h2 {
  margin: 69px 32px;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  width: 88%;
}
`;

const Heading = styled.div`
h1{
    position: relative;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    @media only screen and (max-width: 480px) {
      margin-top: 20px!important;
      margin-bottom: 0px !important;

    }
    
  }
  h1:after{
    content: "";
    height: 10px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 7%;
    bottom: 3px;
    border-radius: 107px;
    background: #fe5656e3 0% 0% no-repeat padding-box;
    @media only screen and (max-width: 480px) {
      width: 10%;
      bottom: -2px;
      height: 6px;

    }
    
  }
  h1:before{
    content: "";
    background: url(./assets/whiteImage.png) 0% 0% no-repeat padding-box;
    width: 500px;
    height: 180px;
    display: table;
    margin: 0 auto;
    position: absolute;
    right: 0;
    left: 0;
    top: -31px;
    text-align: center;
    background-size: cover;
    @media only screen and (max-width: 820px) {
      width: 300px;
      height: 130px;
      top: 10px;
      }
    @media only screen and (max-width: 480px) {
      width: 100%;
      height: 50px;
      top: -5px;
    }
  }
  
`


const AddressDetails={
    width: '400px',
    height: '400px',
    background: '#143063',
    float: 'left',
    padding: '0px 20px',
    borderRadius:'20px'

}


const LabelHeading={
    color:'#FFFFFF',
    opacity:'0.44',
    font: 'normal normal normal 16px/22px Poppins',
  
}

const LableDescription={
    textAlign: 'left',
font: 'normal normal 600 19px/30px Poppins',
letterSpacing: '0px',
color: '#FFFFFF',
opacity: '1',
}

const LableDescriptionAddress={
    textAlign: 'left',
font: 'normal normal 400 14px/22px Poppins',
letterSpacing: '0px',
color: '#FFFFFF',
opacity: '1',
}


const LocationMap={
    width: '925px',
    height: '400px',
    marginLeft: '430px', borderRadius:'20px'
}


const RegionDropdown = {
marginTop:'20px',
width: '350px',
height: '55px',
background: '#FFFFFF 0% 0% no-repeat padding-box',
border: '1px solid #FFFFFF',
borderRadius: '10px',
opacity: '1',
fontSize:'22px',
padding:'12px'
  };




export default Contact;
