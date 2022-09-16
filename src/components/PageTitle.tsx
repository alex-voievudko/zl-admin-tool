import React from 'react'
// MUI
import { Typography } from '@mui/material'

type PageTitleProps = {
	children: React.ReactNode
}

const PageTitle = ({ children }: PageTitleProps) => {
	return (
		<Typography variant='h4' gutterBottom component='h1'>
			{children}
		</Typography>
	)
}
export default PageTitle
