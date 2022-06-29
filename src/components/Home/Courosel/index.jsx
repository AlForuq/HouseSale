import React, { useRef } from "react";
import { CarouselWrapper, Icon, Img, MainCarousel } from "./style";
import img1 from '../../../assets/images/img1.jpg'
import img2 from '../../../assets/images/img2.jpg'


export const Carousel = () => {

    const slider = useRef()

  return (
      <CarouselWrapper>
          <Icon.Left onClick={() => slider.current?.prev()} />
          <Icon.Right onClick={() => slider.current?.next()} />
          <MainCarousel ref={slider} dots autoplay >
              <Img src={img1} alt='img' />
              <Img src={img2} alt='img' />
              <Img src={img1} alt='img' />
              <Img src={img2} alt='img' />
              <Img src={img1} alt='img' />
              <Img src={img2} alt='img' />
          </MainCarousel>
      </CarouselWrapper>
  )
}
