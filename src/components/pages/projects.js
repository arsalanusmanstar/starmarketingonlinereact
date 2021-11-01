import styled from 'styled-components'
import { useEffect,useState } from "react";
import { Link,NavLink } from 'react-router-dom';
import SectionContainer from "../styles/section-container";
import Header from "../../components/header";
import Footer from "../../components/footer";

import projects09 from "../../assets/projects09.png";
import projects01 from "../../assets/projects01.png";
import projects02 from "../../assets/projects02.png";
import projects03 from "../../assets/projects03.png";
import projects04 from "../../assets/projects04.png";
import projects05 from "../../assets/projects05.png";
import projects06 from "../../assets/projects06.png";
import shop from "../../assets/shop.png";
import aparments from "../../assets/apartments.png";
import offices from "../../assets/offices.png";
import plots from "../../assets/plots.png";
import penthouses from "../../assets/penthouses.png";
import ReactLoading from "react-loading";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Projects = (state) => {
  const [allType,setAllType] = useState(true);
  const [allReigons,setAllRegions] = useState(true);
  const [completed,setCompleted] = useState(false);
  const [hideFilter,setHideFilter] = useState(true);
  const [nearme,setNearme] = useState(false);
  const [category,setCategories] = useState();
  const [location,setLocation] = useState();
  const [filter,setFilter] = useState();
  
  const [data,setData] = useState(state.data);
  
  // useEffect(()=>{
  //   axios.get('/wp-json/wp/v2/portf?_embed=true&per_page=100')
  //     .then(response => {
  //       setData(response.data)
  //     })
  // },[])

  console.log(state,'projectpage')
  const lowercasedFilter = typeof filter === 'string' && filter.toLowerCase();
  const serachFilter = data ? data.filter((post) =>  
  filter ? Object.keys(post).some(key =>
    post['title'].rendered.toLowerCase().includes(lowercasedFilter)
  ) : post
).filter((post)=> post.acf && post.acf.filters && post.acf.filters.categories && post.acf.filters.categories.includes(category) ||  category == null  )
.filter((post)=> post.acf && post.acf.filters && post.acf.filters.completed == completed || completed == false) : [];
  const FilterData = state.match.params.id ? serachFilter.filter((post) => 
  post.acf && post.acf.filters && post.acf.filters.city.toLowerCase() == state.match.params.id 
) : state.match.params.city ? serachFilter.filter((post) => 
    post.acf && post.acf.filters && post.acf.filters.city.toLowerCase() == state.match.params.city 
  )  : serachFilter;
 

  const clearFilters = () => {
    setAllType(true)
    setAllRegions(true)
    setCompleted(false)
    setNearme(false)
    setCategories()
    setFilter()
    setLocation()
  }
  
  return (
    <div style={{backgroundImage:`url("/assets/page_bg.png")`}}> 
      <Header />
      <Mainproject>
      <SectionContainer>
          <InnerBannerSection>
             <h1>Projects</h1>
          </InnerBannerSection> 
        </SectionContainer>


        <ProjectHeadersection>
          <SectionContainer className="pb-0">
          <ProjectHeadersectionMain>
           <ProjectHeaderleft>
            <div className="form-group">
              <input type="checkbox" />
              <button className={allType && 'active'} onClick={()=>{
                setAllType(true)
                setCategories()
              }}>all Types</button>
            </div>
            <div className="form-group">
              <input type="checkbox" />
              <button className={allReigons && 'active'} onClick={()=>setAllRegions(true)}>all Regions</button>
            </div>
            <div className="form-group">
              <input type="checkbox" />
              <button className={completed && 'active'} onClick={()=>{
                setCompleted(completed ? false:true)
                }}>Completed</button>
            </div>
            {/* <div className="form-group">
              <input type="checkbox" />
              <button className={nearme && 'active'} onClick={()=>{
                setNearme(nearme ? false:true)
                }}>Project near me</button>
            </div> */}
           <br />
           <br />
                

            </ProjectHeaderleft>

            <ProjectHeaderRight>

            <ProjectSection>
               <ProjectSectionBoxes onClick={()=>
                  {setCategories('shop')
                  setAllType(false)}}>
                  <Imge src={projects01}></Imge>
                  <button>Shop</button>
               </ProjectSectionBoxes>
               <ProjectSectionBoxes onClick={()=>{
                 setCategories('apartments')
                  setAllType(false)}}>
                  <Imge src={projects02}></Imge>
                  <button>Apartments</button>
               </ProjectSectionBoxes>
               <ProjectSectionBoxes onClick={()=>{
                 setCategories('offices')
                  setAllType(false)}}>
                  <Imge src={projects03}></Imge>
                  <button>Offices</button>
               </ProjectSectionBoxes>
               <ProjectSectionBoxes onClick={()=>{
                 setCategories('houses')
                  setAllType(false)}}>
                  <Imge src={projects04}></Imge>
                  <button>Houses</button>
               </ProjectSectionBoxes>
               <ProjectSectionBoxes onClick={()=>{
                 setCategories('plots')
                  setAllType(false)}}>
                  <Imge src={projects05}></Imge>
                  <button >Plots</button>
               </ProjectSectionBoxes>
               <ProjectSectionBoxes onClick={()=>{
                 setCategories('penthouses')
                  setAllType(false)}}>
                  <Imge src={projects06}></Imge>
                  <button >Penthouses</button>
               </ProjectSectionBoxes>

            </ProjectSection>
              
            <ProjectSearch> 
                <input type='text' placeholder="Search Project |"  onChange={(e)=>setFilter(e.target.value)} />
                <button onClick={()=>setLocation('Multan')}> <i className="fa fa-search"></i></button>
             </ProjectSearch> 
             
            </ProjectHeaderRight>
            </ProjectHeadersectionMain>
            <br/>
            {hideFilter &&
            <ProjectButtonSection> 
              <NavLink to="/projects/karachi" onClick={()=>setAllRegions(false)}>Karachi</NavLink>
              <NavLink to="/projects/hyderabad" onClick={()=>setAllRegions(false)}>Hyderabad</NavLink>
              <NavLink to="/projects/lahore" onClick={()=>setAllRegions(false)}>Lahore</NavLink>
              <NavLink to="/projects/islamabad" onClick={()=>setAllRegions(false)}>Islamabad</NavLink>
              <NavLink to="/projects/faisalabad" onClick={()=>setAllRegions(false)}>Faisalabad</NavLink>
            
              
              <br/><br/><br/>
              <NavLink to="/projects/multan" onClick={()=>setAllRegions(false)}>Multan</NavLink>
              <NavLink to="/projects/kpk" onClick={()=>setAllRegions(false)}>KPK</NavLink>
              <NavLink to="/projects/mardan" onClick={()=>setAllRegions(false)}>Mardan</NavLink>
              <NavLink to="/projects/murree" onClick={()=>setAllRegions(false)}>Murree</NavLink>
              <NavLink to="/projects/sialkot" onClick={()=>setAllRegions(false)}>Sialkot</NavLink>
              <NavLink to="/projects/kalam" onClick={()=>setAllRegions(false)}>Kalam</NavLink>
             
           </ProjectButtonSection>
           }
           <br/>
             {!allReigons ? <Link style={{float:'right',font:'normal normal 300 18px/30px Poppins',color:'#0B52DF', textDecoration:'none'}} to='/projects' onClick={()=>clearFilters()}>Clear Filters</Link> : !allType  && <Link to='/projects' onClick={()=>clearFilters()}>Clear Filters</Link> }
           <button style={{float:'right', marginRight:'30px', cursor:'pointer',font:'normal normal 300 18px/30px Poppins',color:'#0B52DF', background:'transparent'}}  onClick={()=>setHideFilter(hideFilter ? false:true)}> {hideFilter ? "Hide":"Show" } Filters</button>
            </SectionContainer>
        </ProjectHeadersection>

        <ProjectHeadersectionB>
        <SectionContainer className="pt-0">
           {FilterData.length > 0 && <h1 className="listing_heading">Found {FilterData.length} projects</h1>}
          <div className="listing">
          {FilterData.length > 0 ? FilterData.map((post,index)=> 
              <div className="listing_boxes" key={index}> 
              <Image background={post._embedded['wp:featuredmedia'][0] && post._embedded['wp:featuredmedia'][0].media_details.sizes['tx-m-thumb'] ? post._embedded['wp:featuredmedia'][0].media_details.sizes['tx-m-thumb'].source_url :  post._embedded['wp:featuredmedia'][0].media_details.sizes['full'].source_url}></Image>
                <h2  dangerouslySetInnerHTML={{ __html:post.title.rendered}}></h2>

                <div className="listing_shop">
                  {post.acf.filters && post.acf.filters.categories &&
                  post.acf.filters.categories.map((cat,index)=>
                  <div className="listing_shop_box" key={index}>
                    <Imge src={
                      cat == 'shop' ? shop 
                      :  cat == 'apartments' ? 
                      aparments : cat == 'offices' ? offices : 
                      cat == 'plots' ? plots : 
                      cat == 'penthouses' && penthouses
                      }></Imge>
                    {/* <button>{cat}</button> */}
                  </div>
                  ) }
                </div>

                <div className="listing_shop secound">
                  <div className="listing_shop_box button">
                   <Link to={post.link.replace('https://starmarketingonline.com','')}>Read more</Link>
                  </div>
                  {post.acf.filters && post.acf.filters.city &&
                  <div className="listing_shop_box location">
                    <Imge src={projects09}></Imge>
                    <button>{post.acf.filters.city}</button>
                  </div>
                  }
                </div>

              </div>
            ): <ReactLoading type={'bubbles'}  className="loading red" style={{margin:'0 auto',color:"#fff",height:'100vh',width:"80px"}} /> }
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
      h2 {
        color: #000;
        font-size: 30px;
        font-weight: 600;
        text-align: center;
        border-bottom: 3px dashed  #e3e3e3;
        padding: 0px 0px 16px 0px;
        margin-top: 40px;
    }
  }
  .listing_boxes {
      margin-bottom: 30%; 
      background: #F9F9F9;
      padding: 0px 20px;
      border-radius: 20px;
  
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
}
.listing_shop.secound {
  grid-template-columns: 61% 34%;
  gap: 10px;
  justify-content: space-between;
}
h1.listing_heading {
  color: #747474;
  font-size: 30px;
  font-weight: 300;
  padding: 50px 0px 50px 0px;
    clear: both;
    margin: 0;
 }
}
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
  }
  }
 
`
const ProjectHeaderRight = styled.div`
 
`
const ProjectSection = styled.div`
display: flex;
justify-content: space-between;
 
`
const ProjectSectionBoxes = styled.div`
text-align: center;
button {
  background: none;
  font-size: 20px;
  margin: 20px 0px;
}
img {
  text-align: center;
  margin: 0 auto;
  display: block;
}
 
`
const ProjectSearch = styled.div`
position: relative;
margin: 26px 0px 0px 0px;
input {
  border: 1px solid #9f9f9f;
  width: 100%;
  font-size: 22px;
  padding: 18px 36px;
  border-radius: 10px;
  :focus {
    outline: none;
}
}
button {
  position: absolute;
  right: 35px;
  top: 16px;
  background: none;
  font-size: 27px;
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
  }    
    `
const Image = styled.div`
    background: url(${(props) => props.background})  0% 0% no-repeat padding-box;
    height: 340px;
    width: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    border-radius: 20px;
    box-shadow: 0px 25px 31px #00000045;
    margin-top: -40px;
`