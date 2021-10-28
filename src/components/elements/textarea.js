import styled from 'styled-components'
const Textarea = (state) => { 
    return <div className="fild"><label>
        {state.title} </label>
      <div className="input_fild">   <textarea name={state.name} placeholder={state.placeholder}/></div></div>
}

export default Textarea;