import React, { useState } from 'react'
import { Container, Error, Info, Wrapper } from './style'
import { Button, Checkbox, Input } from '../Generics'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'

const { REACT_APP_BASE_URL: url } = process.env

export const Signin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)


  const navigate = useNavigate();

  const { mutate } = useMutation((res) => {
    return fetch(`${url}/api/public/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({ email, password })
    }).then((res) => res.json())
  })

  const onSubmit = () => {
    if (email?.length && password?.length) {

      mutate(
        '',
        {
          onSuccess: (res) => {
            if (res?.authenticationToken) {
              localStorage.setItem('token', res?.authenticationToken)
              navigate('/home')
            } else {
              setError('Login is incorrect')
            }
          },
          onError: (res) => {
            // console.log(res, 'Error');
          }
        },

      )
    } else {
      setError('Fill both forms')
    }
  }

  return (
    <Wrapper>
      <Container>
        <div className="title">Signin</div>
        <Input height={'30px'} borderr={'open'} value={email} onChang={({ target: { value } }) => setEmail(value)} mt={28} placeholder='email' />
        <Input height={'30px'} borderr={'open'} type='password' value={password} onChang={({ target: { value } }) => setPassword(value)} mt={24} placeholder='password' />
        {error ? <Error>{error}</Error> : null}
        <Info>
          <Checkbox>Remember me</Checkbox>
          <a href="/signin">Forget</a>
        </Info>
        <Button mt={32} type={'primary'} onClick={onSubmit} >Log in</Button>

      </Container>
    </Wrapper>

  )
}
