import styled from 'styled-components'
import useSWR from 'swr'
import SectionContainer from "../styles/section-container";
import ProjectImage from "../../assets/01.jpg";
import clock from "../../assets/clock.png";
import user from "../../assets/user.png";
import left_arrow from "../../assets/left_arrow.png";
import Slider from "react-slick";

const fetcher = (url) => fetch(url).then((res) => res.json());


const Latestnews = () => {

    const { data, error } = useSWR('/latest', fetcher)
    const cat = ['47','2673']

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      
    return (
    <LatestNewContainer left_arrow={left_arrow}>    
        <SectionContainer>
            <h1 className="latest-heading">Latest</h1>
            <div className="featured-project-line"></div>
            <Slider  {...settings}>
                {data && data.filter((post)=> post.categories.includes(parseInt(cat)) ).map((post,index) => 
                    <Post key={index}>
                        <Image background={post._embedded['wp:featuredmedia'][0] && post._embedded['wp:featuredmedia'][0].media_details.sizes['tx-m-thumb'] ? post._embedded['wp:featuredmedia'][0].media_details.sizes['tx-m-thumb'].source_url :  post._embedded['wp:featuredmedia'][0].media_details.sizes['full'].source_url}></Image>
                        <Title dangerouslySetInnerHTML={{ __html:post.title.rendered}}></Title>
                        <Details>
                       
                            <Date> <Imge src={clock}></Imge>{post.date}</Date>
                            <Auth><Imge src={user}></Imge>{post.author == 1 && 'Admin'}Admin</Auth>
                        </Details>
                    </Post>
                )}
            </Slider>
        </SectionContainer>    
    </LatestNewContainer>
    )
}


export default Latestnews;

const LatestNewContainer = styled.div`

    background: #202741 0% 0% no-repeat padding-box;
    box-shadow: 0px -35px 99px #0000004A;
    color:#fff;
    .slick-slider{
        button {
            position:absolute;
            top:50%;
            &.slick-prev{
                background: url(${(props) => props.left_arrow})  0% 0% no-repeat padding-box;
                left: -140px;
                width: 120px;
                height: 108px;
                font-size: 0px;
                background-size: cover;
                cursor: pointer;
              
            }
            &.slick-next{
                background: url(${(props) => props.left_arrow})  0% 0% no-repeat padding-box;
                right: -140px;
                width: 120px;
                height: 108px;
                font-size: 0px;
                background-size: cover;
                cursor: pointer;
            }
        }
        .slick-list{
            div.slick-slide{
                padding:2% 28px 1.2% 30px;
            }
        }
    }
    h1{
        text-align: center;
    font-size: 85px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 6px;
    margin-top: 10%;
    }
    ul.slick-dots button{
        position: absolute;
        font-size: 0px;
        width: 20px;  
         height: 20px;
        border-radius: 100px;
        cursor: pointer;
    }
    ul.slick-dots li.slick-active button{
        opacity: 0.21;
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
             }
`
const Post = styled.div`
    background: #f9f9f9   0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 0px 0px 0px 30px;
`
const Image = styled.div`
    background: url(${(props) => props.background})  0% 0% no-repeat padding-box;
    height: 300px    ;
        width: 100%;
        background-size: cover;
        border-radius: 10px;
        margin-top: -50px;
`
const Title = styled.h3`
    text-align: left;
    font-size: 22px;
    letter-spacing: 0px;
    color: #1D253F;
    opacity: 1;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 20px 30px 20px 0px;
    font-weight: 500;
    overflow: hidden;
    line-height: 30px;
    `
const Details = styled.div`
    border-top: 1px solid #1d253f40;
    margin: 20px 30px 20px 0px;
    padding: 18px 0px;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-gap: 1%;
    :after{
        content: "";
        display: block;
        clear: both;

    }
    img{
        height: auto;
        width: auto;
        float: left;
        margin: 0px 10px 0px 0px;

    }


`
const Date = styled.div`
    color: #929292;
    font-size: 19px;
   
   


`
const Auth = styled.div`
    color: #929292;
    font-size: 19px;
   

`

const Imge = styled.img`
  

`
