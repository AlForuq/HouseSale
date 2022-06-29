import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  height: fit-content;
  background: #ffffff;
  border-top: 1px solid #e6e9ec;
  gap: 30px;
  padding: 48px 30px 48px 30px;
`;

export const Wrapper = styled.div` 
    display: flex;
    gap: 36px;
`

export const Selec = styled.select`
  border: none;
  border-bottom: 2px solid #e6e9ec;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  outline:none;
  :hover {
    border-color: #0061df;
  }
`;


export const Opt = styled.option` 
  width: 200px;
  height: 50px;
  font-weight: 600;
  
`



export const TextArea = styled.textarea`
  padding: 0 15px;
  width: 100%;
  height: 64px;
  line-height: 1.5;
  resize: none;
  border: none;
  border-bottom: 2px solid #e6e9ec;
  outline: none;
  
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #696969;
`;
