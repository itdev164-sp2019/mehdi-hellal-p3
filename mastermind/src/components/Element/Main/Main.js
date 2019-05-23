import React from 'react'
import { BaseContainer } from '../BaseContainer'
import styled from 'styled-components'

const StyledMain = styled(BaseContainer)`
${props => props.theme.variants.main[props.variant || 'primary']};
`
export const Main = props => <StyledMain as="main" {...props}/>