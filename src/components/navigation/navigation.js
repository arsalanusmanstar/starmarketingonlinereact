import styled from 'styled-components'
import { Link } from 'react-router-dom';
/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Navigation = () =>  {
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
  <NavWrapper>
    <MenuNav>
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
  )
};

export default Navigation;

const NavWrapper = styled.div`
  align-items: center;
  display: flex;
  
`;

const MenuNav = styled.nav`
  display: none;
  @media (min-width: 1000px) {
    display: block;
    width: 100%;
  }
  
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
        color: #000000 !important;
        &:hover {
          color: #ff000a !important;
  
        }
      }
      
    }
   
  }
  
 


`;
