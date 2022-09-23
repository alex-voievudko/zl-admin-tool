import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

// ------------------------ EXTRA STYLES ---------------------------------------

const StyledLink = styled(RouterLink)`
	background-color: #2ea44f;
	border: 1px solid rgba(27, 31, 35, 0.15);
	border-radius: 6px;
	box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
	box-sizing: border-box;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	font-size: 12px;
	font-weight: 600;
	line-height: 20px;
	padding: 2px 16px;
	position: relative;
	text-align: center;
	text-decoration: none;
	text-transform: capitalize;

	&:hover {
		background-color: #2c974b;
	}
`

// -----------------------------------------------------------------------------

type Props = {
	children: React.ReactNode
	url: string
}

const Link = ({ children, url }: Props) => {
	return <StyledLink to={url}>{children}</StyledLink>
}

export default Link
