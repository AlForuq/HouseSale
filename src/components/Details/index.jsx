import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { Container } from './style'

const { REACT_APP_BASE_URL: url} = process.env

export const Details = () => {
    const {id} = useParams()
    // console.log(param )

  const {data} = useQuery(
    'gethouse by id',
    () =>
      fetch(`${url}/api/v1/houses/${id?.replace(':', '')}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }).then((res) => res.json()),
    {
      onSuccess: (res) => {
        console.log(res, 'resDETAIL');
      },
    }
        
  );
  
    console.log(data, 'dataDeatail')

  return (
    <Container>
      <h1>{data?.data?.address}</h1>
      Details
    </Container>
  )
}
