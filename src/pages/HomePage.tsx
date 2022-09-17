import { useEffect } from 'react'
// MUI
import { Box, Container, Stack, Grid } from '@mui/material'
// hooks
import useAppContext from '../hooks/useAppContext'
// components
import PageTitle from '../components/PageTitle'
import GameSection from '../components/GameSection'
import LoadingScreen from '../components/LoadingScreen'
import ErrorState from '../components/ErrorState'

const HomePage = () => {
	console.log('HOME PAGE')
	const { loading, error, games, fetchAllGames } = useAppContext()

	useEffect(() => {
		fetchAllGames()
	}, [])

	// Getting unique array of names to use as title for game groups
	const gameNames = games?.map((game) => game.game_code)
	const uniqueNames = gameNames?.filter(
		(game, index, games) => games.indexOf(game) === index,
	)

	return (
		<>
			{loading && <LoadingScreen />}

			<Container maxWidth='lg'>
				{error && <ErrorState />}
				{games && (
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
				)}
			</Container>
		</>
	)
}
export default HomePage
