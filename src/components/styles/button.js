import styled from 'styled-components'

const Button = styled.button`
  background: ${(props) => props.bg} 0% 0% no-repeat padding-box;
  color: #fff;
  padding: 19px;
  text-align: left;
  min-width: 206px;
  border-radius: 8px;
  font: normal normal 300 18px/30px Poppins;
  margin: 20px 0;
  position:relative;
  img {
    width: 34px;
    top: 39%;
    right: 18px;
    position: absolute;
  }
`;

export default Button;
