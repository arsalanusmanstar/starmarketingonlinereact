import styled from 'styled-components';
import { useEffect,useState } from "react";
import SectionContainer from "../styles/section-container";
import CallRequest from "./callrequest";
import { Row, Col, Alert, Container,FormGroup} from "react-bootstrap";

import Select from 'react-select';


const Contact = ({offices,get_in_touch}) => {
    const [office,setOffice] = useState(offices.office)
    const [currentLocation,setCurrentLocation] = useState(0)


    //get locations
    const Locations = office.map((location,index) => ({
      "key"   : index,
      "value" : index,
      "label" : location.city
    }))
    
    console.log(Locations);
    return (
        <SectionContainer>
            <Heading>
            <h1 className="featured-heading" style={{color:'white'}}>CONTACT US</h1>
            </Heading>
           
            <br/> <br/>
            <div style={{backgroundColor:'white', borderRadius:'20px', padding:'40px'}}>
             <h2>{get_in_touch.heading}</h2>
             <p style={{fontSize:'26px', fontWeight:'500'}}>{get_in_touch.content}</p>
             {get_in_touch.image && <img src={get_in_touch.image} style={{float:'right', marginTop:'-250px'}} alt="Get in touch"/>}
            <CallRequest bg={'off'}/>
           
            <h2>WE HAVE <span  style={{color:'red'}}>{offices.office.length}</span> OFFICES</h2>
            <br/>
            <Container style={{width: '', margin: '0 auto'}}>
                
              <div style={AddressDetails}>
                  {/* <select style={RegionDropdown}  onChange={(x)=>setCurrentLocation(x.target.value)}>
                      {office.map((location,index) => 
                        <option key={index} value={index}>{location.city}</option>
                    )}
                  </select> */}
                     <br/>
                  <Select
        
        onChange={(x)=>setCurrentLocation(x.value)}
        options={Locations}        
        placeholder="Type to Search..."
        style={RegionDropdown}
      />


                  <br/>
                  {office[currentLocation] && office[currentLocation].phone &&
                   <>
                    <label style={LabelHeading}>Phone</label>
                    <br/>
                    <label style={LableDescription}>{office[currentLocation].phone}</label>
                    </>
                  }
                  {office[currentLocation] &&  office[currentLocation].fax &&
                  <>
                    <br/> 
                    <label style={LabelHeading}>Fax</label>
                    <br/>
                    <label style={LableDescription}>{office[currentLocation].fax}</label>
                    </>
                  }
                   {office[currentLocation] && office[currentLocation].toll_free &&
                    <>
                    <br/>
                    <label style={LabelHeading}>Toll Free</label>
                    <br/>
                    <label style={LableDescription}>{office[currentLocation].toll_free}</label>
                    </>
                    }
                    {office[currentLocation] && office[currentLocation].location &&
                    <>
                      <br/>
                      <label style={LabelHeading}>Location</label>
                      <br/>
                      <label style={LableDescriptionAddress}>{office[currentLocation].location}</label>
                    </>
                    }
              </div>
              <div style={LocationMap}>
              {office[currentLocation] && office[currentLocation].map_url &&
              <iframe src={office[currentLocation].map_url}
               width="950" height="400" style={{border:'0'}} loading="lazy"></iframe>
              }
              </div>
             
              </Container>
            </div>
        </SectionContainer>   
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
