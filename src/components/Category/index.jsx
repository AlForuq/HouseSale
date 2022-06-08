import React, { useRef, useState } from 'react'
import { Card } from './Card'
import { ArrowLeft, ArrowRight, Cards, Container, Wrapper } from './style'
import AliceCarousel from 'react-alice-carousel'

import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const { REACT_APP_BASE_URL: url } = process.env;

export const Categories = () => {
    const navigate = useNavigate()
    const [item, setItem] = useState([])

    const onSelect = (value) => {
        navigate(`/properties?category_id=${value}`)
    }

    useQuery(
        '',
        () => {
            return fetch(`${url}/api/v1/categories/list`).then((res)=> res.json())
        },
        
        {
            // refetchOnWindowFocus: false
            onSuccess: (res) => {
                let list = res?.data?.map((value, index) => {
                    console.log(res, 'ResCAT')
                    return <Card onClick={()=> onSelect(value.id)} title={value.name} />
                })  
                setItem(list)
            }
        }
    );
    const slider = useRef()
    // console.log(item, 'state')
 

    return (
        <Container className='nocopy' >
            <div className='title center'>Categories </div>
            <div className='description center'>
                The Houses that You Want and dream!!!
            </div>

            <Wrapper>
                <Cards>
                    <AliceCarousel
                        responsive={{
                            0: {
                                items: 1,
                            },
                            1024: {
                                items: 3,
                            },
                        }}
                        ref={slider}
                        items={item}
                        arrows={false}
                        autoWidth
                        mouseTracking
                    />

                    <ArrowLeft onClick={() => slider.current?.slideNext()} >
                        &rang;
                    </ArrowLeft>

                    <ArrowRight onClick={() => slider.current?.slidePrev()} >
                        &lang;
                    </ArrowRight>
                </Cards>
            </Wrapper>
        </Container>

    )
}