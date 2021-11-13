import styled from 'styled-components';
  

  
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 95%;
   bottom: 60px;
   height: 20px;
   font-size: 5rem;
   z-index: 9999;
   cursor: pointer;
   color: #ff000a;
   @media only screen and (max-width: 820px) {
      left: 92%;
     
   }
   @media only screen and (max-width: 480px) {
      left: 90%;
      bottom: 20px  ;
      font-size: 3rem;
   }
   svg{
      background: #fff;
      border-radius: 33px;

   }
`