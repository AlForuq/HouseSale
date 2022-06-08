import styled from "styled-components";

export const Container = styled.div` 
    display: flex;
    flex-direction: column;
    align-items:center;
`

export const Title = styled.div` 
    display: flex;
    max-width: var(--width);
    width: 100%;
    margin-top:70px;
    margin-bottom: 15px;
    font-size: 18px;
`

export const Wrapper = styled.div` 
    /* display: flex;
    max-width: var(--width);
    width: wrap;
    flex-wrap: wrap;
    gap: 20px; */

    display: flex;
    flex-direction: column;

    margin: 60px 0;
`

export const Body = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: auto;
    width: 100%;
    padding: 0 130px;
    max-width: var(--width);
`
