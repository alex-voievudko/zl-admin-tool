import { useParams } from 'react-router-dom'
import styled from 'styled-components'
// MUI
import {
	Box,
	Container,
	Stack,
	Grid,
	Typography,
	Chip,
	Badge,
} from '@mui/material'
// hooks
import useFetch from '../hooks/useFetch'
// types
import { Game } from '../types/game'
// components
import PageTitle from '../components/PageTitle'
import FilterForm from '../components/FilterForm'
import LoadingScreen from '../components/LoadingScreen'

const GamePage = () => {
	const { gameName, gameEnv } = useParams()
	console.log(gameName)
	const {
		data: game,
		loading,
		error,
	} = useFetch<Game[]>(`/games?game_code=${gameName}&game_env=${gameEnv}`)

	return (
		<>
			{loading && <LoadingScreen />}
			{game && (
				<Container maxWidth='lg'>
					<Stack direction='column'>
						<Box marginTop={8} marginBottom={4}>
							<PageTitle>Search profile events</PageTitle>
						</Box>
						<Grid container spacing={4}>
							<Grid item xs={2}>
								<Box
									component='img'
									src={game[0].image}
									width='100%'
									borderRadius='24px'
								/>
							</Grid>
							<Grid item xs={10}>
								<Stack direction='row' gap={2}>
									<Typography variant='body1'>
										{game[0].game_code.toUpperCase()}
									</Typography>
									<Chip
										size='small'
										label={game[0].game_env.toUpperCase()}
										sx={{
											backgroundColor: '#95c634',
											fontWeight: 600,
										}}
									/>
								</Stack>

								<FilterForm />
							</Grid>
						</Grid>
					</Stack>
				</Container>
			)}
		</>
	)
}
export default GamePage
