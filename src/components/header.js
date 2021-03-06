import styled from 'styled-components'
import Navigation from "./navigation/navigation";
import { Link } from 'react-router-dom';
import {  Logo, DownArrow } from "./icons";

const Header = () => {

  return (
    <PageHeader id="site-header">
      <HeaderInner>
        <TitleWrapper>
          {/* Search button on mobile */}
          {/* {state.theme.showSearchInHeader && <MobileSearchButton />} */}

          {/* Heading and Description of the site */}
          <TitleGroup>
            <SiteTitle>
            <StyledLink to="/"><Logo /></StyledLink> 
              
            </SiteTitle>
            {/* <SiteDescription>{description}</SiteDescription> */}
          </TitleGroup>

          {/* Mobile menu button and modal */}
          {/* <MobileMenuButton />
          <MobileMenuModal /> */}
        </TitleWrapper>

        <HeaderNavigationWrapper>
          {/* Desktop navigation links */}
          <Navigation />
          <HotProject>Hot Projects <span><DownArrow /></span>
            <div className="hotMenu"><Link to='/project/marble-arch-enclave'>Marble Arch Enclave</Link></div>
          </HotProject>
          {/* Desktop search button */}
          {/* {state.theme.showSearchInHeader && <SearchButton />} */}
        </HeaderNavigationWrapper>
      </HeaderInner>
      {/* Global search modal */}
      {/* <SearchModal /> */}
    </PageHeader>
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
`;

const PageHeader = styled.header`
  z-index: 1;
  background: url(${(props) => props.bg});
  color:#FFFFFF;
  position: relative;
  ul{
    text-align: left;
    color: #FFFFFF;
    li {
      a{
        color:#fff;
        font-size: 18px;
        line-height: 30px;
        text-decoration:none !important;
        font-weight:400;
        letter-spacing: 0px;
      }
    }
    


  }
`;

const HeaderInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 4.8rem 0;
  max-width: 168rem;
  z-index: 100;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: 700px) {
    max-width: 1440px;
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
  display: none;
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
  display: none;

  @media (min-width: 1000px) {
    align-items: center;
    display: flex;
  }
`;

const HotProject = styled.div`
  margin-left:40px;
  width: 215px;
  height: 52px;
  background: #DB2D34 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
  font-size: 18px;
  padding: 13px 14px;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-transition: all 1s 0s ease;
  -moz-transition: all 1s 0s ease;
  -o-transition: all 1s 0s ease;
  transition: all 1s 0s ease;
  position:relative;
  &:hover{
    span{
      box-shadow: 0px 19px 49px #000000b5;
    }
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
    padding:13px 19px 38px;
    position: relative;
    top: -14px;
    right: -14px;
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

    a{
      text-decoration: none;
      width: 100%;
      padding-right: 11px;
    }
  }
`;