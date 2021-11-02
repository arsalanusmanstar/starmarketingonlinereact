import styled from 'styled-components'
import { Link } from 'react-router-dom';
import back from "../../assets/back.png";
import { useEffect, useState } from "react";
/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const MobileNavigation = () =>  {
  const [openNav,setOpenNav] = useState(false);
  const state = [
    ["About","#","",[['Our Team','/our-team',''],['Achievements','/achievements','']]],
    ["Media","#","",[['Latest','/latest',''],['News','https://star.news','new']]],
    ["Projects","/projects","",[]],
    // ["Projects","/projects","",[['Islamabad','/projects/islamabad','',[['Murree','/projects/islamabad/multan','',]]],['Punjab','/projects/Punjab',''],['KPK','/projects/kpk',''],['Sindh','/projects/sindh',''],['Baluchistan','/projects/baluchistan','']]],
    ["Products","#","",[['Manhill Advertising','https://www.manhilladvertising.com/','new'],['Star Digital','https://digital.starmarketingonline.com/','new'],['Star Clubcard','https://starclubcard.info/','new'],['Star Jaidad','https://starjaidad.com/','new']]],
    // ["Careers","#","",[]],
    ["Contact Us","/contact-us","",[]],
  ]
  return (
    <>
    
    <div className="menuIcon" onClick={()=>setOpenNav(true)}><i className="fa fa-bars"></i></div>
  <NavWrapper  className={openNav && "active"}>
    <MenuNav>
      <Back bg={back} onClick={()=>setOpenNav(false)}></Back>
      <Menu>
        {state.map(([name, link, target, child]) => {
          return (
            <MenuItem key={name} className={child.length > 0 ? 'submenu' : ''}>
              <MenuLink  to={link}>
                {name}
              </MenuLink>
              <MenuSub>
                {child.length > 0 && child.map(([subName,subLink,target,subChild]) => {
                   return (
                   <MenuItem key={subName}>
                      {target == 'new' ? 
                      <MenuLinkTarget
                        href={subLink}
                        target="_blank"
                      >
                        {subName}
                      </MenuLinkTarget>
                      :  
                      <MenuLink
                      to={subLink}
                    >
                      {subName}
                    </MenuLink>}
                    {subChild && subChild.map(([subNameCh,subLinkCh]) => {
                        return (
                          <MenuItem key={subNameCh}>
                              <MenuLink
                              to={subLinkCh}>
                              {subNameCh}
                            </MenuLink>
                        </MenuItem>
                        )})}
                  </MenuItem>
                )})}
                
                </MenuSub> 
            </MenuItem>
          );
        })}
      </Menu> 
    </MenuNav>
  </NavWrapper>
  </>
  )
};

export default MobileNavigation;

const NavWrapper = styled.div`
background: #fff;
position: fixed;
width: 70%;
right: -2000px;
top: 0;
height: 100vh;
z-index: 999;
-webkit-transition: all 0.5s 0s ease;
-moz-transition: all 0.5s 0s ease;
-o-transition: all 0.5s 0s ease;
transition: all 0.5s 0s ease;
color: #333;


&.active{
  right: 0;
}
  ul{
    width: 100%;
    display: block;
    margin: 0;
    padding: 0;
    li{
      border-bottom:1px solid #ccc;
      padding: 14px 32px;
      line-height: 47px;
      margin: 0px !important;
      margin: 0;
      ul{
        display:none;
        position: relative;
        top: 0;
        padding: 0;
        li:last-child{
          border:0px;
        }
      }
      &:hover {
        
          ul{
            display:block;
    
          }
      }
      :after{
        
        border-color: #000 !important;
        right: 25px !important;
        top: 23px !important;
      }

    }

      a {
        color:#000 !important;
      }
     
      
  }
`;

const MenuNav = styled.nav`
  @media (min-width: 1000px) {
    display: block;
    width: 100%;
  }
  
  margin-top: 96px;
`;

const Menu = styled.ul`
  display: flex;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.0277em;
  flex-wrap: wrap;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
 

  @media (min-width: 1220px) {
    margin-top: -0.8rem;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: -2.5rem;
  }
  li.submenu:after {
    content: "";
    box-sizing: border-box;
    height: 7px;
    width: 7px;
    border-style: solid;
    border-color: white;
    border-width: 0px 1px 1px 0px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: border-width 150ms ease-in-out;
    transition: border-width 150ms ease-in-out;
    z-index: 999999;
    position: absolute;
    right: -15px;
    top: 10px;
}



}
`;

const MenuItem = styled.li`
  font-size: inherit;
  color: #000;
  line-height: 1.25;
  position: relative;
  margin: 0.8rem 0 0 1.6rem !important;
  @media only screen and (max-width: 1366px) {
    margin: 0px 12px 0px 11px !important;

  }

  @media (min-width: 1220px) {
    margin: 0.8rem 0 0 3.5rem !important;
  }
  &.submenu:hover > ul{
   
    display: block;
   
  }
 

`;

const MenuLink = styled(Link)`
  display: block;
  line-height: 1.2;
  text-decoration: none;

  &:hover,
  &[aria-current="page"] {
    text-decoration: underline;
    color: #ff000a;
    
  }
  
`;
const MenuLinkTarget = styled.a`
  display: block;
  line-height: 1.2;
  text-decoration: none;

  &:hover,
  &[aria-current="page"] {
    text-decoration: underline;
    color: #ff000a;
    
  }
  
`;
const MenuSub = styled.ul`
display: none;
position: absolute;
right: 0;
list-style: none;
background: #ffffff;
min-width: 250px;
top: 30px;
margin: 0px;
border-radius: 15px 0px 15px 15px;
padding: 12px 10px;

    li {
     
      margin: 0px 0px 0px 0px !important;
      padding: 4px 14px;
      a {
        font-size: 14px !important;
        color: #000;
        &:hover {
          color: #ff000a !important;
  
        }
      }
      
    }
   
  }
  
 


`;


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
`

