import styled from 'styled-components'
import { motion } from 'framer-motion'
// MUI
import { Box } from '@mui/material'
// images
import logo from '../assets/zeptolab_logo.png'

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
`
// -----------------------------------------------------------------------------

const LoadingScreen = () => {
	return (
		<RootStyle>
			<motion.div
				animate={{
					scale: [1, 0.9, 0.9, 1, 1],
					opacity: [1, 0.48, 0.48, 1, 1],
				}}
				transition={{
					duration: 2,
					ease: 'easeInOut',
					repeatDelay: 1,
					repeat: Infinity,
				}}
			>
				<Box component='img' src={logo} sx={{ width: 64 }} />
			</motion.div>

			<Box
				component={motion.div}
				animate={{
					scale: [1.2, 1, 1, 1.2, 1.2],
					rotate: [270, 0, 0, 270, 270],
					opacity: [0.25, 1, 1, 1, 0.25],
					borderRadius: ['25%', '25%', '50%', '50%', '25%'],
				}}
				transition={{ ease: 'linear', duration: 3.2, repeat: Infinity }}
				sx={{
					width: 100,
					height: 100,
					borderRadius: '25%',
					position: 'absolute',
					border: '3px solid rgba(168, 205, 56, 0.24)',
				}}
			/>

			<Box
				component={motion.div}
				animate={{
					scale: [1, 1.2, 1.2, 1, 1],
					rotate: [0, 270, 270, 0, 0],
					opacity: [1, 0.25, 0.25, 0.25, 1],
					borderRadius: ['25%', '25%', '50%', '50%', '25%'],
				}}
				transition={{
					ease: 'linear',
					duration: 3.2,
					repeat: Infinity,
				}}
				sx={{
					width: 120,
					height: 120,
					borderRadius: '25%',
					position: 'absolute',
					border: '8px solid rgba(168, 205, 56, 0.24)',
				}}
			/>
		</RootStyle>
	)
}
export default LoadingScreen
