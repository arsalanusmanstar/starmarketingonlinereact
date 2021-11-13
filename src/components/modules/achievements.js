import styled from 'styled-components'
import SectionContainer from "../styles/section-container";


const Achievements = ({state}) => {
    return (
        <SectionContainer>
            <Heading>
            <h1 className="featured-heading banners"  style={{marginTop:'-40px',color:'white'}}>Achievements</h1>
            </Heading>
            <br/><br/><br/><br/>
           <Body>
            <div className="entries">
  <div className="entry">
    <div className="title"><b>2005</b> - 2007</div>
    <div className="body">
      <p>The founding members rebrand themselves to Star Marketing after having worked for 10 years in real estate marketing under different names. Right from the start, Star Marketing establishes itself as a trustworthy, ethical and professional real estate marketing agency.</p>
    </div>
  </div>
  <div className="entry">
  <div className="title"><b>2008</b> - 2010</div>
    <div className="body">
      <p>Star Marketing launches its first foreign office in the city of Dubai in the UAE. The best builders and developers partner up with Star Marketing to successfully launch their projects across the country. Star Marketing starts getting local and international attention for their creative and innovative marketing strategies.</p>
    </div>
  </div>
  <div className="entry">
  <div className="title"><b>2011</b> - 2013</div>
    <div className="body">
      <p>During this period, Star Marketing landed their biggest client ever – Gulberg Residence Islamabad! This mega project enabled Star Marketing to expand its team and add even more talented and skilled professionals to their organization.</p>
    </div>
  </div>
  <div className="entry">
  <div className="title"><b>2014</b> - 2016</div>
    <div className="body">
      <p>This period was also very eventful and productive for Star Marketing, as it landed another huge Gulberg project called Gulberg Greens. Not only this, but Star Marketing also worked on other major projects like DHA Oasis Karachi and LDA City Lahore.</p>
    </div>
  </div>
  <div className="entry">
  <div className="title"><b>2017</b> - 2019</div>
    <div className="body">
      <p>Star Marketing proudly marketed Top City Islamabad along with other major projects like Chen One Mall and Heaven Heights Lahore. Star Marketing also completely redesigned and revitalized their website – starmarketingonline.com.</p>
     
    </div>
  </div>
  <div className="entry">
  <div className="title"><b>2020</b> - Present</div>
    <div className="body">
      <p>Star Marketing continues to be the leading real estate marketing company in Pakistan. We have over 30 ongoing projects in all the major cities of Pakistan. We have organized multiple property expos across the country with the next one in the Festival Arena in Dubai Festival City! Star Marketing has also launched their new state-of-the-art Star Digital department.</p>
    </div>
  </div>
  
  
  
</div>

  
</Body>
       
 <div style={{height:'35px', width:'35px', backgroundColor:'#e24f53', margin:'auto', marginTop:'265px', borderRadius:'100%'}}></div>
        </SectionContainer>   
    )

    
}



const Heading = styled.div`
h1{
    position: relative;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    @media only screen and (max-width: 480px) {
      text-align: center;
    }
    
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

      top: -10px;
    }
    @media only screen and (max-width: 480px) {

      width: 100%;
    }
   
  }
`



const Body=styled.div`

 
  min-height:100vh;
  margin:0;
  font-family: 'Poppins', sans-serif;
  &:before {
    content: '';
    position: absolute;
    top:290px;
    left:50%;
    bottom: 218px;
    transform:translateX(-50%);
    width:20px;
    border-radius:30px;
    background-color:#e24f53;
    
  }
  .entries {
    width:calc(100% - 80px);
    max-width:900px;
    margin:auto;
    position: relative;
    left:-5px;
   
    .entry {
      border-radius: 25px;
      width:calc(50% - 80px);
      float:left; 
      padding:20px;
      clear:both;
      text-align:right;
      background-color:white;
      @media only screen and (max-width: 480px) {
        width: calc(100% - 0px);
        margin-bottom: 80px;
        text-align: left;
      }
      &:not(:first-child) {
        margin-top:-60px;
      }
      .title {
        font-size:32px;
        margin-bottom:12px;
        position: relative;
        color:#001439;
        &:before {
          content: '';
          position: absolute;
          width:60px;
          height:60px;
          border:14px solid #e24f53;
          background-color:white;
          border-radius:100%;
          top:50%;
          transform:translateY(-50%);
          right:-135px;
         
          @media only screen and (max-width: 480px) {
               width: 30px;
                height: 30px;
                border: 8px solid #e24f53;
                right: -60px;
          }
        }
        &.big:before {
          width:24px;
          height:24px;
          transform:translate(8px,-50%);
        }
      }
      .body {
        color:#001439;
        font: normal normal 400 14px/19px Poppins;
        p {
          line-height:1.4em;
        }
      }
      &:nth-child(2n) {
        text-align:left;
        float:right;
        .title {
          &:before {
            left:-124px;
            @media only screen and (max-width: 480px) {
              left:-58px;
            }
          }
          &.big:before {
            transform:translate(-8px,-50%);
          }
        }
      }
    }
  }

`


export default Achievements;

