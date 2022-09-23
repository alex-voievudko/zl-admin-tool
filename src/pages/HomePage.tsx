import { useEffect } from 'react'
import styled from 'styled-components'
// MUI
import { Box, Container, Stack, Grid } from '@mui/material'
// hooks
import useAppContext from '../hooks/useAppContext'
// components
import PageTitle from '../components/PageTitle'
import GameSection from '../components/GameSection'
import LoadingScreen from '../components/LoadingScreen'
import ErrorState from '../components/ErrorState'
import { gamesParser } from '../utils/gamesParser'

// ------------------------ EXTRA STYLES ---------------------------------------

const GridStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 200px);
	gap: 16px;
`

// -----------------------------------------------------------------------------

const HomePage = () => {
	console.log('HOME PAGE')
	const { loading, error, games, fetchAllGames } = useAppContext()

	useEffect(() => {
		fetchAllGames()
	}, [])

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
						<GridStyle>
							{gamesParser(games).map((game) => (
								<GameSection key={game.id} game={game} />
							))}
						</GridStyle>
					</Stack>
				)}
			</Container>
		</>
	)
}
export default HomePage
