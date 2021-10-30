import styled from 'styled-components'
import useSWR from 'swr'
import SectionContainer from "../styles/section-container";
import grayBackground from "../../assets/grayBackground.png";
import Button from "../styles/button";
import arrowLeft from "../../assets/arrowLeft.png";
import Slider from "react-slick";
import video from  "../../assets/video.png"
import line from "../../assets/line.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
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
const fetcher = (url) => fetch(url).then((res) => res.json());
const FeatureProducts = ({state}) => {
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
    dots:false,
    speed: 1000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    asNavFor: nav2,
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
    speed: 300,
    arrows: false,
    slidesToShow: 3,
    asNavFor : nav1,
    ref: slider => (slider3 = slider),    
    fade: true,
    centerPadding: 0,
    centerMode: true,
  };
    const { data, error } = useSWR('/featureProject', fetcher)
    console.log(data,error)
    return (
        <FeautureProductsMain  background={grayBackground}>
            <SectionContainer>
                <div>
                    <h2 className="featured-heading">FEATURED PROJECTS</h2>
                    <div className="featured-project-line"></div>
                </div>
                <ContentArea>
                    <LeftArea>
                    <Slider  {...settings}>   
                        {data && data.map((latest,index)=>
                            latest.acf && latest.acf.feature_project == 'yes' &&
                            <div>
                                {console.log(latest)}
                                <h3 className="featured-project-heading"  dangerouslySetInnerHTML={{ __html:latest.title.rendered}}></h3>
                                <p className="featured-project-description"  dangerouslySetInnerHTML={{ __html:latest.excerpt.rendered}}></p>
                                    <br />
                                    <div>
                                    <div className="featured-project-city-name">  
                                        <p className="featured-project-city-name-text" >{latest.acf && latest.acf.filters && latest.acf.filters.country}</p>
                                    </div>
                                    <ul  className="featured-project-tag">
                                    {latest.acf && latest.acf.filters && latest.acf.filters.categories.map((cat,index)=>
                                    
                                     <li key={index}><i className="fa fa-tag"></i> {cat}</li>
                                    ) }
                                    </ul>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                                <Button bg='#DB2D34'>Read More <LeftArrow src={arrowLeft} /></Button>
                            </div>
                        )}
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
                    <RightArea>
                        <Slider  {...settings_img}>     
                        {data && data.map((latest,index)=>
                            latest.acf && latest.acf.feature_project == 'yes' &&                            
                            <div>
                                <img className='image_slide' src={latest._embedded['wp:featuredmedia'][0].source_url} alt={video}  />
                            </div> 
                        )}
                         </Slider>
                         <Slider  {...settings_num}>
                            {data && data.map((latest,index)=>
                                latest.acf && latest.acf.feature_project == 'yes' &&    
                                <p className='number_slider'>{index}</p>
                            )}
                            <p className='number_slider'>2</p>
                             <p className='number_slider'>3</p>
                             <p className='number_slider'>4</p>
                             <p className='number_slider'>5</p>
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
    padding:0px 0 0px;
    background-position: bottom;
    margin-bottom: -191px;
    position: relative;
    ul.featured-project-tag {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    ul.featured-project-tag li {
        float: left;
        border: 1px solid #ccc;
        color: #202741;
        padding: 5px 15px;
        border-radius: 10px;
        font: normal normal 300 16px/27px Poppins;
        margin: 0 9px;
    }
  `;
const ContentArea = styled.div`
    display: flex;`
const LeftArea = styled.div`
    width:50%;
    button{
        clear:both;
        display:block;
    }
`
const RightArea = styled.div` 
width: 60%;
    .left_line{
        position: absolute;
        left: 85%;
        top: 84%;
        width: 20%
    }
    .right_line{
        position: absolute;
        left: 58%;
        top: 84%;
        width: 20%
    }
  .slick-slide {
    position: flex;
    opacity: 0;
    text-align: center; 
    .image_slide{
        width: 551px;
        height: 665px;
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
              right: 2%
            }
            
        }
        .next{
            position: absolute;
            right: 0%;
            bottom: -45px;
            z-index: 999;            
        }
        .prev{
            z-index: 999;
            position: absolute;
            left: 5%;
            bottom: -45px;
        }
}  
`
const BackgroundImage = styled.div`    
`
const LeftArrow = styled.img`
`