
import styled from 'styled-components'
// Header sizes bases on style.css
const maxWidths = {
  thin: "58rem",
  small: "80rem",
  medium: "1440px",
};

const getMaxWidth = (props) => maxWidths[props.size] || maxWidths["medium"];
const getMinHeight = (props) => props.minHeight;

const SectionContainer = styled.div`
  margin:0 auto;
  padding:120px 0;
  position:relative; 
  display: block;
  clear: both;
  position:relative;
  min-height:${getMinHeight};
  max-width: ${getMaxWidth};

  @media (min-width: 700px) {
    width: calc(100% - 8rem);
  }
  @media (max-width: 700px) {
    padding:40px 20px;
  }
`;

export default SectionContainer;
