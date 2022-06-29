import React from 'react'
import {Select} from 'antd'
import { Section, Wrapper, Selec, Opt, TextArea } from './style'
import { Input, Button } from '../../Generics';
const { Option } = Select;

export const TourDate = () => {
  return (
    <Section>
      <div className="subTitle">Schedule A Tour</div>
      <Wrapper>
        <Selec>
          <Opt>January</Opt>
          <Opt>December</Opt>
          <Opt>April</Opt>
          <Opt>May</Opt>
          <Opt>September</Opt>
        </Selec>
        <Selec>
          <Opt>6:00-12:00</Opt>
          <Opt>9:00-15:00</Opt>
          <Opt>12:00-18:00</Opt>
          <Opt>15:00-21:00</Opt>
          <Opt>18:00-00:00</Opt>
        </Selec>
      </Wrapper>
      <div className="subTitle">Your Information</div>
      <Wrapper>
        <Input borderr={"open"} height={"30px"} placeholder={"Name"} />
        <Input borderr={"open"} height={"30px"} placeholder={"Phone"} />
        <Input borderr={"open"} height={"30px"} placeholder={"Email"} />
      </Wrapper>

      <Wrapper>
        <TextArea placeholder='Enter a message'>
         
        </TextArea >
      </Wrapper>
      <Button type={'primary'} width={250} >Submit a tour request</Button>
    </Section>
  );
}
