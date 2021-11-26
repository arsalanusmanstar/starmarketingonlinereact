import styled from 'styled-components'
import { useState, useRef, useContext } from "react";
import Navigation from "./navigation/navigation";
import MobileNavigation from "./navigation/mobilenavigation";
import { Link } from 'react-router-dom';
import {  Logo, DownArrow } from "./icons";
import Sticky from 'react-sticky-el';
import LightSpeed from 'react-reveal/LightSpeed';
import Slide from 'react-reveal/Slide';
import { UserContext } from './elements/UserContext';

const Header = ({params,data}) => {
  const input1 = useRef(null);
  const [projects,setProjects] = useContext(UserContext);
  const [filter,setFilter] = useState('');
  const [active,setActive] = useState(false);

  const lowercasedFilter = typeof filter === 'string' && filter.toLowerCase();
  const filteredData = projects && projects.filter(item => {
    const index = lowercasedFilter.split('');
    if(index.length > 2)
    return Object.keys(item).some(key =>
     item['title'].rendered.toLowerCase().includes(lowercasedFilter)
    );
  })

  const handleClick1 = () => {

    setActive(active ? false:true)
    input1.current.focus();
  };

  return (
    <StickyUpdate style={{transform:'inherit !important'}}>
     <PageHeader  id="site-header">
      <HeaderInner  className="Sticky_p">
        <TitleWrapper>
          {/* Search button on mobile */}
          {/* {state.theme.showSearchInHeader && <MobileSearchButton />} */}
          {/* Heading and Description of the site */}
          <TitleGroup>
            <SiteTitle>
              <LightSpeed left> <StyledLink to="/" className="Sticky_l"><Logo /></StyledLink></LightSpeed>
            </SiteTitle>
            {/* <SiteDescription>{description}</SiteDescription> */}
          </TitleGroup>
           <MobileNavigation  location={params} />  
          {/* Mobile menu button and modal */}
        </TitleWrapper>
        <LightSpeed right><HeaderNavigationWrapper>
          {/* Desktop navigation links */}
          
         <Navigation />
          <div className="searchFilter">
              <i className="fa fa-search" onClick={()=>handleClick1()}></i>
               <div className={active ? "searchDropdown active" : "searchDropdown"}>
                  <div className="searchInput"><input type="text" placeholder="Search Here ..." ref={input1} className="serach" value={filter} pattern=".{3,}" onChange={(x)=> setFilter(x.target.value)}/>{filter &&<div className="close" onClick={()=>{ 
                    setFilter('')   }}><i class="fa fa-times" aria-hidden="true"></i></div>}
                  </div>
                  <div className="searchResult">
                    <ul>
                      {filteredData && filteredData.map((post,indx) => <li><Link  to={post.link.replace('https://staging.starmarketingonline.com','')} key={indx}>
                      <span><img src={post._embedded['wp:featuredmedia'][0].media_details.sizes['thumbnail'].source_url} /></span>
                      <h3 dangerouslySetInnerHTML={{ __html:post.title.rendered}}></h3>
                      <p dangerouslySetInnerHTML={{ __html:post.excerpt.rendered}}></p></Link></li>)}
                    </ul>
                  </div>
              </div>
          </div>
        <HotProject className="hotMenuMain">Hot Projects <span><DownArrow /></span>
          <div className="hotMenu">
              <Slide bottom><ul>
                <li><Link to='/project/lyallpur-galleria-ii/'>Lyallpur Galleria 2</Link></li>
                <li><Link to='/project/whiteley-mall/'>Whitely Mall</Link></li>
                <li><Link to='/project/sun-overseas-city'>Sun Overseas City</Link></li>
                <li><Link to='/project/marble-arch-enclave'>Marble Arch Enclave</Link></li>    
                <li><Link to='/project/5-west'>5 West – Mumtaz City</Link></li>
                </ul></Slide>
              </div>
        </HotProject>
          {/* Desktop search button */}
        </HeaderNavigationWrapper></LightSpeed>
      </HeaderInner>
          {/* Global search modal */}
          {/* <SearchModal /> */}
     </PageHeader>
    </StickyUpdate>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default Header

const TitleGroup = styled.div`
@media (min-width: 1000px) {
    align-items: baseline;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: -1rem 0 0 -2.4rem;
}
`;

const TitleWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0 4rem;
    text-align: center;
    width: 100%;
@media (min-width: 1000px) {
    width: auto;
    margin-right: 4rem;
    max-width: 50%;
    padding: 0;
    text-align: left;
}
@media only screen and (max-width: 1080px) {
    text-align: left;
    justify-content: left;
}
@media only screen and (max-width: 480px) {
    padding: 0;
}
`;
const PageHeader = styled.header`
  z-index: 99999;
  background: url(${(props) => props.bg});
  color:#FFFFFF;
  position: relative;
  ul{
    text-align: left;
    color: #FFFFFF;
    list-style: none;
    li {
      a{
        color:#fff;
        font-size: 18px;
        line-height: 30px;
        text-decoration:none !important;
        font-weight:400;
        letter-spacing: 0px;
        @media only screen and (max-width: 1366px) {
          font-size: 14px;
        }
      }
    }
  }
`;

const HeaderInner = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 2.8rem 0;
    max-width: 168rem;
    z-index: 100;
    margin-left: auto;
    margin-right: auto;
.searchFilter {
    color: #98add3;
    width: 96px;
    font-size: 29px;
    cursor: pointer;
    text-align: center;
    .searchDropdown.active{
    opacity:1;
}
.searchDropdown {
    position: absolute;
    opacity:0;
    right: 0px;
    margin-top: -91px;
    width: 20%;
    transition: all 0.55s linear;
    z-index: 999;
@media only screen and (max-width: 1080px) {
    margin-top: -70px;
}
input.serach {
    width: 100%;
    padding: 12px 20px;
    border: 0;
    background: #ffffff;
    letter-spacing: 1px;
    font-size: 16px;
:focus {
    outline: none;
}
}
}
}
.searchFilter:hover {
    color: #fff;
}
  @media (min-width: 700px) {
    max-width: 1440px;
  }
  @media only screen and (max-width: 1366px) {
    max-width: 94%;
  }
  @media only screen and (max-width: 480px) {
    padding: 0px;
  }
`;

const SiteTitle = styled.h1`
  font-size: 2.1rem;
  font-weight: 600;
  line-height: 1;
  margin: 0;
  @media (min-width: 1000px) {
    margin: 1rem 0 0 2.4rem;
  }
  @media (min-width: 700px) {
    font-size: 2.4rem;
    font-weight: 700;
  }
  
`;

const SiteDescription = styled.div`
  margin: 0;
  margin-top: 1rem;
  color: #6d6d6d;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.0311em;
  transition: all 0.15s linear;
  @media (min-width: 1000px) {
    margin: 1rem 0 0 2.4rem;
  }
  @media (min-width: 700px) {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  &:hover {
    text-decoration: underline;
  }
`;

const HeaderNavigationWrapper = styled.div`
  @media (min-width: 1000px) {
    align-items: center;
    display: flex;
  }
  
`;

const HotProject = styled.div`
  margin-left:2px;
  width: 196px;
  height: 52px;
  background: #DB2D34 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
  font-size: 16px;
  padding: 13px 14px;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-transition: all 1s 0s ease;
  -moz-transition: all 1s 0s ease;
  -o-transition: all 1s 0s ease;
  transition: all 1s 0s ease;
  position:relative;
  @media only screen and (max-width: 1080px) {
    display: none;
  
  }
  @media only screen and (max-width: 820px) {
    display: none;
  
  }
  span{
    box-shadow: rgb(0 0 0 / 71%) 0 3px 13px;
  }
  }
  @media only screen and (max-width: 1366px) {
    margin-left: 0px;
    width: 180px;
    font-size: 14px;
    padding: 17px 14px;
    span {
      padding: 15px 19px 35px !important;
      }
    }
  }  
  &:hover{
    .hotMenu{
      display:block;
    }
  }
  span{
    background: #DB2D34 0% 0% no-repeat padding-box;
    border: 1px solid #00000000;
    border-radius: 8px;
    opacity: 1;
    display: block;
    float: right;
    height: 100%;
    padding:13px 17px 38px;
    position: absolute;
    top: 0;
    right: 0;
  }
  .hotMenu{
    display:none;
    list-style: none;
    background: #ffffff;
    min-width: 250px;
    top: 52px;
    margin: 0px;
    border-radius: 15px 0px 15px 15px;
    padding: 12px 10px;
    position: absolute;
    right: 0;
    text-align: right;
    z-index: 99999;
    a{
      text-decoration: none;
      width: 100%;
      padding-right: 11px;
    }
  }
`;

const StickyUpdate = styled(Sticky)`
div{
transform: inherit !important;
}
`