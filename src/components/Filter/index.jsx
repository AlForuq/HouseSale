import React, {useState } from 'react'
import { Popover, Select } from 'antd'
import { Button, Input } from '../Generics'
import { Advanced, Container, Icon, Section } from './style'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'

import { UseSearch } from '../../Hooks/useSearch'
import { UseReplace } from '../../Hooks/useReplace'

const { Option } = Select;
const { REACT_APP_BASE_URL: url } = process.env

export const Filter = () => {
  const query = UseSearch()
  const [valu, setValue] = useState(query.get('category_id'))



  const navigate = useNavigate()


  const Onchange = ({ target }) => {

  const { value, name } = target;
    console.log(UseReplace(name, value))
    // console.log(name, value)
    // UseReplace(name, value)
    navigate(`${UseReplace(name, value)}`)

  }



  /* getting Category list NAME with <Select/> in Filter */
 const {data, refetch} = useQuery(
    'getHouses',
    () =>
      fetch(`${url}/api/v1/categories/list`, {
        method: 'get',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then((res) => res.json())
    ,
    {
      onSuccess: (res) => {
        // console.log(res, 'res filter');
      
      },
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );


  // console.log(data, 'dataa')
    
  const onSelect = (id) => {
    setValue(id)
    navigate(`${UseReplace('category_id', id)}`)
    refetch()
  }


  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Adress</Advanced.Title>
      <Section>
        <Input onChang={Onchange} name='country' placeholder={'Country'} />
        <Input onChang={Onchange} name='region' placeholder={'Region'} />
        <Input onChang={Onchange} name='city' placeholder={'City'} />
        <Input onChang={Onchange} name='zip_code' placeholder={'Zip Code'} />
      </Section>

      <Advanced.Title>Apartment Info</Advanced.Title>
      <Section>
        <Input onChang={Onchange} name='address' placeholder={'Address'} />
        <Input onChang={Onchange} name='house_name' placeholder={'House Name'} />
        <Input onChang={Onchange} name='room' placeholder={'Rooms'} />
      </Section>

      <Advanced.Title>Price</Advanced.Title>

      <Section>
        <Input onChang={Onchange} name='min-price' placeholder={'Min price'} />
        <Input onChang={Onchange} name='max-price' placeholder={'Max price'} />

        <Select
          style={{ minWidth: '131px', height: '44px' }}
          name='' id=''
          value={Number(valu) || 'Category'}
          onChange={onSelect}
        >

          {data?.data?.map(value => {
            return (
              <Option key={value.id} value={value.id}>{value?.name}</Option>
            )
          })}
        </Select>
        
      </Section>

      <Section>
        <Button width={'131px'} ml={20} type='primary' >
          Search
        </Button>
        <Button width={'131px'} ml={20} type='secondary' >
          Cancel
        </Button>
      </Section>
    </Advanced>
  )
  return (
    <div className='center' >
      <Container>
        <Input pl={'50px'} placeholder={'Enter an address, neighborhood, city, or ZIP code'} >
          <Icon.Home />
        </Input>

        <Popover placement='bottomRight' content={advancedSearch} trigger='click' >
          <Button width={'131px'} type={'secondary'}>
            <Icon.Setting />
            Advanced
          </Button>
        </Popover>

        <Button width={'131px'} type={'primary'}>
          <Icon.Search />
          Search
        </Button>

      </Container>
    </div>
  )
}
