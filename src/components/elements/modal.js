import styled from 'styled-components';
import { useState } from "react";
import clock from "../../assets/clock.png";
import latest_icon05 from "../../assets/latest_icon05.png";
import latest_icon06 from "../../assets/latest_icon06.png";
import back from "../../assets/back.png";
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const Modal = (state) => {
    const [activeContent,setActiveContent] = useState(true);
    return <LatestBoxesSlides className={activeContent && 'active'}>
        <div className="projectContent">
            <> 
                <Back bg={back} onClick={()=>setActiveContent(false)}></Back>
                <video style={{width:'100%'}}>
                    <source src="https://staging.starmarketingonline.com/wp-content/uploads/2021/11/lallypor_2_10_teaser1.mp4" type="video/mp4" />
                </video>
                {/* <Imge className="full_img" src="https://staging.starmarketingonline.com/wp-content/uploads/2021/11/lyllpur-galleria.jpg" width="100%"></Imge> */}
                <div className="popupheadermain">
                    <Link className="tag" to="/project/lyallpur-galleria-ii/"  onClick={()=>setActiveContent(false)}>View Page</Link>
                    <text>
                        <date><Imge src={clock}></Imge> <Moment  format="MMM DD, YYYY"></Moment></date>
                        <views><Imge src={latest_icon05}></Imge>1 Views</views>
                        <user><Imge src={latest_icon06}></Imge> Star Marketing Online</user>
                    </text> 
                </div>
                <h2 className="popupheadings">Lyallpur Galleria II</h2>
               
                </>
            </div>
        </LatestBoxesSlides>
}

export default Modal;

const  LatestBoxesSlides = styled.div`
  position: fixed;
  right: -2000px;
  width: 100%;
  background: rgb(0 0 0 / 85%);
  height: 100%;
  z-index: 9999;
  top: 0;
 
  
  .projectContent {
    background: #F3F4F6;
    color:#000;
    width: 50%;
    position: fixed;
    right: -2000px;
    padding: 0px;
    height: 80vh;
    overflow: scroll;
    top: 10%;
    -webkit-transition: all 0.5s 0s ease;
    -moz-transition: all 0.5s 0s ease;
    -o-transition: all 0.5s 0s ease;
    transition: all 0.5s 0s ease;
    border-radius: 20px;
    @media only screen and (max-width: 1024px) {
      height: fit-content;
      
    }
   
  
    h2.popupheadings {
      text-align: center;
      font-weight: 300;
      font-size: 29px;
      padding: 14px 0px 40px 0px;
      @media only screen and (max-width: 480px) {
        padding: 30px 0px 40px 0px;
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
        @media only screen and (max-width: 1024px) {

          top: 24%;
        }
        @media only screen and (max-width: 480px) {

          top: 10%;
        }
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
    img {
      width: 100%;
      margin-bottom: 10px;
      border-radius: 8px;
  }
}
.popupheadermain {
  display: grid;
  grid-template-columns: 20% 70%;
  gap: 10%;
  width: 90%;
  margin: 0 auto;
  padding: 30px 0px;
  @media only screen and (max-width: 480px) {
    grid-template-columns: 100%;
  }
   .tag {
       text-decoration:none;
        background: #58AF78;
        color: #fff;
        font-size: 20px;
        border-radius: 16px;
        box-shadow: 0px 5px 5px #00000029;
        position: relative;
        padding: 10px;
        font-weight: 300;
        letter-spacing: 0.5px;
        left: 23px;
        text-align:center;
        @media only screen and (max-width: 480px) {
          left: 0px;
        }
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

@media only screen and (max-width: 1024px) {

}
`

const Imge = styled.img`

`

const Back = styled.button`
  background:url(${(props) => props.bg}) no-repeat center;
  height: 40px;
  width: 40px;
  display: block;
  background-size: contain;
  margin-bottom: 20px;
  cursor:pointer;
  position: absolute;
  z-index:999;
    left: 30px;
    top: 30px;
`

