import styled from 'styled-components'
import axios from "axios";
import SectionContainer from "../styles/section-container";
import grayBackground from "../../assets/grayBackground.png";
import Button from "../styles/button";
import latest_icon07 from "../../assets/latest_icon07.png";
import Slider from "react-slick";
import video from  "../../assets/video.png"
import line from "../../assets/line.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import ReactLoading from "react-loading";
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';

const NextArrow = ({ onClick }) => {
    return (
        <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
};
const PrevArrow = ({ onClick }) => {
    return (
        <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
};
const FeatureProducts = ({state}) => {
    
    const [data,setData] = useState(JSON.parse(localStorage.getItem('projects')));
    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    const [nav3, setNav3] = useState(null)
      let slider1 = []
      let slider2 = []
      let slider3 = []

      useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
        setNav3(slider3)

    }, [slider1, slider2, slider3])

    const settings_img = {
    infinite: true,
    lazyLoad: true,
    dots:false,
    speed: 1000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    asNavFor: nav2,
    autoplay: true,
    autoplaySpeed: 7000,
    ref : slider => (slider1 = slider),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }; 
  
    const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    centerMode: true,
    centerPadding: 0,
    arrows: false,
    asNavFor : nav3,
    ref: slider => (slider2 = slider)    
  }; 
  
  const settings_num = {
      
    infinite: true,
    lazyLoad: true,
    speed: 300,
    arrows: false,
    slidesToShow: 3,
    asNavFor : nav1,
    ref: slider => (slider3 = slider),    
    fade: true,
    centerPadding: 0,
    centerMode: true,
  };

  
  let projects = []
    useEffect(async ()=>{
        try {
        projects = JSON.parse(localStorage.getItem('projects'));
        !projects && axios.get('https://staging.starmarketingonline.com/wp-json/wp/v2/portf?_embed=true&per_page=100')
        .then(response => {
            localStorage.setItem('projects',JSON.stringify(response.data))
            setData(response.data)
        })
        } catch (e) {
            console.error(e);
        }
    })
  
    return (
        <FeautureProductsMain  background={grayBackground}>
            <SectionContainer>
                <div>
                    <h2 className="featured-heading wow slideInUp" data-wow-duration="5s">     <Roll bottom cascade>FEATURED PROJECTS      </Roll></h2>
                    <Fade bottom> <div className="featured-project-line "></div>   </Fade>
                </div>
                <ContentArea>
                    <LeftArea className="wow slideInUp" data-wow-duration="3s">
                    <Slider  {...settings}>   
                    
                        {data ? data.filter((latest)=> latest.acf && latest.acf.feature_project == 'yes' ).map((latest,index)=>
                            <div key={index}>
                                    <h3 className="featured-project-heading"><Bounce top cascade>{latest.title.rendered}</Bounce> </h3>  
                                     <p className="featured-project-description" dangerouslySetInnerHTML={{ __html:latest.excerpt.rendered}}></p> 
                                    <br />
                                    <div>
                                    <div className="featured-project-city-name">  
                                        <p className="featured-project-city-name-text" > <Bounce left cascade> {latest.acf && latest.acf.filters && latest.acf.filters.city}     </Bounce></p>
                                    </div>
                                    <br/><br/>
                                    <ul  className="featured-project-tag" style={{marginLeft:'-9px'}}>
                                    {latest.acf && latest.acf.filters && latest.acf.filters.categories.map((cat,index)=>
                                    
                                     <li key={index}><i className="fa fa-tag"></i> <Bounce bottom cascade>{cat}</Bounce> </li>
                                    ) }
                                    </ul>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                                <ReadMore>
                                    <Link style={{color:'#fff', textDecoration:'none'}} to={latest.link.replace('https://staging.starmarketingonline.com','')}> <Bounce right cascade>Read More <LeftArrow src={latest_icon07} /></Bounce></Link>
                                </ReadMore>
                                {/* <Button bg='#DB2D34'>Read More <LeftArrow src={arrowLeft} /></Button> */}
                            </div>
                        ): <div className="loaderFilter"><ReactLoading type={'bubbles'}  className="loading" style={{margin:'0 auto',color:"#fff",height:'100vh',width:"80px"}} /></div>}
                        {/* <div>
                        <h3 className="featured-project-heading">Heaven Heights 2</h3>
                        <p className="featured-project-description">Heaven Heights Luxury Apartments Lahore. Heaven Heights Apartments in Lahore are new style apartments on main Shah Jamal roundabout. The Apartment building offers 1, 2, and 3 bed Apartments for Sale. It includes all modern day to day facilities that have now become a necessity. Heaven Heights Apartments are designed to be the perfect choice for your living being offered on easy installments</p>
                            <br />
                            <div>
                            <div className="featured-project-city-name">  
                                <p className="featured-project-city-name-text" >Islamabad</p>
                            </div>
                            <ul  className="featured-project-tag">
                                <li><i className="fa fa-tag"></i> Shops</li>
                                <li><i className="fa fa-tag"></i> Flats</li>
                            </ul>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <Button bg='#DB2D34'>Read More <LeftArrow src={arrowLeft} /></Button>
                        </div>
                        <div>
                        <h3 className="featured-project-heading">Heaven Heights 3</h3>
                        <p className="featured-project-description">Heaven Heights Luxury Apartments Lahore. Heaven Heights Apartments in Lahore are new style apartments on main Shah Jamal roundabout. The Apartment building offers 1, 2, and 3 bed Apartments for Sale. It includes all modern day to day facilities that have now become a necessity. Heaven Heights Apartments are designed to be the perfect choice for your living being offered on easy installments</p>
                            <br />
                            <div>
                            <div className="featured-project-city-name">  
                                <p className="featured-project-city-name-text" >Islamabad</p>
                            </div>
                            <ul  className="featured-project-tag">
                                <li><i className="fa fa-tag"></i> Shops</li>
                                <li><i className="fa fa-tag"></i> Flats</li>
                            </ul>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <Button bg='#DB2D34'>Read More <LeftArrow src={arrowLeft} /></Button>
                        </div>
                        <div>
                        <h3 className="featured-project-heading">Heaven Heights 4</h3>
                        <p className="featured-project-description">Heaven Heights Luxury Apartments Lahore. Heaven Heights Apartments in Lahore are new style apartments on main Shah Jamal roundabout. The Apartment building offers 1, 2, and 3 bed Apartments for Sale. It includes all modern day to day facilities that have now become a necessity. Heaven Heights Apartments are designed to be the perfect choice for your living being offered on easy installments</p>
                            <br />
                            <div>
                            <div className="featured-project-city-name">  
                                <p className="featured-project-city-name-text" >Islamabad</p>
                            </div>
                            <ul  className="featured-project-tag">
                                <li><i className="fa fa-tag"></i> Shops</li>
                                <li><i className="fa fa-tag"></i> Flats</li>
                            </ul>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <Button bg='#DB2D34'>Read More <LeftArrow src={arrowLeft} /></Button>
                        </div>
                        <div>
                        <h3 className="featured-project-heading">Heaven Heights 5</h3>
                        <p className="featured-project-description">Heaven Heights Luxury Apartments Lahore. Heaven Heights Apartments in Lahore are new style apartments on main Shah Jamal roundabout. The Apartment building offers 1, 2, and 3 bed Apartments for Sale. It includes all modern day to day facilities that have now become a necessity. Heaven Heights Apartments are designed to be the perfect choice for your living being offered on easy installments</p>
                            <br />
                            <div>
                            <div className="featured-project-city-name">  
                                <p className="featured-project-city-name-text" >Islamabad</p>
                            </div>
                            <ul  className="featured-project-tag">
                                <li><i className="fa fa-tag"></i> Shops</li>
                                <li><i className="fa fa-tag"></i> Flats</li>
                            </ul>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <Button bg='#DB2D34'>Read More <LeftArrow src={arrowLeft} /></Button>
                        </div> */}
                        </Slider>
                    </LeftArea>
                    <RightArea className="wow slideInRight" data-wow-duration="3s">
                        <Slider  {...settings_img}>     
                        {data && data.filter((latest)=> latest.acf && latest.acf.feature_project == 'yes' ).map((latest,index)=>    
                            <div key={index}>
                                <img className='image_slide' src={latest._embedded['wp:featuredmedia'][0].media_details.sizes['tx-m-thumb'].source_url} alt={video}  />
                            </div> 
                        )}
                         </Slider>
                         <Slider  {...settings_num}>
                            {data && data.filter((latest)=> latest.acf && latest.acf.feature_project == 'yes' ).map((latest,index)=>
                                   
                                <p className='number_slider' key={index}>{index + 1}</p>
                            )}
                         </Slider>
                    <img className='left_line' src={line} alt={line}  />
                    <img className='right_line' src={line} alt={line}  />
                    </RightArea>
                </ContentArea>
            </SectionContainer>
        </FeautureProductsMain>
    )
}
export default FeatureProducts;
const Section = styled.section`
    max-width: ${(props) => props.width};
    margin:0 auto;
`;
const FeautureProductsMain = styled.div`
    background:#ebebeb  url(${(props) => props.background})  0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 0px 0px 90px 0px;
    background-position: bottom;
    background-attachment: fixed;
    background-size: cover;

    @media only screen and (max-width: 820px) {
        background-size: cover;
        background-position: right;
    }
    @media only screen and (max-width: 480px) {
        padding: 0px 0px 0px 0px;
        background-size: contain;
    }
   
    position: relative;
    ul.featured-project-tag {
        list-style: none;
        margin: 0 auto !important;
        display: block;
        padding: 0;
        clear: both;
    }
    
    ul.featured-project-tag li {
        float: left;
        border: 1px solid #ccc;
        color: #202741;
        padding: 5px 15px;
        border-radius: 5px;
        font: normal normal 300 14px/24px Poppins;
        margin: 9px 9px 0px 0px;
        letter-spacing: 0.5px;
    text-transform: capitalize;
    background: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
        @media only screen and (max-width: 820px) {
            margin: 0px 4px 0px 0px;
            font-size: 12px;
            text-transform: capitalize;
            padding: 3px 12px;

        }
        @media only screen and (max-width: 480px) {
                margin: 6px 6px 0px 0px;
                font-size: 14px;
                padding: 3px 10px;

        }
    }
  `;
const ContentArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 1366px) {
        justify-content: space-between;
    
      }
      @media only screen and (max-width: 786px) {
        display: block;
    
      }
    
    
    
    `
    
const LeftArea = styled.div`
    width:40%;
    @media only screen and (max-width: 786px) {
        width:100%;
    
      }
    
    button{
        clear:both;
        display:block;
    }
`
const RightArea = styled.div` 
width: 50%;
position: relative;
@media only screen and (max-width: 786px) {
    width:100%;

  }
    .left_line{
        position: absolute;
        right: 4%;
        width: 40%;
        bottom: 56px;
        height: 2.5px;
        
    }
    .right_line{
        position: absolute;
        left: 9%;
        width: 40%;
        bottom: 56px;
        height: 2.5px;
    }
  .slick-slide {
    position: flex;
    opacity: 0;
    text-align: center; 
    .image_slide{
        width: 551px;
        height: 665px;
        @media only screen and (max-width: 1366px) {
            width: 345px;
            height: 490px;

        }
        @media only screen and (max-width: 480px) {
            width: 200px;
                height: 260px;

        }
    }
    
}
.slick-slider{
    .slick-list{
        .number_slider{
            font-size:35px;
            position:relative;
            margin-top:0px;
            margin-left: 20px;
            font-weight: 600;
        }
        .slick-active{                
            transform: scale(0.7);
            transition: transform 300ms;
            opacity: 0.5;
        }
          .slick-current{
              opacity: 1;
              transform: scale(.8);
              position: relative;
              right: 2%;
              z-index: 999;
            }
            
        }
        .next{
            position: absolute;
            right: 0%;
            bottom: -45px;
            z-index: 999;   
            @media only screen and (max-width: 786px) {
                bottom: 14px;
            }
            @media only screen and (max-width: 480px) {
                display: none;
            }
        }
        .prev{
            z-index: 999;
            position: absolute;
            left: 5%;
            bottom: -45px;
            @media only screen and (max-width: 786px) {
                bottom: 14px;
            }
            @media only screen and (max-width: 480px) {
                display: none;
            }
        }
}  
`
const BackgroundImage = styled.div`    
`
const LeftArrow = styled.img`
`

const ReadMore = styled.button`
  background: #DB2D34 0% 0% no-repeat padding-box;
  color: #fff;
  text-align: left;
  border-radius: 8px;
  font: normal normal 300 18px/30px Poppins;
  margin: 20px 0;
  position:relative;
  z-index: 123;
  transition: all 0.35s linear;
  :hover {
    background: #ff000a 0% 0% no-repeat padding-box;
 }
  :hover img {
    right: 15px;
    width: 35px;
   }
   a {
    padding: 18px 70px 18px 30px;
        display: block;
        font-size: 16px;
        font-weight: 200;
       
    @media only screen and (max-width: 1366px) {
        padding: 20px 80px 20px 24px;
        font-size: 16px;
   
    }
    @media only screen and (max-width: 820px) {
        padding: 14px 58px 14px 20px;
    }
    @media only screen and (max-width: 480px) {
            padding: 12px 40px 12px 18px;
            font-size: 14px;
         
    
      }
}
  img {
    top: 27px;
        right: 26px;
        position: absolute;
        width: 32px;
        transition: all 0.35s linear;
        @media only screen and (max-width: 1366px) {
            top: 26px;
            right: 20px;
        }
        @media only screen and (max-width: 820px) {
            top: 23px;
            right: 16px;
        }
        @media only screen and (max-width: 480px) {
            top: 24px;
                right: 16px;
                width: 20px;
             
        
          }
  }
  @media only screen and (max-width: 480px) {
   
    margin: 0px 0;
}
 
`;
