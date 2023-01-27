import { useEffect, useState } from "react"
import styled from "styled-components"
import buttonMinusIcon from "./assets/quantity-input-minus.svg"
import buttonPlusIcon from "./assets/quantity-input-plus.svg"

const QuantityInput = styled.input`
outline: none;
border: none;
width: 100%;
padding: 14.5px;
box-sizing: border-box;
text-align: center;
&::placeholder {
    color: #2C4D58;
}
color: #2C4D58;
font-family: 'Noto Sans Georgian';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 19px;
`

const QuantityInputContainer = styled.div`
display:flex;
 button:nth-child(1) {
    border-radius: 12px 0px 0px 12px;
};
button:nth-child(3) {
    border-radius: 0px 12px 12px 0px;
};
`

const QuantityButton = styled.button`
height: 100%;
padding: 12px 16px;
box-sizing: border-box;
background: rgba(240, 108, 0, 0.24);
border: none;
outline: none;
display:flex;
justify-content: center;
align-items: center;
`

const TemporaryContainer = styled.div`
height: 500px;
width: 500px;
display:flex;
`

const IncrementFields = () => {

    const [maleCount, setMaleCount] = useState(0)
    const [femaleCount, setFemaleCount] = useState(0)

    const maleIncrement = () => {
        if(maleCount >= 15) {
          return
        } else {
          setMaleCount(maleCount + 1)
        }
      }
    
      const maleDecrement = () => {
        if(maleCount <= 0) {
          return
        } else {
          setMaleCount(maleCount - 1)
        }
    }

    const handleSubmit = () => {
        let regex = /^[0-9]+$/
        console.log(        regex.test(maleCount))

    }
      useEffect(() => {
        if(maleCount < 0) {
            setMaleCount(0)
        } else if (maleCount > 15) {
            setMaleCount(15)
        }
      }, [maleCount])

    return(
        <div>
        <QuantityInputContainer>
            <QuantityButton onClick={() => maleDecrement(maleCount - 1)}><img src={buttonMinusIcon}/></QuantityButton>
        <QuantityInput type="number" pattern="\d{1,5}" value={maleCount} onChange={(e) => setMaleCount(e.target.value)}></QuantityInput>
        <QuantityButton onClick={() => maleIncrement(maleCount + 1)}><img src={buttonPlusIcon}/></QuantityButton>
        </QuantityInputContainer>
        <button onClick={() => handleSubmit()}>CLICKMEEEE</button>
        </div>


    )
}

export default IncrementFields;