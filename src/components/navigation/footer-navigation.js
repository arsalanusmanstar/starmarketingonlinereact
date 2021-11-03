import styled from 'styled-components'
import { Link } from 'react-router-dom';

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const FooterNavigation = () => (
  <NavWrapper>
    <MenuNav>
      <Menu>
        
            <MenuItem key="1">
              <MenuLink
                href='https://starjaidad.com/'
              > Star Jaidad
              </MenuLink>
              <LinkNew
                to='/privacy-policy'
              >  Privacy Policy
              </LinkNew>
            </MenuItem>
          
      </Menu>
    </MenuNav>
  </NavWrapper>
);

export default FooterNavigation;

const NavWrapper = styled.div``;

const MenuNav = styled.nav``;

const Menu = styled.ul``;

const MenuItem = styled.li`
  text-align: left;
  letter-spacing: 0px;
  color: #8E8E8E;
  opacity: 1;
  list-style:none;
  @media only screen and (max-width: 1366px) {
    text-align: center;

  }
`;

const MenuLink = styled.a`
  font: normal normal 300 18px/26px 'Poppins',sans-serif;    
  padding-left: 11px;
`;

const LinkNew = styled(Link)`
  font: normal normal 300 18px/26px 'Poppins',sans-serif;    
  padding-left: 11px;
`;
