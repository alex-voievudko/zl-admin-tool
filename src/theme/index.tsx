import { CssBaseline, StyledEngineProvider } from '@mui/material'
import React from 'react'

type Props = {
	children: React.ReactNode
}

const MUIProvider = ({ children }: Props) => {
	return (
		<StyledEngineProvider injectFirst>
			<CssBaseline />
			{children}
		</StyledEngineProvider>
	)
}
export default MUIProvider
