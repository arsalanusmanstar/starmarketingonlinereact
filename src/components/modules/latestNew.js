import styled from 'styled-components'
import useSWR from 'swr'
import { useEffect,useState } from "react";
import SectionContainer from "../styles/section-container";
import ProjectImage from "../../assets/01.jpg";
import clock from "../../assets/clock.png";
import user from "../../assets/user.png";
import left_arrow from "../../assets/left_arrow.png";
import latest_icon05 from "../../assets/latest_icon05.png";
import latest_icon01 from "../../assets/latest_icon01.png";
import latest_icon06 from "../../assets/latest_icon06.png";
import latest_icon08 from "../../assets/latest_icon08.png";
import back from "../../assets/back.png";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import Moment from 'react-moment';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import th from "../../assets/th.jpg";


const  fetcher =  async (url) => await fetch(url).then((res) => res.json());

const Latestnews = () => {

    const [activeContent,setActiveContent] = useState(false);
    const { data, error } = useSWR('https://staging.starmarketingonline.com/wp-json/wp/v2/posts?categories=47,2673&per_page=5&_embed=true', fetcher)
    const cat = ['47','2673']

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1366,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                adaptiveHeight: true,
              },
            },
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        };	
      
    return (
     <LatestNewContainer left_arrow={left_arrow}>    
        <SectionContainer style={{paddingTop:'0px'}}>
            <h1 className="featured-heading banners custom" style={{color:"#fff"}}><Bounce top >Latest</Bounce></h1>
            <Slide bottom><div className="featured-project-line"></div></Slide>
            <div className="mainSlide">
             <Slider  {...settings}>
                {data ? data.filter((post)=> post.categories.includes(parseInt(cat)) ).map((post,index) => 
                  <Post className="ccc" key={index} onClick={()=>setActiveContent(post)}>
                      <Image background={post._embedded['wp:featuredmedia'][0] && post._embedded['wp:featuredmedia'][0].media_details.sizes['tx-m-thumb'] ? post._embedded['wp:featuredmedia'][0].media_details.sizes['tx-m-thumb'].source_url :  post._embedded['wp:featuredmedia'][0].media_details.sizes['full'].source_url}>
                      <Details>
                      <Slide bottom><Title dangerouslySetInnerHTML={{ __html:post.title.rendered}}></Title> </Slide>
                      <Slide right><Auth><Imge src={user}></Imge> {
                          post.author == 789 ? "Aamir Saeeduddin" :
                          post.author == 788 ? "Arif Mustafa" :
                          post.author == 787 ? "Haris Sonija" :
                          post.author == 1 && "Star Marketing" 
                      }</Auth></Slide>
                        <Slide left><Date> <Imge src={clock}></Imge><Moment format="MMM D, YYYY ">{post.date}</Moment></Date></Slide>
                      <ShareMain>
                        <tag><Imge src={latest_icon01}></Imge>Events</tag>
                        <SaveShareLfet style={{cursor:'pointer'}}>
                            {/* <Imge src={th}></Imge> */}
                        </SaveShareLfet>
                      </ShareMain>
                      </Details>
                      </Image>
                  </Post>
                ): <div className="loaderFilter"><ReactLoading type={'bubbles'}  className="loading" style={{margin:'0 auto',color:"#fff",height:'100vh',width:"80px"}} /></div>}
            </Slider>
            </div>
        </SectionContainer>  
        <LatestBoxesSlides className={activeContent && 'active'}>
            {activeContent &&
             <div className="projectContent">
               { activeContent.categories[0] == 47 ? 
                <> 
                  <Back bg={back} onClick={()=>setActiveContent(false)}></Back>
                  <Imge className="full_img" src={activeContent._embedded['wp:featuredmedia'][0].source_url}  width="100%"></Imge>
                  <div className="popupheadermain">
                    <tag><Imge src={latest_icon01}></Imge>Events</tag>
                    <text>
                      <date><Imge src={clock}></Imge> <Moment  format="MMM DD, YYYY">{activeContent.date}</Moment></date>
                      <views><Imge src={latest_icon05}></Imge>{activeContent['post-meta-fields'] &&activeContent['post-meta-fields'].post_views_count[0]} Views</views>
                      <user><Imge src={latest_icon06}></Imge>{
                        activeContent.author == 789 ? "Aamir Saeeduddin" :
                        activeContent.author == 788 ? "Arif Mustafa" :
                        activeContent.author == 787 ? "Haris Sonija" :
                        activeContent.author == 1 && "Star Marketing" 
                      }</user>
                    </text> 
                  </div>
                  <h2 className="popupheadings" dangerouslySetInnerHTML={{ __html:activeContent.title.rendered}}></h2>
                   <div className="content"  dangerouslySetInnerHTML={{ __html:activeContent.content.rendered}}></div>
                </>
               : <div>
                  <Back  bg={back} onClick={()=>setActiveContent(false)}></Back>
                  <tag className="red secound"><Imge src={latest_icon08}></Imge>Announcements</tag>
                  <h2 className="popupheadings" dangerouslySetInnerHTML={{ __html:activeContent.title.rendered}}></h2>
                  <Imge className="full_img secound" src={activeContent._embedded['wp:featuredmedia'][0].source_url} width="100%"></Imge>
                  <div className="popupheadermain secound">
                      <text>
                      <date><Imge src={clock}></Imge> <Moment  format="MMM DD, YYYY">{activeContent.date}</Moment></date>
                      <views><Imge src={latest_icon05}></Imge>{activeContent['post-meta-fields'].post_views_count[0]} Views</views>
                      <user><Imge src={latest_icon06}></Imge> {
                        activeContent.author == 789 ? "Aamir Saeeduddin" :
                        activeContent.author == 788 ? "Arif Mustafa" :
                        activeContent.author == 787 ? "Haris Sonija" :
                        activeContent.author == 1 && "Star Marketing" 
                      }</user>
                      </text>
                  </div>
              </div> }   
            </div>
            }
        </LatestBoxesSlides>
    </LatestNewContainer>
    )
}


export default Latestnews;

const SaveShareLfet = styled.div`
`
const  ShareMain = styled.div`
  display: grid;
  grid-template-columns: 89% 10%;
  gap: 1%;
  align-items: center;
  margin-top: 8%;

`
const LatestNewContainer = styled.div`
  background: #202741 0% 0% no-repeat padding-box;
  box-shadow: 0px -35px 99px #0000004A;
  color:#fff;
  position: relative;
:before {
  content: "";
  display: block;
  width: 100%;
  height: 250px;
  position: absolute;
  background: linear-gradient(to bottom left, #83002400 50%, #202741 50.5%) no-repeat bottom, /* bottom part */ linear-gradient(0deg, #83002400, #83002400) no-repeat top;
  color: white;
  background-size: 100% 10em , 100% calc(100% - 10em);
  top: -250px;
@media only screen and (max-width: 1080px) {
  top: -249px;
}
@media only screen and (max-width: 480px) {
  top: -100px;
  background-size: 100% 4em,100% calc(100% - 4em);
  height: 100px;
}
}
.slick-slider{
button {
  position:absolute;
  top:39%;
&.slick-prev{
  background: url(${(props) => props.left_arrow})  0% 0% no-repeat padding-box;
  left: -140px;
  width: 120px;
  height: 108px;
  font-size: 0px;
  background-size: cover;
  cursor: pointer;
  transition: all 0.35s linear;
  transform: rotate(179deg);
:hover {
  opacity: 0.8;
  }
@media only screen and (max-width: 1366px) {
  display: none !important;
  }
}
&.slick-next{
  background: url(${(props) => props.left_arrow})  0% 0% no-repeat padding-box;
  right: -140px;
  width: 120px;
  height: 108px;
  font-size: 0px;
  background-size: cover;
  cursor: pointer;
  transition: all 0.35s linear;
:hover {
  opacity: 0.8;
  }
@media only screen and (max-width: 1366px) {
    display: none !important;
}
}
}
.slick-list{
div.slick-slide{
  padding:1% 30px 1.2% 30px;
@media only screen and (max-width: 1080px) {
  padding: 1% 30px 0.2% 30px;
  }
@media only screen and (max-width: 820px) {
  padding: 1% 10px 0.2% 10px;

}
@media only screen and (max-width: 480px) {
  padding: 0% 0px 0px 0px;

}
}
}
}
h1{
  text-align: center;
  font-size: 85px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 6px;
  margin-top: -2%;
  @media only screen and (max-width: 820px) {
     
      margin: 0px 0px !important;
      line-height: 60px !important;
  
  }
@media only screen and (max-width: 1080px) {
  font-size: 50px;
}
@media only screen and (max-width: 480px) {
  font-size: 50px;
  text-align: left;
}
}
ul.slick-dots button{
  position: absolute;
  font-size: 0px;
  width: 20px;  
  height: 20px;
  border-radius: 100px;
  cursor: pointer;
  opacity: 0.21;
@media only screen and (max-width: 480px) {
  width: 10px;  
  height: 10px;
}
}
ul.slick-dots li.slick-active button{
  opacity: 1;
}
ul.slick-dots li{
  float: left;
  margin: 0px 22px;
  position: relative;
}
ul.slick-dots li::marker{
font-size: 0px;
}
ul.slick-dots {
  display: flex !important;
  justify-content: center;
  margin: 0;
@media only screen and (max-width: 480px) {
  position: relative;
  top: 5px;

}
}
`
const Post = styled.div`
  opacity: 1;
  text-decoration:none;
  cursor:pointer;
@media only screen and (max-width: 480px) {
 

}
`
const Image = styled.div`
  background: linear-gradient(179deg, rgb(2 0 36 / 0%) 0%, rgb(9 9 121 / 0%) 20%, rgb(255 255 255) 100%), url(${(props) => props.background})  0% 0% no-repeat padding-box;
  height: 500px;
  width: 100%;
  background-size: cover;
  border-radius: 20px;
  margin-top: 0;
  background-position: top center;
  position: relative;
`
const Title = styled.h3`
  text-align: left;
  font-size: 18px;
  letter-spacing: 0px;
  color: #1D253F;
  opacity: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0px 0px;
  font-weight: 500;
  overflow: hidden;
  line-height: 23px;
  min-height: 60px;
  @media only screen and (max-width: 1080px) {
    min-height: 48px;
    margin-bottom: 12px;
  }
@media only screen and (max-width: 480px) {
  margin: 10px 20px 6px 0px;
}
 `
const Details = styled.div`
  margin: 20px 20px;
  padding: 20px 20px;
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
:after{
  content: "";
  display: block;
  clear: both;

}
img{
    height: 16px;
    width: 16px;
    float: left;
    margin: 0px 10px 0px 0px;
@media only screen and (max-width: 820px) {
  width: 20px;
}
}
@media only screen and (max-width: 480px) {
 
}
tag {
  background: rgb(88, 175, 120);
  width: fit-content;
  display: flex;
  font-size: 14px;
  color: rgb(255, 255, 255);
  padding: 10px 25px 10px 36px;
  border-radius: 14px;
  box-shadow: rgb(0 0 0 / 16%) 0px 12px 13px;
  position: relative;
  letter-spacing: 0.5px;
  margin: 0px 0px 0px 16px;
img{
  width: 40px;
  height: fit-content;
  position: absolute;
  left: -16px;
  top: 0;
  @media only screen and (max-width: 1080px) {
    height: 55px;
    width: 50px;
  }
  @media only screen and (max-width: 820px) {
    
  }
}
}
`
const Date = styled.div`
  color: #666666;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
@media only screen and (max-width: 820px) {
  font-size: 14px;
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 480px) {
  font-size: 14px;
  display: flex;
  align-items: center;
}  
`
const Auth = styled.div`
  color: #666666;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
@media only screen and (max-width: 820px) {
  font-size: 14px;
  display: flex;
  align-items: center;
  line-height: 13px;
  min-height: 26px;

}
@media only screen and (max-width: 480px) {
  font-size: 14px;
  display: flex;
  align-items: center;
}
`

const Imge = styled.img`

`
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
h2.popupheadings {
  text-align: center;
  font-weight: 300;
  font-size: 29px;
  padding: 14px 0px 40px 0px;
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
@media only screen and (max-width: 480px) {
figure {
  margin: 0;
img {
  height: auto; 
}
}
}
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
  text-align: left;
  grid-template-columns: 100%;
  }
tag {
  display: flex;
  background: #58AF78;
  color: #fff;
  font-size: 20px;
  border-radius: 16px;
  box-shadow: 0px 5px 5px #00000029;
  position: relative;
  padding: 12px 0px 13px 49px;
  font-weight: 300;
  letter-spacing: 0.5px;
  left: 23px;
@media only screen and (max-width: 480px) {
  left: 10px;
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
  grid-template-columns: 100%;
  gap: 6%;
  display: grid;
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
const Back = styled.button`
  background:url(${(props) => props.bg}) no-repeat center;
  height: 40px;
  width: 40px;
  display: block;
  background-size: contain;
  margin-bottom: 20px;
  cursor:pointer;
  position: absolute;
  left: 30px;
  top: 30px;
@media only screen and (max-width: 480px) {
  position: relative;
  left: 9px;
  top: 17px;
}
`

