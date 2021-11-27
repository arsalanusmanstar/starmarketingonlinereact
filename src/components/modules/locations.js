import styled from 'styled-components'
import SectionContainer from "../styles/section-container";
import footer_icon from "../../assets/footer_icon.png";
import Logo_f from "../../assets/logo_f.png";
import FB from "../../assets/FB.png";
import TW from "../../assets/TW.png";
import YT from "../../assets/YT.png";
import In from "../../assets/In.png";
import WhatsappImage from "../../assets/whatsapp.png";
import PhoneImage from "../../assets/phone_icon.png";
import INSTA from "../../assets/INSTA.png";
import Touch from "../../assets/touch.png";
import grayBackground from "../../assets/map.png";
import { useEffect,useState } from "react";
import Mailchimp from 'react-mailchimp-form';
import axios from "axios";
import Slide from 'react-reveal/Slide';

const Locations = ({state}) => {
    const [success,setSuccess] = useState('');

    return (

       
<FooterMain background={grayBackground}>
 <SectionContainer>
    <ContactSectionTouch className="maincontactsection" style={{marginTop:'-50px'}}>
      <ContactSectionTouchLeft>
         <h1><Slide left >Let's Stay In Touch</Slide></h1>
         <p><Slide left >Subscribe to our Newsletter to receive exclusive offers, latest news and updates.</Slide></p>
         <Mailchimp
            action='https://starmarketingonline.us1.list-manage.com/subscribe/post?u=c310c5c3b46ff223b92ac57e6&amp;id=5baec4271f'
            fields={[
            {
                name: 'EMAIL',
                placeholder: 'Enter Email Address',
                type: 'email',
                required: true
            }
            ]}
            messages = {
                {
                    sending: "Sending...",
                    success: "Thank you for subscribing!",
                    error: "An unexpected internal error has occurred.",
                    empty: "You must write an e-mail.",
                    duplicate: "Too many subscribe attempts for this email address",
                    button: "Subscribe!"
                }
            }
            className='mailchimpform'
            />
        {/* <form method="Post" action="https://marketing.us6.list-manage.com/subscribe/post?u=df313acb6a40efd656040f419&amp;id=faefd9810a"  id="mc-embedded-subscribe-form"  name="mc-embedded-subscribe-form" className="validate" target="_blank" > */}
            {/* <MailchimpSubscribe url={url}/> */}
            {/* <input type="text" name="EMAIL" placeholder="Email Address"  id="mce-EMAIL" required/>
            <button type="Submit" style={{cursor:'pointer'}} name="subscribe" id="mc-embedded-subscribe" className="button">Subscribe</button> */}
            {/* <div style={{paddingTop:'10px'}}>{success}</div> */}
         {/* </form> */}
     </ContactSectionTouchLeft>
         <ContactSectionTouchRight>
            <Imge className="responsive" src={Touch}></Imge> 
         </ContactSectionTouchRight>
     </ContactSectionTouch>
        <ContactSection>
            <ContactSectionLeft>
                <h1 className="Head_C"><Slide left >Contact Us</Slide></h1>
                <h2 className="head_n"> <Slide left ><img src={PhoneImage} />  111 111 160 </Slide></h2>
                <h2 className="head_n"><Slide bottom ><img src={WhatsappImage} />+92 301 116 1116</Slide></h2>
            </ContactSectionLeft>
             <ContactSectionRight>
               <Flogo className="logo_f" src={Logo_f}></Flogo>
                <SL>
                    <Slide bottom> <a href="https://twitter.com/starmarketingon" target="_blank"> <IconTW className="FS" src={TW}></IconTW></a> </Slide>
                    <Slide bottom> <a href="https://www.facebook.com/starmarketingpk" target="_blank"> <IconTW className="FS" src={FB}></IconTW></a> </Slide>
                    <Slide bottom><a href="https://www.youtube.com/c/StarMarketingPvtLtd" target="_blank"> <IconTW className="FS" src={YT}></IconTW></a> </Slide>
                    <Slide bottom><a href="https://www.linkedin.com/company/starmarketingpvtltd/mycompany/" target="_blank"><IconTW className="FS" src={In}></IconTW></a> </Slide>
                    <Slide bottom> <a href="https://www.instagram.com/starmarketingpvtltd/" target="_blank"> <IconTW className="FS" src={INSTA}></IconTW></a> </Slide>
                </SL>
             </ContactSectionRight>
        </ContactSection>
        <LocationList>
            <List>
                <Icon className="footer_icons" src={footer_icon}></Icon>
                <ListTitle>Karachi Office  </ListTitle>
                <ListContent>   Mezzanine Floor, Topra Plaza, Main University Road, Opp. Urdu Science College Gulshan-e-Iqbal, Karachi.  </ListContent>
            </List>
            <List>
                <Icon className="footer_icons" src={footer_icon}></Icon>
                <ListTitle>Islamabad Office  </ListTitle>
                <ListContent>  Roshan Center, Jinnah Avenue Islamabad, Punjab  </ListContent>
            </List>
            <List>
                <Icon className="footer_icons" src={footer_icon}></Icon>
                <ListTitle>Lahore Office  </ListTitle>
                <ListContent>  Office No. 106, 1st Floor, Siddiq Trade Center, 72, Main Boulevard Lahore, Punjab  </ListContent>
            </List>
            <List>
                <Icon className="footer_icons" src={footer_icon}></Icon>
                <ListTitle>Peshawar Office  </ListTitle>
                <ListContent>  Deans Trade Center, UG-7 & UG-8, Opposite F.C Headquarters, Saddar Peshawar, Khyber Pakhtunkhwa  </ListContent>
            </List>
            <List>
                <Icon className="footer_icons" src={footer_icon}></Icon>
                <ListTitle>Multan Office  </ListTitle>
                <ListContent> Office No. 09, 10, 11, 2nd Floor, Chenone Tower, Abdali Road, Multan  </ListContent>
            </List>
            <List>
                <Icon className="footer_icons" src={footer_icon}></Icon>
                <ListTitle>Hyderabad Office  </ListTitle>
                <ListContent>  Shop No. 10, 11, Garrison Complex, Main Saddar Road, Near Bombay Bakery, Hyderabad, Sindh, Pakistan  </ListContent>
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
@media only screen and (max-width: 1366px) {
    font-size: 61px;
}
@media only screen and (max-width: 820px) {
    font-size: 40px;
}
@media only screen and (max-width: 480px) {
    font-size: 30px;
    margin-bottom: 10px;
}
}
p{
    font-size: 24px;
    width: 80%;
@media only screen and (max-width: 820px) {
    font-size: 18px;
}
@media only screen and (max-width: 480px) {
    font-size: 14px;
}
}
 input {
    border: 1px solid #707070;
    border-radius: 5px;
    width: 70%;
    padding: 20px 22px;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 100;
:focus {
    outline: none;
}
@media only screen and (max-width: 1366px) {
    width: 60%;
}
@media only screen and (max-width: 820px) {
    font-size: 16px;
}
@media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 14px;
    margin-bottom: 5px;

}
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
    transition: all 0.35s linear;
:hover {
    background: #db2d34;
    transition: all 0.35s linear;
}
@media only screen and (max-width: 820px) {
    top: 1px;
    font-size: 19px;
}
@media only screen and (max-width: 480px) {
    width: 100%;
    margin: 0px 0px 0px 0px;
    text-align: center;
    font-size: 16px;
    }
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
@media only screen and (max-width: 1366px) {
    align-items: center;
    padding: 30px 30px;
@media only screen and (max-width: 480px) {
    padding: 20px 20px;
}
}
@media only screen and (max-width: 1080px) {
    grid-template-columns: 54% 46%;
    grid-template-columns: 100%;
}
@media only screen and (max-width: 480px) {
img.responsive {
    width: -webkit-fill-available;
    top: 4px !important;
}
}
`;

const Section = styled.section`
    max-width: ${(props) => props.width};
    margin:0 auto;
`;
const LocationList = styled.div`
    display: grid;
    grid-template-columns: 48% 48%;
    grid-gap: 57px;
@media only screen and (max-width: 1366px) {
    grid-template-columns: 50% 50%;
}
@media only screen and (max-width: 1080px) {
    grid-template-columns: 49% 49%;
    grid-gap: 20px;
}
@media only screen and (max-width: 820px) {
    grid-gap: 10px;
}
@media only screen and (max-width: 786px) {
    grid-template-columns: 100%;
}
@media only screen and (max-width: 480px) {
    grid-gap: 10px;
}
`;

const Icon = styled.img`
    float: left;
    margin: 0px 20px 20px 0px;
    width: 30px;
@media only screen and (max-width: 1080px) {
    margin: 0px 20px 66px 0px;
}
@media only screen and (max-width: 820px) {
    width: 20px;
}
@media only screen and (max-width: 480px) {
    float: none;
    margin: 0px 0px 0px 0px;
    width: 20px;
}
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
    opacity: 1;
@media only screen and (max-width: 1366px) {
    font-size: 16px;
}
@media only screen and (max-width: 820px) {
    font-size: 14px;
    line-height: 20px;
}
@media only screen and (max-width: 480px) {
    font-size: 14px;

}
`;

const ContactSectionLeft = styled.div`
h1{
    text-transform: uppercase;
    font-weight: 700;
    position: relative;
    margin-bottom: 90px;
@media only screen and (max-width:1080px) {
    margin-bottom: 40px;
}
@media only screen and (max-width: 820px) {
    font-size: 50px;
}
@media only screen and (max-width: 480px) {
    margin-bottom: 34px;
    font-size: 40px;
    text-align: left;
}
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
    display: flex;
    align-items: center;
    gap: 18px;
img{
    height: fit-content;
}
@media only screen and (max-width: 1366px) {
    font-size: 50px;
}
@media only screen and (max-width: 1080px) {
    justify-content: center;
}
@media only screen and (max-width: 820px) {
    font-size: 40px;
}
@media only screen and (max-width: 480px) {
    display: flex;
    justify-content: flex-start;
    font-size: 30px;
}
}
`;
const ContactSection = styled.div`
    display: grid;
    grid-template-columns: 46% 46%;
    grid-gap: 40px;
    padding-bottom: 5%;
@media only screen and (max-width: 1366px) {
    grid-template-columns: 48% 47%;
}
@media only screen and (max-width: 1080px) {
    grid-template-columns: 100%;
    text-align: center;
h1:after {
    margin: 0 auto;
    left: 0;
    right: 0;
}
@media only screen and (max-width: 480px) {
    grid-template-columns: 100%;
    text-align: center;
h1:after {
    margin: revert;
    left: 0px;
    right: 0;
    height: 8px;
    bottom: -7px;
}
}
`;

const ContactSectionRight = styled.div`
`;
const Flogo = styled.img`
    width: 100%;
    margin-bottom: 70px;
@media only screen and (max-width: 1080px) {
    width: fit-content;
}
@media only screen and (max-width: 820px) {
    display: none;
}
@media only screen and (max-width: 480px) {
    width: 100%;
    margin-bottom: 20px;
}
`;

const IconTW = styled.img`
`;

const SL = styled.div`
    display: flex;
    justify-content: space-around;
@media only screen and (max-width: 820px) {
    align-items: center;
img {
    width: 34px;
}
}
@media only screen and (max-width: 480px) {
    align-items: center;
img {
    width: 34px;
}
}
`;
const FooterMain = styled.div`
    background:#F3F3F3 url(${(props) => props.background}) no-repeat center;
    background-size: contain;
    height: 100%;
    width: 100%;
    display: block;
`;