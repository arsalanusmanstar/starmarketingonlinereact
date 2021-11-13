import styled from 'styled-components'
import { useEffect,useState } from "react";
import SectionContainer from "../styles/section-container";
import Meet_lft from "../../assets/meet_lft.png";
import Team_box from "../../assets/team_box.png";

const Team = ({ team, owner }) => {
  
  useEffect(() => {
  }, []);

  return (
    <div>
      <TeamMeetSection>
        <SectionContainer style={{marginTop:'-100px'}}>
        <Heading>
            <h1 className="featured-heading banners" style={{color:'white'}}>OUR TEAM</h1>
            </Heading>
          <TeamMeetSectionMain>
            <TeamMeetSectionLeft>
              <h4>Meet our<span>CEO</span></h4>
              <h1>{owner.firstname}</h1>
              <h2>{owner.lastname}</h2>
            </TeamMeetSectionLeft>
            <TeamMeetSectionRight>
              <RF className="logo_f" src={Meet_lft}></RF>
            </TeamMeetSectionRight>
          </TeamMeetSectionMain>
          <TeamMeetSectionBottom>
            <p dangerouslySetInnerHTML={{ __html: owner.content }}></p>
          </TeamMeetSectionBottom>

          <TeamMeetBoxesMain>
            {team && team.people && team.people.map((peop, index) =>
              <TeamMeetBoxes key={index}>
                <Img>
                  <Imge src={Team_box}></Imge>
                </Img>
                <Text>
                  <h2>{peop.name}</h2>
                  <p>{peop.position}</p>
                </Text>
              </TeamMeetBoxes>
            )}
          </TeamMeetBoxesMain>
        </SectionContainer>
      </TeamMeetSection>
    </div>



  )
}

export default Team;

const TeamMeetSectionLeft = styled.div`
 
h4{
    font-size: 44px;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 0px 0px 100px 0px;
    @media only screen and (max-width: 820px) {
      margin: 0px 0px 0px 0px;
      font-size: 34px;
    }
    @media only screen and (max-width: 480px) {
      margin: 0px 0px 0px 0px;

    }
}
h4 span{
    background: #FF000A 0% 0% no-repeat padding-box;
    border-radius: 0px 38px 38px 38px;
    padding: 0px 20px;
    margin-left: 26px;
    font-size: 46px;
    @media only screen and (max-width: 820px) {
      margin-left: 10px;
      font-size: 24px;

}
    @media only screen and (max-width: 480px) {
          margin-left: 10px;
          font-size: 24px;

    }
}
h1 {
    font-size: 130px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0px;
    line-height: 80px;
   
}
h2 {
    font-size: 130px;
    font-weight: 200;
    text-transform: capitalize;
    margin: 0px;
    @media only screen and (max-width: 480px) {
      font-size: 70px!important;
    }
}

@media only screen and (max-width: 1024px) {
  h1{font-size: 91px;}
  h2{font-size: 82px;}
}
@media only screen and (max-width: 820px) {
  h1{font-size: 70px;}
  h2{font-size: 70px !important;}

}
@media only screen and (max-width: 480px) {
  h1{font-size: 70px;}
  h2{font-size: 70px;}

}

`;

const TeamMeetSectionRight = styled.div`

`;

const RF = styled.img`

`;
const TeamMeetSectionMain = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    @media only screen and (max-width: 1366px) {
      .logo_f {
        width: 100%;
       }
    @media only screen and (max-width: 480px) {
      grid-template-columns: 100%;
      

      }
 
  
    }
    
  @media only screen and (max-width: 1024px) {
    .logo_f {
      width: 100%;
  }
 h2 {
    font-size: 110px;
    
   
}

  }
 
 
`;
const TeamMeetSection = styled.div`
    margin: 0 auto;
    padding: 20px 0;
    position: relative;
    display: block;
    clear: both;
    position: relative;
    max-width: 100%;
    color: #fff;

    .css-1mnxpzt-SectionContainer{

        padding: 0px;



    }

`;


const TeamMeetSectionBottom = styled.div`
    font-size: 26px;
    font-weight: 200;
    width: 90%;
    @media only screen and (max-width: 1366px) {
      
      width:100%;
      font-size: 16px;
    }
`;

const TeamMeetBoxesMain = styled.div`
    text-align: center;
    
    
    
    
    grid-template-columns: 50% 50%;
    display: grid;
    @media only screen and (max-width: 1024px) {
      grid-template-columns: 50% 50%;
    }
    @media only screen and (max-width: 480px) {
      grid-template-columns: 100%;
    }
`;

const TeamMeetBoxes = styled.div`
    flex: 0 0 calc(31.66% - 0px);

    @media only screen and (max-width: 1024px) {
      img {
        width: 100%;
    }
    }
`;

const Img = styled.div`

`;
const Text = styled.div`
h2 {
    font-size: 29px;
    font-weight: 500;
    margin: 0px;
}
p {
    font-size: 22px;
    font-weight: 100;
}

`;
const Imge = styled.img`
margin-bottom: -53px;
`;


const Heading = styled.div`
h1{
    position: relative;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px
   
  }
  h1:after{
    content: "";
    height: 10px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 10%;
    bottom: -16px;
    border-radius: 107px;
    background: #fe5656e3 0% 0% no-repeat padding-box;
   
    
  }
  h1:before{
    content: "";
    background: url(./assets/whiteImage.png) 0% 0% no-repeat padding-box;
    width: 393px;
    height: 180px;
    display: table;
    margin: 0 auto;
    position: absolute;
    right: 0;
    left: 0;
    top: -59px;
    text-align: center;
    background-size: cover;
    @media only screen and (max-width: 820px) {
      width: 300px;
        height: 130px; 
        top: 10px;
       
    }
    @media only screen and (max-width: 480px) {
      width: 100%;
    }
   
  }
  
`
