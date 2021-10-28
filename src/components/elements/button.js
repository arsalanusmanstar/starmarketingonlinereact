import styled from 'styled-components'
import submit_b from "../../assets/submit_b.png";
const Button = (state) => {
    return <div className="fild_button"><button type={state.type} value={state.value}>Submit<Imge src={submit_b}></Imge></button></div>
}

export default Button;



const Imge = styled.img`
  

`