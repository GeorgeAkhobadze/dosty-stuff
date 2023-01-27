
import { useEffect, useState } from "react";
import styled from "styled-components";
import IncrementFields from "./increment";

const NewsletterContainer = styled.div`
    width: 100%;
    position: relative;
`

const Newsletter = styled.input`
    width: 100%;
    border: none;
    background-color: #FFF;
    font-family: "Noto Sans Georgian";
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    height: 100%;
    padding: 13px 127px 16px 16px;
    box-sizing: border-box;
    outline: none;
    border-radius: 8px;
    &::placeholder {
        color: #2C4D58;
    }
`

const NewsletterButton = styled.button`
    padding: 11px 23px;
    font-family: 'Noto Sans Georgian';
    background: #F06C00;
    border-radius: 12px;
    color: #FFF;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    position: absolute;
    border: none;
    right: 0;
    top: 4px;
    right: 4px;
    cursor: pointer;
`

const FakeFooterContainer = styled.div`
    width: 343px;   
    height: 400px;
    background-color: #FFF9F5;
    display:flex;
    flex-direction: column;
    gap: 30px;
`

const FooterNewsletter = () => {
    const [newsletterValue, setNewsletterValue] = useState("")
    const submitEmail = () => {
        console.log(newsletterValue)
    }


    return(
        <FakeFooterContainer>
            <NewsletterContainer>
            <Newsletter type="text" placeholder="ელ-ფოსტა" value={newsletterValue} onChange={(e) => setNewsletterValue(e.target.value)}/>
            <NewsletterButton onClick={() => submitEmail()}>გამოწერა</NewsletterButton>
            </NewsletterContainer>
            <IncrementFields/>
        </FakeFooterContainer>
    )
}

export default FooterNewsletter;