import styled from 'styled-components'
import { useEffect,useState } from "react";
import useSWR from 'swr'
import axios from "axios";
import SectionContainer from "../styles/section-container";
import latest_icon03 from "../../assets/latest_icon03.png";
import latest_icon02 from "../../assets/latest_icon02.png";
import clock from "../../assets/clock.png";
import latest_icon05 from "../../assets/latest_icon05.png";
import latest_icon01 from "../../assets/latest_icon01.png";
import latest_icon06 from "../../assets/latest_icon06.png";
import latest_icon07 from "../../assets/latest_icon07.png";
import latest_icon08 from "../../assets/latest_icon08.png";
import Moment from "react-moment";
import ReactLoading from "react-loading";
import back from "../../assets/back.png";
import LeftPag from "../../assets/left_pag.png";
import RightPag from "../../assets/right_pag.png";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce'

import {BiChevronLeftCircle, BiChevronRightCircle} from 'react-icons/bi';
import { Prev } from 'react-bootstrap/esm/PageItem';


const  fetcher =  async (url) => await fetch(url).then((res) => res.json());

const Blog = (state) => {
    const [activeContent,setActiveContent] = useState(false);
    const [content,setContent] = useState();
    const [currentPage,setCurrentPage] = useState(1);
    const [todosPerPage,setTodosPerPage] = useState(3);
    const [filter,setFilter] = useState('');
    const [next,setNext] = useState(1);
    const [counter,setCounter] = useState();
    
    const [filterCategory,setFilterCategory] = useState([47,2673]);
    const { data, error } = useSWR('https://staging.starmarketingonline.com/wp-json/wp/v2/posts?categories=47,2673&per_page=100&_embed=true', fetcher)
    

    const lowercasedFilter = typeof filter === 'string' && filter.toLowerCase();
    const filteredData = data ? data.filter(item => {
      return Object.keys(item).some(key =>
       item['title'].rendered.toLowerCase().includes(lowercasedFilter)
      );
    }).filter(post=> 
       filterCategory.includes(post.categories[0])
        ): [];

    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = filteredData ? filteredData.slice(indexOfFirstTodo, indexOfLastTodo) : [];
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredData.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            className={currentPage == number && "active"}
            onClick={(event)=>setCurrentPage(event.target.id)}
          >
            {number}
          </li>
        );
      });

    const selectCategories = (e) =>{
        const value = parseInt(e.target.value);
        const arr = filterCategory.includes(value) 
        ? filterCategory.filter(i => i !== value) // remove item
        : [ ...filterCategory,value ] // add item
        setFilterCategory(arr)
    }  

    const viewPost = (id) => {
      axios.get('https://staging.starmarketingonline.com/wp-json/wp/v2/views/'+id)
    }

    useEffect(()=>{
      window.scrollTo({top: 250,behavior: 'smooth'}); 
    },[renderPageNumbers])

    return (
        <div>
        <SectionContainer>
          <InnerBannerSection>
             <h1 className="featured-heading banners" style={{marginTop:'-40px'}}><Bounce top cascade>Latest</Bounce> </h1>
          </InnerBannerSection> 
        
        </SectionContainer>  
        
        <LatestSearchsection >
          <SectionContainer style={{paddingTop:'80px'}}>
          <LatestSearchsectionMain>
            <LatestSearchsectionLfet>
                <div className="search">
                   <input type="text" className="searchTerm" placeholder="Search Here" onChange={(x)=>setFilter(x.target.value)}/>
                    <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                    </button>
                </div>
            </LatestSearchsectionLfet>


            
            <LatestSearchsectionRight>
                
                <label className="green" >
                   <Imge src={latest_icon02}></Imge>
                   Events<input type="checkbox" name="filter" value="47" defaultChecked={filterCategory.includes(47) && 'checked'} onClick={(e)=> selectCategories(e)}/> 
                </label>
                <label className="red" >
                   <Imge src={latest_icon03}></Imge>
                   Announcement<input type="checkbox" name="filter"  value="2673" defaultChecked={filterCategory.includes(2673) && 'checked'} onClick={(e)=> selectCategories(e)}/> 
                </label>
               
                
            </LatestSearchsectionRight>


            </LatestSearchsectionMain>


            {currentTodos.length > 0 ? currentTodos.map((post,index)=>
                
                <LatestBoxes key={index} onClick={()=> viewPost(post.id)}>
                  
                 {console.log(post)}
                 <Fade left cascade><LatestBoxesImg>
                        {post.categories[0] == 47 ? 
                            <tag><Imge src={latest_icon01}></Imge>Events</tag> : <tag className="red"><Imge src={latest_icon08}></Imge>Announcements</tag>
                         }
                        <Imge onClick={()=>{
                            setActiveContent(true)
                            setContent(index)
                        }} className="full_img" src={post._embedded['wp:featuredmedia'][0].media_details.sizes['tx-m-thumb'].source_url} width="100%"></Imge>
                        <Fade right cascade><text>
                        <date><Imge src={clock}></Imge> <Moment  format="MMM DD, YYYY">{post.date}</Moment></date>
                        <views><Imge src={latest_icon05}></Imge>{post['post-meta-fields'].post_views_count[0]} Views</views>
                        <user><Imge src={latest_icon06}></Imge> {
                            post.author == 789 ? "Aamir Saeeduddin" :
                            post.author == 788 ? "Arif Mustafa" :
                            post.author == 787 ? "Haris Sonija" :
                            post.author == 1 && "Star Marketing" 
                            
                        }</user>
                        </text></Fade>
                    </LatestBoxesImg></Fade>
        
                    <Fade right cascade><LatestBoxesText>
                        <h1 dangerouslySetInnerHTML={{ __html:post.title.rendered}}></h1>
                        <p  dangerouslySetInnerHTML={{ __html:post.excerpt.rendered}}></p>
                        <button onClick={()=>{
                            setActiveContent(true)
                            setContent(index)
                        }}>
                        Read more
                        <Imge src={latest_icon07}></Imge>
                        </button>
                    </LatestBoxesText></Fade>
                 </LatestBoxes>
            ) : <ReactLoading type={'bubbles'}  className="loading red" style={{margin:'0 auto',color:"#fff",height:'100vh',width:"80px"}} />}
            <div className="pagi">
            <ul className="pagination">{renderPageNumbers}</ul>
                  <img src={LeftPag} className="left" onClick={()=> setCurrentPage(currentPage != 1 ?  parseInt(currentPage) - 1  : 1)} />
                     <img src={RightPag} className="right" onClick={()=> setCurrentPage(currentPage < pageNumbers.length ?  parseInt(currentPage) + 1 : pageNumbers.length)}  />
           </div>
            {/* <Button style={{float:'left'}}>
     <BiChevronLeftCircle 
     />
    </Button>  
            <Button style={{float:'right'}}>
     <BiChevronRightCircle
     />
    </Button> */}
          </SectionContainer>
        </LatestSearchsection>
        
        <LatestBoxesSlides className={activeContent && 'active'}>
            <div className="projectContent ">
            
                
                {currentTodos.length > 0 && currentTodos.filter((post,index)=> 
                    index == content
                  ).map((post,index)=>
                   post.categories[0] == 47 ? 
                  <>
                           <Back bg={back} onClick={()=>setActiveContent(false)}></Back>
                           {post.acf ? post.acf.video_url && 
                            <iframe width="560" height="315" src={post.acf.video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" height="450" allowfullscreen width="100%"></iframe>
                        : 
                        <Imge className="full_img" src={post._embedded['wp:featuredmedia'][0].source_url} width="100%"></Imge> }
                        <div className="popupheadermain">
                        
                            <tag><Imge src={latest_icon01}></Imge>Events</tag>
                      
                        <text>
                        <date><Imge src={clock}></Imge> <Moment  format="MMM DD, YYYY">{post.date}</Moment></date>
                        <views><Imge src={latest_icon05}></Imge>{post['post-meta-fields'].post_views_count[0]} Views</views>
                        <user><Imge src={latest_icon06}></Imge> {
                            post.author == 789 ? "Aamir Saeeduddin" :
                            post.author == 788 ? "Arif Mustafa" :
                            post.author == 787 ? "Haris Sonija" :
                            post.author == 1 && "Star Marketing" 
                            
                        }</user>
                        </text> 
                        </div>
                  
                  <h2 className="popupheadings" dangerouslySetInnerHTML={{ __html:post.title.rendered}}></h2>
                   <div className="content"  dangerouslySetInnerHTML={{ __html:post.content.rendered}}></div>
                   </>
                     : 
                     <div >
                        <Back  bg={back} onClick={()=>setActiveContent(false)}></Back>

                        <tag className="red secound"><Imge src={latest_icon08}></Imge>Announcements</tag>
                        <h2 className="popupheadings" dangerouslySetInnerHTML={{ __html:post.title.rendered}}></h2>

                        <Imge className="full_img secound" src={post._embedded['wp:featuredmedia'][0].source_url} width="100%"></Imge>
                        <div className="popupheadermain secound">
                      
                        <text>
                        <date><Imge src={clock}></Imge> <Moment  format="MMM DD, YYYY">{post.date}</Moment></date>
                        <views><Imge src={latest_icon05}></Imge>{post['post-meta-fields'].post_views_count[0]} Views</views>
                        <user><Imge src={latest_icon06}></Imge> {
                            post.author == 789 ? "Aamir Saeeduddin" :
                            post.author == 788 ? "Arif Mustafa" :
                            post.author == 787 ? "Haris Sonija" :
                            post.author == 1 && "Star Marketing" 
                            
                        }</user>
                        </text>
                        </div>
                   </div>
                )}
            </div>
        </LatestBoxesSlides>

    </div>

    )
}


export default Blog;


const  htmlDecode = (content) => {
    let e = document.createElement('div');
    e.innerHTML = content;
    return e.innerHTML;
  }
  


const LatestBoxesImg = styled.div`
position: relative;
height: fit-content;
 img{
    border-radius: 24px;
    cursor: pointer;
 }
 tag {
    background: #58AF78;
    width: fit-content;
    display: flex;
    font-size: 22px;
    color: #fff;
    padding: 12px 30px 12px 50px;
    border-radius: 14px;
    box-shadow: 0px 12px 13px #00000029;
    position: absolute;
    left: 0px;
    top: -30px;
    @media only screen and (max-width: 480px) {
    
      font-size: 14px;
    }
}
    tag img {
        position: absolute;
        left: -14px;
        top: 0px;
        @media only screen and (max-width: 480px) {
          left: -14px;
              top: 0px;
              width: 44px;
        }
     }
     .red {
        background: #db2d34;
        @media only screen and (max-width: 480px) {
          font-size: 14px;
          padding: 12px 16px 12px 34px;
        }
    }
     text {
        background: #001439f2  0% 0% no-repeat padding-box;
        border-radius: 0 ;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        color: #fff;
        display: grid;
        grid-template-columns: 59% 35%;
        padding: 20px 30px;
        font-size: 16px;
        line-height: 36px;
        gap: 6%;
        border-bottom: 15px solid #cccfe5;
        letter-spacing: 1px;
        @media only screen and (max-width: 480px) {
          grid-template-columns: 100%;
          padding: 10px 10px;
          font-size: 12px;
          line-height: 21px;
          }
         img {
          margin-right: 10px;
          @media only screen and (max-width: 480px) {
            width: 16px;
            }
        }
        user {
            margin: 10px 0px ;
            display: flex;
            align-items: center;
            @media only screen and (max-width: 480px) {
              margin: 0px 0px;
              }
        }
        views {
          display: flex;
          align-items: center;
      }
      date {
        display: flex;
        align-items: center;
    }
        img.full_img {
            border-top: 6px solid #cccfe5;
        }
     
    }

`
const LatestBoxesText = styled.div`
 h1 {
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-top: 0px;
    margin-bottom: 35px;
    text-transform: uppercase;
    @media only screen and (max-width: 480px) {
      font-size: 20px;
      margin: 10px 0px;
    }
}
 p {
    font-size: 18px;
    font-weight: 300;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    overflow: hidden;
    -webkit-box-orient: vertical;
    letter-spacing: 1px;
    margin-bottom: 40px;
    @media only screen and (max-width: 480px) {
      font-size: 14px;
    }
}
 button {
    background: #DB2D34;
    font-size: 16px;
    color: #fff;
    padding:24px 20px;
    border-radius: 3px;
    cursor: pointer;
    letter-spacing: 1px;
    @media only screen and (max-width: 820px) {
      font-size: 16px;
      padding: 20px 20px;
    }
    @media only screen and (max-width: 480px) {
      font-size: 14px;
      padding: 15px 20px;
    }
    img {
        float: right;
        margin: 4px 0px 0px 10px;
            width: 28px;
        @media only screen and (max-width: 820px) {
         
              width: 30px;
        }
        @media only screen and (max-width: 480px) {
          margin: 4px 0px 0px 9px;
              width: 26px;
        }
    }  
}


`
const LatestBoxes = styled.div`
display: grid;
grid-template-columns: 40% 54%;
gap: 6%;
margin: 10% 0px;


@media (max-width: 820px) {
    grid-template-columns:100%;
    margin:10px 0px 80px;
    gap:20px;
 
        user{
            margin:0px;
        }

    }
    p{ margin-bottom:10px;}
    ul.pagination li{
        grid-template-columns: repeat( auto-fit, minmax(35px, 1fr) );
       
       
    }
   
    ul.pagination:before,ul.pagination:after{
        content:'';
        clear:both;
        display:block
    }
    
  }
`






const InnerBannerSection = styled.div`
h1{
    position: relative;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
    color: #fff;
    font: normal normal 900 71px/111px 'Poppins', sans-serif;
    @media only screen and (max-width: 480px) {
      font-size: 40px !important;
      line-height: 36px !important;
      margin-top: 10px!important;
      }
  }
  h1:after{
    content: "";
    height: 10px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 5%;
    bottom: 8px;
    border-radius: 107px;
    background: #fe5656e3 0% 0% no-repeat padding-box;
    @media only screen and (max-width: 480px) {
      width: 10%;
      bottom: -16px;
      height: 7px;

    }

  }
  h1:before{
    content: "";
    background: url(./assets/whiteImage.png) 0% 0% no-repeat padding-box;
    width: 284px;
    height: 150px;
    display: table;
    margin: 0 auto;
    position: absolute;
    right: 0;
    left: 0;
    top: -13px;
    text-align: center;
    background-size: cover;
    @media only screen and (max-width: 820px) {
      width: 300px;
      height: 130px;
      top: 10px;
      }
    @media only screen and (max-width: 480px) {

      width: 100%;
      height: 50px;
          top: -10px;


  } 


  }    
    `

const LatestSearchsection = styled.div`
background: #f3f3f3;
display: block;

`
const LatestSearchsectionLfet = styled.div`
.search {
    position: relative;
     input {
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 5px 8px #00000029;
        border-radius: 49px;
        width: 100%;
        border: 0px;
        padding: 28px 60px;
        font-size: 26px;
        letter-spacing: 1px;
        @media only screen and (max-width: 480px) {
          padding: 20px 20px;
          font-size: 16px;
          border-radius: 10px;
        }
        :focus {
            outline: none;
        }
    }
     button {
        position: absolute;
        right: 45px ;
        font-size: 36px;
        background: none;
        top: 20px    ;
        cursor: pointer;
        @media only screen and (max-width: 480px) {
          right: 21px;
              font-size: 22px;
              top: 16px;
        }
    }
}

`
const LatestSearchsectionRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:20px;
    @media only screen and (max-width: 480px) {
      display: contents;
    }
     label {
        background: #000;
        margin: 0px 20px;
        color: #fff;
        font-size: 22px;
        border-radius: 15px;
        padding: 14px 20px;
        letter-spacing: 1px;
        box-shadow: 0px 3px 3px #00000029;
        cursor: pointer;
        @media only screen and (max-width: 820px) {
          margin-bottom: 40px;
        }
        img {
            float: left;
           
            margin: 6px 34px 0px 0px;
        }
        input {
            background: #fff;
            border: 0px;
            width: 25px;
            height: 19px;
            margin: 0px  0px 0px 25px;
            @media only screen and (max-width: 480px) {
              position: absolute;
              right: 10px;
              top: 20px;

            }
        }
    }
         label.green {
            background: #58AF78;
            @media only screen and (max-width: 480px) {
              width: 100%;
              margin: 15px 0px;
              border-radius: 10px; 
              position: relative; 
              font-size: 20px;       
            }
        }
         label.red {
            background: #FE5656;
            @media only screen and (max-width: 480px) {
              width: 100%;
              margin: 0px 0px 60px 0px;
              border-radius: 10px;   
              position: relative;   
              font-size: 20px;   
            }
        }
    

`
const LatestSearchsectionMain = styled.div`
    display: grid;
    grid-template-columns: 40% 46%;
    grid-gap: 14%;
    
  @media only screen and (max-width: 1366px) {
    grid-template-columns: 36% 50%;

  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 100%;
    grid-gap: 2%;
     label img {
      float: left;
      margin: 6px 11px 0px 0px  ;
  }
 

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
    width: 70%;
    position: fixed;
    right: -2000px;
    padding: 0px;
    height: 90vh;
    overflow: scroll;
    top: 6%;
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
      @media only screen and (max-width: 480px) {
        padding: 46px 0px 40px 0px;
        font-size: 24px;
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
      padding: 10px 10px;
    }
    img {
      width: 100%;
      margin-bottom: 10px;
      border-radius: 8px;
      height: auto;
  }
  figure {
    margin: 0px;
}

}
.popupheadermain {
  display: grid;
  grid-template-columns: 20% 70%;
  gap: 10%;
  width: 90%;
  margin: 0 auto;
  padding: 30px 0px;
  margin-top: 5%;
  @media only screen and (max-width: 480px) {
    grid-template-columns: 90%;
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
      left: 20px;
      top: 20px;
      }
`



const Button = styled.div`
   margin-top:-58px;
   height: 30px;
   font-size: 5rem;
   z-index: 1;
   cursor: pointer;
   color: #000000;
`