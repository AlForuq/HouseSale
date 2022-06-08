import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width:280px;
    height: 350px;
    box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06), 
    0px 7px 46px rgba(0, 0, 0, 0.06), 
    0px 8px 15px rgba(0, 0, 0, 0.06);
    border-radius: 3px;

`
export const Image = styled.img`
width: 100%; 
`

export const Title = styled.div` 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;

`