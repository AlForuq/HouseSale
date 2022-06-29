import React from 'react'
import { Container, Wrapper, Icon } from './style'

const Input = ({
    children,
    height,
    width,
    type,
    mr,
    ml,
    mb,
    mt,
    pl,
    onChang,
    placeholder,
    deafaultValue,
    value,
    name,
    borderr
}) => {
    return (
        <Wrapper mr={mr} ml={ml} mb={mb} mt={mt} >
            <Icon>{children}</Icon>
            <Container
                className='nocopy'
                placeholder={placeholder}
                onChange={onChang}
                deafaultValue={deafaultValue}
                pl={pl}
                
                borderr={borderr}
                type={type}
                width={width}
                height={height}
                name={name}
                value={value}
            ></Container>
        </Wrapper>
    )
}

export default Input