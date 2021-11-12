import styled from 'styled-components'
import { useEffect,useState } from "react";
import { Link,NavLink,Redirect } from 'react-router-dom';
import SectionContainer from "../styles/section-container";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Select from 'react-select';

import { OverlayTrigger, Tooltip } from "react-bootstrap";
import projects09 from "../../assets/projects09.png";
import projects01 from "../../assets/projects01.png";
import projects02 from "../../assets/projects02.png";
import projects03 from "../../assets/projects03.png";
import projects04 from "../../assets/projects04.png";
import projects05 from "../../assets/projects05.png";
import projects06 from "../../assets/projects06.png";
import comingsoon from "../../assets/upcoming.png";
import shop from "../../assets/shop.png";
import aparments from "../../assets/apartments.png";
import offices from "../../assets/offices.png";
import plots from "../../assets/plots.png";
import houses from "../../assets/houses.png";
import penthouses from "../../assets/penthouses.png";
import ReactLoading from "react-loading";
import Cities from "./../../data/cities.json";
import Regions from "./../../data/regions.json";
import axios from "axios";


const Projects = (state) => {
  const [allType,setAllType] = useState(true);
  const [allReigons,setAllRegions] = useState(true);
  const [completed,setCompleted] = useState(false);
  const [upcoming,setUpcoming] = useState(false);
  const [hideFilter,setHideFilter] = useState(true);
  const [nearme,setNearme] = useState(false);
  const [category,setCategories] = useState([]);
  const [location,setLocation] = useState();
  const [filter,setFilter] = useState();
  const [redirect,setRedirect] = useState(false);
  const [sendRegion,setSendRegion] = useState(false);
  const [sendCity,setSendCity] = useState(false);
  const [data,setData] = useState();
  const [cities,setCities] = useState(Cities);
  const [currentLocation,setCurrentLocation] = useState({"key":0,"label":"All Cities","value":""})
  const [currentRegions,setCurrentRegions] = useState({"key":0,"label":"All Regions","value":""})

  useEffect(async ()=>{
    try {
     await axios.get('https://staging.starmarketingonline.com/wp-json/wp/v2/portf?_embed=true&per_page=100')
      .then(response => {
        setData(response.data)
      })
      setRedirect(false)
    } catch (e) {
        console.error(e);
    }
    const lock =  Regions.filter((loc,index)=>
      loc.value == state.match.params.region 
    )
    console.log(lock,'lock')
    lock.length != 0 && setAllRegions(false)
    setCurrentRegions(lock.length > 0 ? lock[0] : {"key":0,"label":"All Regions","value":""})
    
    lock && lock[0] &&
    lock[0].key != 0 ? 
      setCities( Cities.filter((city,index)=> 
        city.region != 0 
        ? city.region == lock[0].key : city
      ))
    : setCities( Cities )
    
    state.data &&  clearFilters()
    !state.data && window.scrollTo({top: 0,behavior: 'smooth'}); 
   


  },[])

  
  const region = state.match.params.region == 'other' ? '' : state.match.params.region
  const lowercasedFilter = typeof filter === 'string' && filter.toLowerCase();
  const serachFilter = data ? data.filter((post) =>  
  filter ? Object.keys(post).some(key =>
    post['title'].rendered.toLowerCase().includes(lowercasedFilter)
  ) : post
).filter((post)=> 
    
  post.acf && post.acf.filters && post.acf.filters.categories && 
  post.acf.filters.categories.filter(ck =>  category.includes(ck)).length > 0 ||  category.length == 0

)
.filter((post)=> post.acf && post.acf.filters && post.acf.filters.completed == completed)
.filter((post)=> post.acf && post.acf.filters && post.acf.filters.upcoming == upcoming || upcoming == false) : [];
  const FilterData = state.match.params.id ? serachFilter.filter((post) => 
  post.acf && post.acf.filters && post.acf.filters.city.toLowerCase() == state.match.params.id 
) : region ? serachFilter.filter((post) => 
    post.acf && post.acf.filters && post.acf.filters.region.toLowerCase() == region 
  )  : serachFilter;
 
  
  const clearFilters = () => {
    setAllType(true)
    setCompleted(false)
    setUpcoming(false)
    setNearme(false)
    setCategories([])
    setFilter()
    setLocation()
    setAllRegions(true)
    setRedirect(true)
    document.getElementById("searchfilter").reset();
    setCurrentLocation({"key":0,"label":"All Cities","value":""})
  }
  const onChangeLocation = (x) => {
    setCurrentLocation(x)
    setSendCity(true)
    setAllRegions(false)
  }
  const onChangeRegions = (x) => {
    
    x.key != 0 ? 
      setCities( Cities.filter((city,index)=> 
        city.region != 0 
        ? city.region == x.key : city
      ))
    : setCities( Cities )

    setCurrentRegions(x)
    setCurrentLocation({"key":0,"label":"All Cities","value":""})
    setSendRegion(true)
    setSendCity(false)
    setAllRegions(false)
  }
  const regionsFun =()=> {
    setRedirect(true)
    setCurrentRegions({"key":0,"label":"All Regions","value":""})
    setCurrentLocation({"key":0,"label":"All Cities","value":""})
    setAllRegions(true)
    // window.location.href="/projects"
  }
  
  return (
    <div style={{backgroundImage:`url("/assets/page_bg.png")`}}> 
      <Header />
      <Mainproject>
      <SectionContainer>
          <InnerBannerSection>
             <h1 style={{marginTop:'-40px'}}>Projects</h1>
          </InnerBannerSection> 
        </SectionContainer>
      {redirect && <Redirect strict to={"/projects/"} />} 
        {sendRegion && <Redirect to={"/projects/"+currentRegions.value} />}
        {sendCity && <Redirect to={"/projects/"+currentRegions.value+"/"+currentLocation.value} />}


        <ProjectHeadersection>
          <SectionContainer className="pb-0">
          <ProjectHeadersectionMain>
           <ProjectHeaderleft>
            <div className="form-group">
              <input type="checkbox" />
              <button className={allType && 'active'} onClick={()=>{
                setAllType(true)
                setCategories([])
              }}>all Types</button>
            </div>
            <div className="form-group">
              <input type="checkbox" />
              <button className={allReigons && 'active'} onClick={
                ()=>regionsFun()
              }>all Regions</button>
            </div>
            <div className="form-group">
              <input type="checkbox" />
              <button className={completed && 'active'} onClick={()=>{
                setCompleted(completed ? false:true)
                }}>Completed</button>
            </div>
            <div className="form-group">
              <input type="checkbox" />
              <button className={upcoming && 'active'} onClick={()=>{
                setUpcoming(upcoming ? false:true)
                }}>Upcoming Projects</button>
            </div>
                

            </ProjectHeaderleft>

            <ProjectHeaderRight>

            <ProjectSection>
               <ProjectSectionBoxes className={category.includes('shop')}  onClick={()=>{
                 setCategories(category.includes('shop') ? category.filter(itm => itm != "shop") : [...category, 'shop'])
                  setAllType(false)}}>
                  <Imge src={projects01}></Imge>
                  <button>Shop</button>
               </ProjectSectionBoxes>
               <ProjectSectionBoxes className={category.includes('apartments')}  onClick={()=>{
                 setCategories(category.includes('apartments') ? category.filter(itm => itm != "apartments") : [...category, 'apartments'])
                  setAllType(false)}}>
                  <Imge src={projects02}></Imge>
                  <button>Apartments</button>
               </ProjectSectionBoxes>
               <ProjectSectionBoxes  className={category.includes('offices')} onClick={()=>{
                 setCategories(category.includes('offices') ? category.filter(itm => itm != "offices") : [...category, 'offices'])
                  setAllType(false)}}>
                  <Imge src={projects03}></Imge>
                  <button>Offices</button>
               </ProjectSectionBoxes>
               <ProjectSectionBoxes  className={category.includes('houses')} onClick={()=>{
                 setCategories(category.includes('houses') ? category.filter(itm => itm != "houses") : [...category, 'houses'])
                  setAllType(false)}}>
                  <Imge src={projects04}></Imge>
                  <button>Houses</button>
               </ProjectSectionBoxes>
               <ProjectSectionBoxes  className={category.includes('plots')} onClick={()=>{
                 setCategories(category.includes('plots') ? category.filter(itm => itm != "plots") : [...category, 'plots'])
                  setAllType(false)}}>
                  <Imge src={projects05}></Imge>
                  <button >Plots</button>
               </ProjectSectionBoxes>
               <ProjectSectionBoxes className={category.includes('penthouses')} onClick={()=>{
                 setCategories(category.includes('penthouses') ? category.filter(itm => itm != "penthouses") : [...category, 'penthouses'])
                  setAllType(false)}}>
                  <Imge src={projects06}></Imge>
                  <button >Penthouses</button>
               </ProjectSectionBoxes>

            </ProjectSection>
              
            <ProjectSearch> 
              
            <div className="searchCity pr">
                <Select
                  onChange={(x)=>onChangeRegions(x)}
                  value={currentRegions}
                  options={Regions}        
                  placeholder="Type to Search..."
                  style={RegionDropdown}
                />
                </div>
                <div className={currentRegions.key == 0 ? "disable searchCity": "searchCity"}>
                <Select
                  onChange={(x)=>onChangeLocation(x)}
                  value={currentLocation}
                  options={cities}        
                  placeholder="Type to Search..."
                  style={RegionDropdown}
                />
                </div>
                <div className="searchKeyword">
                  <form  id="searchfilter">
                  <label for=""> <span>Project Name: </span>  
                    <input type='text' placeholder="Search Project" onChange={(e)=>setFilter(e.target.value)} />
                    <button > <i className="fa fa-search"></i></button>
                  </label>
                  </form>
                </div>
             </ProjectSearch> 
             
            </ProjectHeaderRight>
            </ProjectHeadersectionMain>
             {!allReigons ? 
              <Link style={{float:'right', marginLeft:'20px',font:'normal normal 300 18px/30px Poppins',color:'red', textDecoration:'none'}} to='/projects' onClick={()=>clearFilters()}>Clear Filters</Link> : 
              !allType  ? 
              <Link style={{float:'right', marginLeft:'20px',font:'normal normal 300 18px/30px Poppins',color:'red', textDecoration:'none'}} to='/projects' onClick={()=>clearFilters()}>Clear Filters</Link> : 
              completed  ?
              <Link style={{float:'right', marginLeft:'20px',font:'normal normal 300 18px/30px Poppins',color:'red', textDecoration:'none'}} to='/projects' onClick={()=>clearFilters()}>Clear Filters</Link>  :
              upcoming  && 
              <Link style={{float:'right', marginLeft:'20px',font:'normal normal 300 18px/30px Poppins',color:'red', textDecoration:'none'}} to='/projects' onClick={()=>clearFilters()}>Clear Filters</Link> 
              }
            </SectionContainer>
        </ProjectHeadersection>

        <ProjectHeadersectionB>
        <SectionContainer className="pt-0">
          {!data && <ReactLoading type={'bubbles'}  className="loading red" style={{margin:'0 auto',color:"#fff",height:'100vh',width:"80px"}} />}
           {FilterData.length > 0 && <h1 className="listing_heading">Found {FilterData.length} projects</h1>}
          <div className="listing">
          {FilterData.length > 0 ? FilterData.map((post,index)=> 
              <div className="listing_boxes" key={index}> 
              {post.acf.filters.upcoming &&
              <div className="upcoming"><img src={comingsoon} alt="" /></div>}
               <Link to={post.link.replace('https://staging.starmarketingonline.com','')}>
                <Image background={post._embedded['wp:featuredmedia'][0] && post._embedded['wp:featuredmedia'][0].media_details.sizes['tx-m-thumb'] ? post._embedded['wp:featuredmedia'][0].media_details.sizes['tx-m-thumb'].source_url :  post._embedded['wp:featuredmedia'][0].media_details.sizes['full'].source_url}></Image>
              </Link>
                <h2  dangerouslySetInnerHTML={{ __html:post.title.rendered}}></h2>

                <div className="listing_shop">
                  {post.acf.filters && post.acf.filters.categories &&
                  post.acf.filters.categories.map((cat,index)=>
                  <div className="listing_shop_box" key={index}>
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={<Tooltip id="button-tooltip-2">{cat}</Tooltip>}
                      >
                    <Imge src={
                      cat == 'shop' ? shop 
                      :  cat == 'apartments' ?  aparments : 
                       cat == 'houses' ?  houses : 
                      cat == 'offices' ? offices : 
                      cat == 'plots' ? plots : 
                      cat == 'penthouses' && penthouses
                      } alt={cat}></Imge>
                 </OverlayTrigger>
                    {/* <button>{cat}</button> */}
                  </div>
                  ) }
                </div>

                <div className="listing_shop secound">
                  <div className="listing_shop_box button">
                   <Link to={post.link.replace('https://staging.starmarketingonline.com','')}>Read more</Link>
                  </div>
                  {post.acf.filters && post.acf.filters.city &&
                  <div className="listing_shop_box location">
                    <Imge src={projects09}></Imge>
                    <button>{post.acf.filters.city}</button>
                  </div>
                  }
                </div>

              </div>
            ): <div className="notfounded">NOT FOUND</div>  }
          </div>
          </SectionContainer>
          </ProjectHeadersectionB>

   </Mainproject>
      <Footer />
    </div>
  );
};

export default Projects;
const Imge = styled.img`
  
`
const ProjectHeadersectionB = styled.div`
    background: #fff;
    .pt-0 {
      padding-top: 0px;
    }
    .listing {
      display: grid;
      grid-template-columns: 30% 30% 30%;
      justify-content: space-between;
      padding-top: 4%;
       
    @media only screen and (max-width: 1366px) {

      grid-template-columns: 48% 48%;
      }
      @media only screen and (max-width: 1024px) {
        grid-template-columns: 100%;
    
   }

      h2 {
        color: #000;s
        font-size: 30px;
        font-weight: 600;
        text-align: center;
        border-bottom: 3px dashed  #e3e3e3;
        padding: 0px 0px 16px 0px;
        margin-top: 40px;
        font-size: 25px;
    }
  }
  .listing_boxes {
      margin-bottom: 30%; 
      background: #F9F9F9;
      padding: 0px 20px;
      border-radius: 20px;
      position: relative;
      @media only screen and (max-width: 820px) {
        margin-bottom: 10%; 
      }
      @media only screen and (max-width: 480px) {
        padding: 0px 0px;
        margin-bottom: 20%;
        padding-bottom: 20px;
      }
  
  }
  .listing_shop {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 20px;
     button {
      background: none;
      color: #001439;
      font-size: 20px;
      margin: 0px 0px 0px 15px;
  }
}
.listing_shop_box {
  display: flex;
  @media only screen and (max-width: 480px) {
    justify-content: center;
    margin-top: 22px;
  }
}
.listing_shop_box.location img {
  height: fit-content;
  width: 26px;
  padding: 0px 0px 0px 0px;
}
.listing_shop_box.button a {
  background: #DB2D34;
  color: #fff;
  padding: 26px 36px;
  border-radius: 10px;
  text-decoration:none;
  width: -webkit-fill-available;
    text-align: center;
    margin: 0;
    @media only screen and (max-width: 480px) {
      padding: 18px 10px;

    }
}
.listing_shop.secound {
  grid-template-columns: 61% 34%;
  gap: 10px;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    grid-template-columns: 100%;
    display: contents;
  }
}
h1.listing_heading {
  color: #747474;
  font-size: 30px;
  font-weight: 300;
  padding: 50px 0px 50px 0px;
    clear: both;
    margin: 0;
    @media only screen and (max-width: 820px) {
      padding: 10px 0px 50px 0px;
    }
 }
}
.upcoming {
  position: absolute;
  right: 17px;
  top: -53px;}
`
const ProjectButtonSection = styled.div`
button {
  border: 1px solid #B5B5B5;
  border-radius: 10px;
  font-size: 24px;
  padding: 14px 56px;
    margin: 10px 20px;
  text-align: center;
  background: none;
  width: fit-content;
  cursor: pointer;
}
a {
  border: 1px solid #B5B5B5;
  border-radius: 10px;
  font-size: 24px;
  padding: 12px 46px;
    margin: 10px 20px;
  text-align: center;
  background: none;
  width: fit-content;
  cursor: pointer;
  text-decoration:none;
  color:#000;
  font-weight:500;
  &.active{
    color: #fff;
    background: #ff000a;
    border-color: #ff000a;
  }
  @media only screen and (max-width: 1366px) {
    display: inline-block;

  }

  @media only screen and (max-width: 1024px) {  
    display: inline-block;

  }
   

}

@media only screen and (max-width: 1024px) {
  br {
    display: none;
}

}
`
const ProjectHeadersection = styled.div`
background: #fff;
display: block;
`
const ProjectHeadersectionMain = styled.div`
display: grid;
grid-template-columns: 20% 78%;
grid-gap: 2%;
 
@media only screen and (max-width: 1024px) {
  grid-template-columns: 100%;

}
`
const ProjectHeaderleft = styled.div`
.form-group {
  margin-bottom: 30px;
  display: block;
    button {
      font-size: 25px;
      background: none;
      text-transform: capitalize;
      position: relative;
      cursor: pointer;
      @media only screen and (max-width: 820px) {
        font-size: 18px;
        line-height: 28px;
      }
      @media only screen and (max-width: 480px) {
        font-size: 14px;
      }
      
            :before {
              content: '';
              -webkit-appearance: none;
              background-color: transparent;
              border: 3px solid #ff000a;
              box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
              padding: 10px;
              display: inline-block;
              position: relative;
              vertical-align: middle;
              cursor: pointer;
              margin-right: 20px;
              margin-top: -3px;
              -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            @media only screen and (max-width: 480px) {
              margin-right: 8px;
              padding: 6px;
            }
          }
  
   }
      input {
        padding: 0;
        height: initial;
        width: initial;
        margin-bottom: 0;
        display: none;
        cursor: pointer;
             
    }
    .active:after {
      content: '';
      display: block;
      position: absolute;
      top: 6px;
      left: 10px;
      width: 6px;
      height: 14px;
      border: solid #ff000a;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      @media only screen and (max-width: 480px) {
        top: 5px;
            left: 7px;
            width: 4px;
            height: 6px;
      }
  }
  }
 
@media only screen and (max-width: 1024px) {
  grid-template-columns: 50% 50%;
    display: grid;

}
`
const ProjectHeaderRight = styled.div`
 
`
const ProjectSection = styled.div`
display: flex;
justify-content: space-between;
@media only screen and (max-width: 480px) {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-items: baseline;
}
 
`
const ProjectSectionBoxes = styled.div`
text-align: center;
border-radius: 10px;
cursor:pointer;
padding: 16px 23px 0;
@media only screen and (max-width: 480px) {
  padding: 16px 0px 0;
}
&.true{
  border: 3px solid #ff000a;
  padding: 13px 20px 0;
}
button {
  background: none;
  font-size: 20px;
  margin: 20px 0px;
  @media only screen and (max-width: 820px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
}
img {
  text-align: center;
  margin: 0 auto;
  display: block;
  @media only screen and (max-width: 820px) {
    width: 42px;
  }
  @media only screen and (max-width: 480px) {
    width: 42px;
  }
}
 
`
const ProjectSearch = styled.div`
    position: relative;
    margin: 26px 0px 0px 0px;
    display:flex;
    gap: 14px;
    @media only screen and (max-width: 480px) {
      display: contents;
    }
        label {
          border: 1px solid #000;
          width: 100%;
          padding: 8px 35px;
          display: block;
          margin-left: 0px;
          border-radius: 0;
          color: #333;
          font-size: 16px;
          display: flex;
          @media only screen and (max-width: 480px) {
            padding: 8px 18px;
          }
          span{
            padding-top:7px;
          }
          button {
            background: red !important;
            color: #fff;
            position: absolute;
            top: 0;
            width: 53px;
            right: 0;
            height: 100%;
            font-size: 21px;
            padding: 12px 12px 12px 15px;
            border: 1px solid #000;
          }
          input{
            font-size: 16px;
            padding: 11px;
            margin-left: 10px;
            width: 70%;
            border: 0;
            outline: none;
            @media only screen and (max-width: 820px) {
              width: 50%;
            }
          }
      }
    
    .searchCity {
        width: 25%;
        @media only screen and (max-width: 480px) {
          width: 100%;
          margin-bottom: 10px;
        }
    }
    
    .searchKeyword {
        width: 50%;
        @media only screen and (max-width: 480px) {
          width: 100%;
          position: relative;
        }
    }
    

  .searchCity >div {
    border: 1px solid #000!important;
    outline: none;
  }

  .searchCity > div > div {
    border: 0;
    color: #000 !important;
    outline: none;
    padding: 8px 10px;
    text-transform: capitalize;


  }

  .searchCity >div > div > span {
    background: red;
    display: block;
  }

  .searchCity > div > div svg {
    background: red !important;
    color: #fff;
    position: absolute;
    top: 0;
    width: 53px;
    right: 0;
    height: 100%;
    padding: 12px;
    border-left: 1px solid #000;
  }
`
const Mainproject = styled.div`
  color:#fff;
  .pb-0 {
    padding-bottom: 0px;
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
  }
  h1:after{
    content: "";
    height: 10px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 10%;
    bottom: -16px;
    border-radius: 107px;
    background: #fe5656e3 0% 0% no-repeat padding-box;
  }
  h1:before{
    content: "";
    background: url(/assets/whiteImage.png) 0% 0% no-repeat padding-box;
    width: 393px;
    height: 180px;
    display: table;
    margin: 0 auto;
    position: absolute;
    right: 0;
    left: 0;
    top: -59px;
    text-align: center; 
    background-size: cover;
    @media only screen and (max-width: 480px) {

      width: 100%;


  }    
    `
const Image = styled.div`
    background: url(${(props) => props.background})  center center no-repeat padding-box;
    height: 311px;
    width: 100%;
    -webkit-background-size: cover;
    background-size: contain;
    border-radius: 20px;
    
    border:2px solid #EDEDED;
    margin-top: -40px;

   :hover{
    box-shadow: 0px 25px 31px #00000045;
   }
    
@media only screen and (max-width: 1366px) {
  background-size: cover;
}
@media only screen and (max-width: 1024px) {
  background-size: cover;}
`




const RegionDropdown = {
  marginTop:'20px',
  width: '350px',
  height: '55px',
  background: '#FFFFFF 0% 0% no-repeat padding-box',
  border: '1px solid #FFFFFF',
  borderRadius: '10px',
  opacity: '1',
  fontSize:'22px',
  padding:'12px'
};