import React, { useRef } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { HouseCard } from '../../HouseCard'
import { ArrowLeft, ArrowRight, Cards, Container, Wrapper } from './style'

// import {useQuery} from 'react-query'

export const Recomandation = () => {

  // useQuery('', () => {
  //   return fetch()
   
  // },
  //   {
  //     onSuccess: (res) => { console.log(res); }
  //   })

  // const req = useMutation(() => {
  //   return fetch()
  // }) 
  
  // req.mutate([], {
  //   onSuccess: res => {}
  // })

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

          <ArrowLeft onClick={() => slider.current?.slidePrev()} >
            &lang;
          </ArrowLeft>
          
          <ArrowRight onClick={() => slider.current?.slideNext()} >
            &rang;
          </ArrowRight>

          

          
          
          

        </Cards>
      </Wrapper>
    </Container>
    
  )
}
