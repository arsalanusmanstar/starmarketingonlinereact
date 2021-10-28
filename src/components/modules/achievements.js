import styled from 'styled-components'
import SectionContainer from "../styles/section-container";


const Achievements = ({state}) => {
    return (
        <SectionContainer style={{height:'2000px'}}>
            <Heading>
            <h1 className="featured-heading" style={{color:'white'}}>Achievements</h1>
            </Heading>
            <br/><br/><br/><br/>
           <Body>
            <div className="entries">
  <div className="entry">
    <div className="title"><b>2005</b> - 2007</div>
    <div className="body">
      <p>Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos. Doloremque et distinctio quod molestiae ut.</p>
    </div>
  </div>
  <div className="entry">
  <div className="title"><b>2007</b> - 2009</div>
    <div className="body">
      <p>Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos. Doloremque et distinctio quod molestiae ut.</p>
    </div>
  </div>
  <div className="entry">
  <div className="title"><b>2010</b> - 2012</div>
    <div className="body">
      <p>Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos. Doloremque et distinctio quod molestiae ut.</p>
    </div>
  </div>
  <div className="entry">
  <div className="title"><b>2012</b> - 2014</div>
    <div className="body">
      <p>Voluptatibus veniam ea reprehenderit atque. Reiciendis non laborum adipisci ipsa pariatur omnis. Sed ipsam repudiandae velit. Omnis libero nostrum aperiam nemo dolor ea eos eius. Esse a non itaque quidem.</p>
    </div>
  </div>
  <div className="entry">
  <div className="title"><b>2014</b> - 2016</div>
    <div className="body">
      <p>VAdipisci totam omnis cum et suscipit excepturi et excepturi. Inventore sequi sit ut aliquid. Modi aut dolores dignissimos.</p>
      <p>Delectus facere officia consequuntur molestias deserunt illo. Placeat laudantium beatae natus excepturi ab nihil voluptates.</p>
    </div>
  </div>
  <div className="entry">
  <div className="title"><b>2016</b> - 2018</div>
    <div className="body">
      <p>Impedit dolorem commodi explicabo fugit aut alias voluptatem. Magnam earum rerum quae dicta quibusdam aliquam ut.</p>
    </div>
  </div>
  <div className="entry">
  <div className="title"><b>2020</b> - 2021</div>
    <div className="body">
      <p>Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos. Doloremque et distinctio quod molestiae ut.</p>
    </div>
  </div>
  
  
</div>

  
</Body>
       
 <div style={{height:'35px', width:'35px', backgroundColor:'#e24f53', margin:'auto', marginTop:'500px', borderRadius:'100%'}}></div>
        </SectionContainer>   
    )

    
}



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
    bottom:400px;
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
          z-index:1000;
        }
        &.big:before {
          width:24px;
          height:24px;
          transform:translate(8px,-50%);
        }
      }
      .body {
        color:#001439;
        font: normal normal 400 13px/19px Poppins;
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

