// MUI
import { Box, Container, Stack, Grid } from '@mui/material'
// hooks
import useFetch from '../hooks/useFetch'
// types
import { Game } from '../types/game'
// components
import PageTitle from '../components/PageTitle'
import GameSection from '../components/GameSection'
import LoadingScreen from '../components/LoadingScreen'

const HomePage = () => {
	// Getting data from the server using custom hook
	const { data: games, loading, error } = useFetch<Game[]>('/games')

	// Getting unique array of names
	const gameNames = games?.map((game) => game.game_code)
	const uniqueNames = gameNames?.filter(
		(game, index, games) => games.indexOf(game) === index,
	)

	return (
		<>
			{loading && <LoadingScreen />}
			{games && (
				<Container maxWidth='lg'>
					<Stack direction='column'>
						<Box marginTop={8} marginBottom={4}>
							<PageTitle>Select a Game</PageTitle>
						</Box>
						<Grid container spacing={3}>
							{uniqueNames?.map((name) => (
								<GameSection key={name} games={games} name={name} />
							))}
						</Grid>
					</Stack>
				</Container>
			)}
		</>
	)
}
export default HomePage
