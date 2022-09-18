import styled from 'styled-components'
// MUI
import { Box, Typography, Link } from '@mui/material'
// images
import logo from '../assets/zeptolab_logo.png'
import { Link as RouterLink } from 'react-router-dom'

// ------------------------ EXTRA STYLES ---------------------------------------

const RootStyle = styled.div`
	right: 0;
	bottom: 0;
	z-index: 99999;
	width: 100%;
	height: 100%;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	flex-direction: column;
`

// -----------------------------------------------------------------------------

const Page404 = () => {
	return (
		<RootStyle>
			<Box component='img' src={logo} sx={{ width: 148 }} />
			<Typography variant='h3' sx={{ marginTop: 2 }}>
				404
			</Typography>
			<Typography variant='h6'>Page Not Foound</Typography>
			<Link component={RouterLink} to='/'>
				Home Page
			</Link>
		</RootStyle>
	)
}
export default Page404
