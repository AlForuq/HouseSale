import React from 'react'
import { Container, Image, Title } from './style'
import img from '../../../assets/images/Categ.png'
export const Card = ({ title, onClick }) => {
  return (
      <Container onClick={ onClick } >
          <Title>{title}</Title>
        <Image src={img} />
    </Container>
  )
}
