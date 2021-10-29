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
        <SectionContainer>
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
}
h4 span{
    background: #FF000A 0% 0% no-repeat padding-box;
    border-radius: 0px 38px 38px 38px;
    padding: 0px 20px;
    margin-left: 26px;
    font-size: 46px;
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
`;

const TeamMeetBoxesMain = styled.div`
    text-align: center;
    margin-top: 90px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const TeamMeetBoxes = styled.div`
    flex: 0 0 calc(31.66% - 0px);
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