// MUI
import { Stack, Box, Typography } from '@mui/material'
//
import error from '../assets/notification.png'

const ErrorState = () => {
	return (
		<Stack
			sx={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				component='img'
				src={error}
				sx={{
					widht: 148,
					height: 148,
					filter: 'grayscale(100%)',
					marginBottom: 2,
				}}
			/>
			<Typography variant='h4' color='error'>
				Error!
			</Typography>
			<Typography variant='h6' sx={{ color: '#696969' }}>
				Something went wrong. Please try again later.
			</Typography>
		</Stack>
	)
}
export default ErrorState
