import React from 'react'
import { BaseContainer } from '../BaseContainer'
import styled from 'styled-components'
import {InfoBar} from '../../Game'

const StyledHeader = styled(BaseContainer)`
${props => props.theme.variants.header[props.variant || 'primary']};
`



export const Header = props => <StyledHeader as="header" {...props}/>
