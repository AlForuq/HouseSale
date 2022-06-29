import React from 'react'
import { AntCheck, Container } from './style'

const Checkbox = ({
  children,
  // ml,
  // mr,
  // mt,
  // mb,
  onChange,
  small
}) => {
  return (
    <Container>
      <AntCheck
        // mr={mr}
        // ml={ml}
        // mb={mb}
        // mt={mt}
        size={small}
        onChange={onChange}
      >
        {children}
      </AntCheck>
    </Container>
  )
}

export default Checkbox