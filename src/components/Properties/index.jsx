import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Filter } from '../Filter'
import { Body, Container, Wrapper } from './style'
import { HouseCard } from '../HouseCard'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSearch } from '../../Hooks/useSearch'




const { REACT_APP_BASE_URL: url } = process.env


export const Propeties = () => {
  const [title, setTitle] = useState('Properties')
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate()
  const query = useSearch()

  useEffect(() => {
    if (!query.get('category_id')) {
      setTitle('Properties')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.get('category_id')])


  useQuery(
    ['getHouses', search],
    () =>
      fetch(`${url}/api/v1/houses/list${search || ''}`).then((res) => res.json()),
    {
      onSuccess: (res) => {
        // console.log(res, 'resProp');
        setData(res.data || []);
      }
    }
  );

  const { isLoading, isRefetching } = useQuery(
    'getHome',
    () =>
      query.get('category_id') && fetch(`${url}/api/v1/categories/${query.get('category_id')}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then((res) => res.json())
    ,
    {
      onSuccess: (res) => {
        // console.log(res, query.get('category_id'), 'title');
        query.get('category_id') && setTitle(res?.data?.name || 'Properties')
      }
    }
  );

  const onClick = (id) => {
    navigate(`/properties/:${id}`)
  }

  return (
    <div>
      <Filter />
      <Container>
        <Wrapper className='nocopy'>
          <div className=' title center'>{isLoading || isRefetching ? <div>Loading...</div> : title}</div>
          <div className='description center'>
            The Houses that You Want and dream!!!
          </div>
        </Wrapper>

        <Body>
          {data.map((value) => {
            return <HouseCard onClick={() => onClick(value?.id)} key={value.id} info={value} />
          })}
        </Body>
      </Container>
    </div>
  )
}
