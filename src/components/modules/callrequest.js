import styled from 'styled-components'
import { useEffect,useState } from "react";
import axios from "axios";
import SectionContainer from "../styles/section-container";
import callRequestBg from "../../assets/callRequest.png";
import Call from "../../assets/call.png";

import Button from "../elements/button"
import Input from "../elements/input"
import Textarea from "../elements/textarea"

const Callrequest = ({state, bg, location}) => {
    const [success,setSuccess] = useState('');
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
        <MainContainer background={callRequestBg} bg={bg}>

            <SectionContainerOverRight  bg={bg}>
            <CallSectionMain>
                <CallRequests background={Call}>
                    <h2>Request Instant Call Back</h2>
                </CallRequests>
                <form className="callform" method="POST" id="contactForm" onSubmit={(e)=>submitHandler(e)}>
                    <Input type="text" name="Name" placeholder="" title="Full Name" />
                    <Input type="number" name="Phone" placeholder="" title="Phone" />
                    <Input type="email" name="Email" placeholder="" title="Email" />
                    <Input type="hidden" name="Url" value={location && location.pathname} />
                    <Textarea name="Details" placeholder="Write your message" title="Details" />
                    <Success>{success}</Success>
                    <Button type="submit" value="Send Message" />
                </form>
                </CallSectionMain>
            </SectionContainerOverRight>
        </MainContainer>
    )
}

export default Callrequest;

const MainContainer = styled.div`
    background:${(props) => props.bg != 'off' ? `url( ${props.background}) no-repeat center`: '#f3f3f3'};
    width: 100%;
    display: block;
    background-position: bottom;
    margin-bottom: ${(props) => props.bg != 'off' && '-146px'};
    padding-bottom:  ${(props) => props.bg != 'off' && '20%'};
    padding-top:${(props) => props.bg != 'off' && ' 4%;'};
    color:#fff;
`;
const SectionContainerOverRight = styled(SectionContainer)`
    padding:${(props) => props.bg == 'off' && ' 40px 0'};
`
const CallRequests = styled.div` 
    background:url(${(props) => props.background}) no-repeat center;
    width: 100%;
    display: block;
    height: 591px;
    @media only screen and (max-width: 1366px) {
        background-size: contain;
        background-position: center;
    
      }
     h2 {
        font-size: 34px;
        font-weight: 400;
        width: 55%;
        color: #fff;
        margin: 80px 60px;
        line-height: 43px;
        text-shadow: 1px 1px 1px #00000070;
        @media only screen and (max-width: 1366px) {
            font-size: 30px;
            width: 80%;
        
          }
    }
`
const Success = styled.div`
    color: #333;
    float: left;
    width: 400px;`

const CallSectionMain = styled.div` 
display: grid;
grid-template-columns: 35% 65%;
@media only screen and (max-width: 1366px) {
    background: #db2d34;

  }
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 100%;

  }
.callform{
    background: #fff;
    padding: 65px 70px 42px;
  }
.fild {
    float: left;
    width: 100%;
}
.fild label {
    color: #000;
    font-size: 22px;
}

.fild:nth-child(2) {
    width: 48%;
    float: right;
}

.fild:nth-child(1) {
    width: 48%;
}

.fild input {
    border: 0px;
    border-bottom: 1px solid #929292;
    width: 100%;
    font-size: 18px;
    text-transform: uppercase;
    line-height: 45px;
    letter-spacing: 1px;
}

.input_fild {
    margin: 0px 0px 40px 0px;
}



textarea {
    width: 100%;
    font-size: 18px;
    text-transform: uppercase;
    line-height: 24px;
    letter-spacing: 1px;
    border: 0px;
    border-bottom: 1px solid #929292;
}

.fild_button button {
    background: #DB2D34;
    padding: 16px 65px 16px 40px;
    color: #fff;
    position: relative;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 2px;
    float: right;
    border-radius: 11px;

}
.fild_button button img {
    position: absolute;
    right: 31px;
    width: 20px;
    top: 18px;
}
textarea, input:focus {
    outline: none;
}

`
