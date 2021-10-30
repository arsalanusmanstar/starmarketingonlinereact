import styled from 'styled-components'
import SectionContainer from "../styles/section-container";
import footer_icon from "../../assets/footer_icon.png";
import Logo_f from "../../assets/logo_f.png";
import FB from "../../assets/FB.png";
import TW from "../../assets/TW.png";
import YT from "../../assets/YT.png";
import In from "../../assets/In.png";
import INSTA from "../../assets/INSTA.png";
import Touch from "../../assets/touch.png";
import grayBackground from "../../assets/map.png";
import { useEffect,useState } from "react";
import axios from "axios";

const Locations = ({state}) => {
    const [success,setSuccess] = useState('');
    const submitHandler = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        axios.post('https://sheet.best/api/sheets/efd596e6-94d9-477d-b1f3-d62664d31299', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            setSuccess('Thank you for submit your request. We will contact you shortily.')
        })
     }
    return (

       
<FooterMain background={grayBackground}>
    <SectionContainer>



    <ContactSectionTouch style={{marginTop:'-50px'}}>
  
         <ContactSectionTouchLeft>
             <form method="Post" onSubmit={(e)=>submitHandler(e)}>
                <h1>Let's Stay In Touch</h1>
                <p>Subscribe to our Newsletter to receive exclusive offers, latest news and updates.</p>
                <input type="text" name="Email" placeholder="Email Address"/>
                <button type="Submit">Subscribe</button>
                <div style={{paddingTop:'10px'}}>{success}</div>
            </form>
         </ContactSectionTouchLeft>

         <ContactSectionTouchRight>
            <Imge src={Touch}></Imge>
         </ContactSectionTouchRight>
        
    </ContactSectionTouch>
        
        <ContactSection>

             <ContactSectionLeft>
                <h1 className="Head_C">Conatct Us</h1>
                <h2 className="head_n">+92 111 111 160</h2>
                <h2 className="head_n">+92 111 111 160</h2>
                <h2 className="head_n">+92 301 116 1116</h2>
             </ContactSectionLeft>

             <ContactSectionRight>
                
                <Flogo className="logo_f" src={Logo_f}></Flogo>
                <SL>
               <a href="https://twitter.com/starmarketingon" target="_blank"> <IconTW className="FS" src={TW}></IconTW></a>
               <a href="https://www.facebook.com/starmarketingpk" target="_blank"> <IconTW className="FS" src={FB}></IconTW></a>
               <a href="https://www.youtube.com/c/StarMarketingPvtLtd" target="_blank"> <IconTW className="FS" src={YT}></IconTW></a>
               <a href="https://www.linkedin.com/company/starmarketingpvtltd/mycompany/" target="_blank"><IconTW className="FS" src={In}></IconTW></a>
               <a href="https://www.instagram.com/starmarketingpvtltd/" target="_blank"> <IconTW className="FS" src={INSTA}></IconTW></a>
                </SL>
             </ContactSectionRight>

        </ContactSection>



        <LocationList>
            <List>
                <Icon className="footer_icons" src={footer_icon}></Icon>
                <ListTitle>Karachi Office</ListTitle>
                <ListContent>Mezzanine Floor, Topra Plaza, Main University Road, Opp. Urdu Science College Gulshan-e-Iqbal, Karachi.</ListContent>
            </List>
            <List>
                <Icon className="footer_icons" src={footer_icon}></Icon>
                <ListTitle>Islamabad Office</ListTitle>
                <ListContent>Roshan Center, Jinnah Avenue Islamabad, Punjab</ListContent>
            </List>
            <List>
                <Icon className="footer_icons" src={footer_icon}></Icon>
                <ListTitle>Lahore Office</ListTitle>
                <ListContent>Office No. 106, 1st Floor, Siddiq Trade Center, 72, Main Boulevard Lahore, Punjab</ListContent>
            </List>
            <List>
                <Icon className="footer_icons" src={footer_icon}></Icon>
                <ListTitle>Peshawar Office</ListTitle>
                <ListContent>Deans Trade Center, UG-7 & UG-8, Opposite F.C Headquarters, Saddar Peshawar, Khyber Pakhtunkhwa</ListContent>
            </List>
            <List>
                <Icon className="footer_icons" src={footer_icon}></Icon>
                <ListTitle>Multan Office</ListTitle>
                <ListContent>Office No. 09, 10, 11, 2nd Floor, Chenone Tower, Abdali Road, Multan</ListContent>
            </List>
            <List>
                <Icon className="footer_icons" src={footer_icon}></Icon>
                <ListTitle>Hyderabad Office</ListTitle>
                <ListContent>Shop No. 10, 11, Garrison Complex, Main Saddar Road, Near Bombay Bakery, Hyderabad, Sindh, Pakistan</ListContent>
            </List>
        </LocationList>
    </SectionContainer>  
   </FooterMain>  
    )
}



export default Locations;
const Imge = styled.img`
  

`

const ContactSectionTouchLeft = styled.section`
h1 {
    font-size: 72px;
    font-weight: 600;
    margin-top: 20px;
}
 p {
    font-size: 24px;
}
 input {
    border: 2px solid #b9b9b9;
    border-radius: 5px;
    width: 70%;
    padding: 22px 22px;
}
 button {
    background: #212841;
    color: #fff;
    font-size: 24px;
    padding: 17px 29px;
    letter-spacing: 1px;
    font-weight: 600;
    border-radius: 5px;
    margin: 0px 0px 0px 30px;
    position: relative;
    top: 3px;
}
`;
const ContactSectionTouchRight = styled.section`
   
`;
const ContactSectionTouch = styled.section`
background: #fff;
display: grid;
grid-template-columns: 70% 30%;
padding: 60px 80px;
margin: 10% 0px;
box-shadow: 0px 31px 30px #b9b9b929;
`;


const Section = styled.section`
    max-width: ${(props) => props.width};
    margin:0 auto;
`;
const LocationList = styled.div`
    display: grid;
    grid-template-columns: 46% 46%;
    grid-gap:40px;
`;

const Icon = styled.img`
    float: left;
    margin: 0px 20px 20px 0px;
    width: 30px;
`;
const List = styled.div``;
const ListTitle = styled.div`
    text-align: left;
    font: normal normal medium 23px/34px  'Poppins',sans-serif;
    letter-spacing: 0px;
    color: #DB2D34;
    opacity: 1;`;
const ListContent = styled.div`
    text-align: left;
    font: normal normal normal 20px/26px  'Poppins',sans-serif;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;`;

const ContactSectionLeft = styled.div`
   h1{
    text-transform: uppercase;
    font-weight: 700;
    position: relative;
    margin-bottom: 90px
   }
   h1:after{
    content: "";
    left: 0;
    bottom: -20px;
    width: 16%;
    height: 12px;
    background: #FE5656 0% 0% no-repeat padding-box;
    border-radius: 107px;
    opacity: 1;
    position: absolute;


   }
   h2{
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 63px;
    margin: 10px 0px 13px 0px;
    padding-bottom: 0px;



   }

`;


const ContactSection = styled.div`
display: grid;
grid-template-columns: 46% 46%;
grid-gap: 40;
padding-bottom: 10%;

`;

const ContactSectionRight = styled.div`
   
`;
const Flogo = styled.img`
width: 100%;
margin-bottom: 70px;
`;

const IconTW = styled.img`
   
`;

const SL = styled.div`
display: flex;
justify-content: space-around;
`;

const FooterMain = styled.div`
    background:#F3F3F3 url(${(props) => props.background}) no-repeat center;
    background-size: contain;
    height: 100%;
    width: 100%;
    display: block;

`;