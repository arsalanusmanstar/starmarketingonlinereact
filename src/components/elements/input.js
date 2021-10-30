import styled from 'styled-components'
const Input = (state) => {
    return <div className="fild"><label>
        {state.title} </label>
        <div className="input_fild"> <input type={state.type} value={state.value} name={state.name} placeholder={state.placeholder} required/></div></div>
}

export default Input;