import React from 'react'
import { useQuery } from 'react-query'
import { HouseCard } from '../HouseCard'
import { Container } from './style'
import { Button } from '../Generics'
import { useNavigate } from 'react-router-dom'


const {REACT_APP_BASE_URL: url} = process.env

export const MyProperties = () => {

  const navigate = useNavigate()
  
  const {data } = useQuery('', () => 
    fetch(`${url}/api/v1/houses/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => res.json()),
    {
      onSuccess: (res) => {
        // console.log(res);
      },
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
    
  )

  return (
    <Container>
      <h1>My Properies</h1>
      <Button onClick={()=> navigate('/profile/add')} type='primary' width={'131px'}>Add House</Button>
      {data?.data?.map(value=> <HouseCard key={value.id} info={value} />)}
    </Container>
  )
}
