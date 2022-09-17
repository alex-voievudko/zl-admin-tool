// MUI
import { Stack, Box, Typography } from '@mui/material'
//
import box from '../assets/empty-box.png'

const EmptyState = () => {
	return (
		<Stack
			sx={{
				height: '420px',
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				component='img'
				src={box}
				sx={{ width: '96px', height: '96px', filter: 'grayscale(100%)' }}
			/>
			<Typography variant='h6' sx={{ color: '#696969' }}>
				No data found.
			</Typography>
		</Stack>
	)
}
export default EmptyState
