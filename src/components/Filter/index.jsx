import React, { useState } from 'react'
import { Popover, Select } from 'antd'
import { Button, Input } from '../Generics'
import { Advanced, Container, Icon, Section } from './style'
import  UseReplace from '../../Hooks/useReplace'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useSearch } from '../../Hooks/useSearch'

const { Option } = Select;
const { REACT_APP_BASE_URL: url } = process.env

export const Filter = () => {
  const query = useSearch()
  const [value, setValue] = useState(query.get('category_id'))
  
  const navigate = useNavigate()
  

  const Onchange = ({ target }) => {
    const { value, name } = target;
    // console.log(useReplace(name, value))
    // console.log(value, name)
    navigate(`${UseReplace(name, value)}`)
  }

  const { data } = useQuery(
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
        // console.log(res, 'filterres')
      }
    }
  );


  // console.log(data, 'dataa')

  const onSelect = (id) => {
    // console.log(id);
    setValue(id)
    navigate(`/properties/${UseReplace('category_id', id)}`)
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
          style={{ minWidth: '131px', height:'44px'}}
          name='' id=''
          value={Number(value)}
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
            <Icon.Home/>
          </Input>
          
          <Popover placement='bottomRight' content={advancedSearch} trigger='click' >
            <Button width={'131px'}  type={'secondary'}>
              <Icon.Setting />
              Advanced
            </Button>
          </Popover>

          <Button width={'131px'}  type={'primary'}>
            <Icon.Search/> 
            Search
          </Button>
          
        </Container>
    </div>
  )
}
