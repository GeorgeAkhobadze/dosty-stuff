import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import FooterNewsletter from "./footerNewsletter";

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const ProgressStepCircle = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${props => props.active ? "#F06C00" : "#FFFFFF"};
  font-family: "Noto Sans Georgian";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.active ? "#FFF" : "#F06C00"};
  border: 2px solid #F06C00;
  box-sizing: border-box;
  z-index: 1;
  transition: 0.3s;
`;

const DefaultContainer = styled.div`
  min-width: 706px;
  max-width: 706px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const ProgressBar = styled.div`
width: 100%;
height: 3px;
background: rgba(240, 108, 0, 0.3);
position: absolute;s
`

const ProgressBarActive = styled.div`
width: ${props => props.progressCount}%;
height: 3px;
background: #F06C00;
position: absolute;
transition: 0.3s;
`

const ProgressBarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
width: calc(100% - 122px);
`

const ProgressTitlesContainer = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 76px);
`

const ProgressTitle = styled.p`
font-family: 'Noto Sans Georgian';
font-style: normal;
font-weight: 700;
font-size: 10px;
line-height: 14px;
text-align: center;
text-transform: uppercase;
color: #2C4D58;
width: 100px;
`

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [steps, setSteps] = useState(["შინაური ცხოველი", "განცხადება", "დამატებითი"]);

  const nextStep = () => {
    if(currentStep == 2) {
      return
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if(currentStep <= 0) {
      return
    } else {
      setCurrentStep(currentStep - 1)
    }
  }

  useEffect(() => {
    console.log(currentStep)
  }, [currentStep])

  return (
    <div className="App">
      <Title>განცხადების დამატება</Title>
      <DefaultContainer>
    <ProgressBarContainer>
    {steps.map((item, index) => {
      return(
                <ProgressStepCircle active={index <= currentStep}>{index + 1}</ProgressStepCircle>
      )} )}
              <ProgressBar/>
        <ProgressBarActive progressCount={(currentStep / 2) * 100}/>
    </ProgressBarContainer>
    
    <ProgressTitlesContainer>
    {steps.map((steps, val) => {return(
                <ProgressTitle>{steps}</ProgressTitle>
      )} )}
    </ProgressTitlesContainer>

      <button onClick={() => nextStep()}> Next</button>
      <button onClick={() => prevStep()}> Previous</button>
      </DefaultContainer>
      <FooterNewsletter/>
    </div>
  );
}

export default App;
