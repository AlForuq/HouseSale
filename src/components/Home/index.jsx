import React from 'react'
import { Categories } from '../Category'
import { Filter } from '../Filter'
// import { HouseCard } from '../HouseCard'
import { Carousel } from './Courosel'
import { Recomandation } from './Recomandation'
import { Container } from './style'

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <Recomandation />
      <Categories/>
    </Container>
  )
}
