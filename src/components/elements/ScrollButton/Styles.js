import styled from 'styled-components';
  

  
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 96%;
   bottom: 120px;
   height: 20px;
   font-size: 5rem;
   z-index: 9999;
   cursor: pointer;
   color: #ff000a;
   @media only screen and (max-width: 1366px) {
      left: 93%;
     
   }
   @media only screen and (max-width: 820px) {
      left: 91%;
     
   }
   @media only screen and (max-width: 480px) {
      left: 81%;
     
   }
   svg{
      background: #fff;
      border-radius: 33px;

   }
`