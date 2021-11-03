import styled from 'styled-components'
import SectionContainer from "../styles/section-container";
import Locations from "../modules/locations";

const SignlePage = ({data}) => {
    console.log(data)
    return (
        data ?
        <>
            <SectionContainer>
                <h2 className="featured-heading" style={{color:'#fff'}}  dangerouslySetInnerHTML={{ __html: data.title.rendered }}></h2>
                <div className="featured-project-line"></div>
                <Cont><div className="content" dangerouslySetInnerHTML={{ __html: data.content.rendered }}></div></Cont>
            </SectionContainer>
            <Locations />
        </> : 
         <>
         <SectionContainer>
             <h2 className="featured-heading" style={{color:'#fff'}} >Page Not Found</h2>
             <div className="featured-project-line"></div>
             <Cont><div className="content"></div></Cont>
         </SectionContainer>
         <Locations />
     </>
    )
}

export default SignlePage;


const Cont = styled.p`
    .content p span {
        color: #fff !important;
    }

    .content h3 strong span, .content h2 strong span, ul li span, ul li, ul li font {
        color: #fff !important;
    }
` 
const Score = styled.div`
    opacity: 1;
    color:#fff;
    position: relative;
    &:before{
        content:'';
        background: #333B58 0% 0% no-repeat padding-box;
        box-shadow: 0px 68px 79px #8585854A;
        border-radius: 19px;
        position: absolute;
        height: 100%;
        width: 100%;
        top:0;
        left: 0;
        z-index: 1;
    }
    &:after{
        content:'';
        background: #212841 0% 0% no-repeat padding-box;
        border-radius: 19px 19px 463px 19px;
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 2;
        left: 0;
        top:0;
    }
`  
const ScoreCont = styled.div`
    position: relative;
    z-index: 3;
    padding:40px;
`
const SectionThree = styled.div`
    display: grid;
    grid-template-columns: 28% 28% 28%;
    grid-gap:8%;
    @media only screen and (max-width: 1366px) {
        grid-template-columns: 32% 32% 32%;
        grid-gap: 2%;
        
      }
      @media only screen and (max-width: 1024px) {
        grid-template-columns: 100% ;
    
      }
`
const Icon = styled.div``
const Count = styled.div`
    text-align: left;
    font: normal normal bold 64px/95px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;`
const Title = styled.div`
    text-align: left;
    font: normal normal 200 38px/42px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;`

    