import React, { useRef } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { HouseCard } from '../../HouseCard'
import { ArrowLeft, ArrowRight, Cards, Container, Wrapper } from './style'

export const Recomandation = () => {

  const slider = useRef()

  const items = [
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />,
  ];
  
  return (
    <Container className='nocopy' >
      <div className='title center'>Recommandation</div>
      <div className='description center'>
        The Houses that You Want and dream!!!
      </div>

      <Wrapper>
        <Cards>
          <AliceCarousel
            ref={slider}
            items={items}
            arrows={false}
            autoWidth
            mouseTracking
          />

          <ArrowLeft onClick={() => slider.current?.slideNext()} >
            &rang;
          </ArrowLeft>

          <ArrowRight onClick={()=> slider.current?.slidePrev()} >
            &lang;
          </ArrowRight>
          
          

        </Cards>
      </Wrapper>
    </Container>
    
  )
}
