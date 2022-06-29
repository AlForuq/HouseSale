import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  padding: 38px 130px;
  gap: 32px;

  /* margin-top: 166px; */
`;
export const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #0d263b;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  height: fit-content;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  gap: 30px;
  padding: 24px 30px 38px 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 25px;
`;


