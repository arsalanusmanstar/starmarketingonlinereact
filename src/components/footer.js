import styled from 'styled-components'
import FooterNavigation from "./navigation/footer-navigation";
import SectionContainer from "./styles/section-container";

const Footer = ({ state }) => {
  const currentYear = new Date().getFullYear();
  const { footerBg } = '';

  return (
    <SiteFooter bg={footerBg} role="contentinfo">
      <SiteFooterInner>
        <Credits>
          <Copyright>
            Copyright &copy; {currentYear}{" "} By 
             <Link href={'https://digital.starmarketingonline.com/'} target="_blank"> Star Digital</Link>
          </Copyright> <PoweredBy>| All rights reserved.</PoweredBy>
        </Credits>
          <FooterNavigation />
      </SiteFooterInner>
    </SiteFooter>
  );
};

export default Footer

const SiteFooterInner = styled(SectionContainer)`
  max-width:1440px !important;
  padding:0px;
  margin:0 auto;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1366px) {
    display: block;

  }
`;
const Link = styled.a``
const SiteFooter = styled.footer`
  border-color: #dcd7ca;
  border-style: solid;
  border-width: 0;
  padding: 3rem 0;
  background: #f3f3f3;
  background-color: ${(props) => props.bg};
  color: #000000;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Credits = styled.div`
  @media (min-width: 700px) {
    display: flex;
    @media only screen and (max-width: 1366px) {
      justify-content: center;
  
    }

  }
`;

const Copyright = styled.p`
  text-align: left;
  font:italic normal normal 18px/26px 'Raleway',sans-serif;
  letter-spacing: 0px;
  color: #757575;
  a{
    text-align: left;
    font:italic normal normal 18px/26px 'Raleway',sans-serif;
    letter-spacing: 0px;
    color: #FE5656;
  }

  @media (min-width: 700px) {
    font-weight: 700;
  }
`;

const PoweredBy = styled.p`
  display: none;
  margin: 0 0 0 1rem;
  font:italic normal normal 18px/26px 'Raleway',sans-serif;
  letter-spacing: 0px;
  color: #757575;

  @media (min-width: 700px) {
    display: block;
  }
`;
