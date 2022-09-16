import React from 'react'
// MUI
import { Typography } from '@mui/material'

type Props = {
	children: React.ReactNode
}

const PageTitle = ({ children }: Props) => {
	return (
		<Typography variant='h4' gutterBottom component='h1'>
			{children}
		</Typography>
	)
}
export default PageTitle
