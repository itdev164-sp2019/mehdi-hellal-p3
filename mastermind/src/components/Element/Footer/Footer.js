import React from 'react'
import PropTypes from 'prop-types'
import { BaseContainer } from '../BaseContainer'
import styled from 'styled-components'


const StyledFooter = styled(BaseContainer)`
${props => props.theme.variants.footer[props.variant || 'primary']};
`



export const Footer = props => <StyledFooter as="footer" {...props} />