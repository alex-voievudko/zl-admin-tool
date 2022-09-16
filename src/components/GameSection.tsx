import styled from 'styled-components'
// MUI
import { Grid, Typography } from '@mui/material'
// types
import { Game } from '../types/game'
// components
import GameItem from './GameItem'

// aditional styles  -----------------------------------------------------------

const GameTitle = styled(Typography)`
	text-transform: capitalize;
	margin-bottom: 16px;
`

const ContentContainer = styled.div`
	/* border: 1px dashed #bdbdbd; */
	padding: 18px 16px;
	background-color: #ffffff;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
		rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`

type GameSectionProps = {
	name: string
	games: Game[] | undefined
}
const GameSection = ({ name, games }: GameSectionProps) => {
	const filteredGames = games?.filter((game) => game.game_code === name)

	return (
		<Grid item xs={4}>
			<ContentContainer>
				<GameTitle variant='h5'>{name}</GameTitle>
				<Grid container spacing={1}>
					{filteredGames?.map((game) => (
						<GameItem key={game.id} game={game} />
					))}
				</Grid>
			</ContentContainer>
		</Grid>
	)
}
export default GameSection
