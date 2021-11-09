import styled from 'styled-components'
import { useEffect,useState } from "react";
import axios from "axios";
import SectionContainer from "../styles/section-container";
import callRequestBg from "../../assets/callRequest.png";
import Call from "../../assets/call.png";

import ReactLoading from "react-loading";
import Button from "../elements/button"
import Input from "../elements/input"
import Textarea from "../elements/textarea"

const Callrequest = ({state, bg, location}) => {
    const [success,setSuccess] = useState('');
    const [loader,setLoader] = useState(false);
    const submitHandler = e => {
        e.preventDefault();
        setLoader(true);
        const data = new FormData(e.target);
        axios.post('https://sheet.best/api/sheets/3f32dba9-712b-4a21-8585-48cc2c2da400', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            document.getElementById("contactForm").reset();
            setLoader(false)
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
                
                {loader && <ReactLoading type={'bubbles'}  className="loading red" style={{margin:'0 auto',color:"red",height:'100vh',width:"80px"}} />}
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
    @media only screen and (max-width: 480px) {
        margin-bottom: 0;
    padding-bottom: 0%;

    }
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
      @media only screen and (max-width: 480px) {
        height: 420px;

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
            font-size: 56px;
            width: 80%;
            margin: 80px auto;
            text-align: center;
          }
          @media only screen and (max-width: 480px) {
            font-size: 35px;
            width: 90%;
            line-height: 43px;
            margin: 40px auto;

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
    
    @media only screen and (max-width: 480px) {
        padding: 30px 30px;
       
    }
   

  }
.fild {
    float: left;
    width: 100%;
}
.fild label {
    color: #000;
    font-size: 22px;
    @media only screen and (max-width: 480px) {
        font-size: 18px;

    }
}

.fild:nth-child(2) {
    width: 48%;
    float: right;
    @media only screen and (max-width: 480px) {
        width: 100%;

    }
}

.fild:nth-child(1) {
    width: 48%;
    @media only screen and (max-width: 480px) {
        width: 100%;

    }
}

.fild input {
    border: 0px;
    border-bottom: 1px solid #929292;
    width: 100%;
    font-size: 18px;
    text-transform: uppercase;
    line-height: 45px;
    letter-spacing: 1px;
    @media only screen and (max-width: 480px) {
        line-height: 16px;

    }
}

.input_fild {
    margin: 0px 0px 40px 0px;
    @media only screen and (max-width: 480px) {
        margin: 0px 0px 20px 0px;

    }
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
    @media only screen and (max-width: 480px) {
        font-size: 16px;

    }

}
.fild_button button img {
    position: absolute;
    right: 31px;
    width: 20px;
    top: 18px;
    @media only screen and (max-width: 480px) {
        right: 0px;
        height: 200px;

    }
}
textarea, input:focus {
    outline: none;
}

`
