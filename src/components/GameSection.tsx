import styled from 'styled-components'
// MUI
import { Box, Typography } from '@mui/material'
// types
import { Game } from '../types/game'
// components
import GameItem from './GameItem'
import { TransformedGame } from '../types/transformedGame'
import ExpandableItem from './ExpandableItem'

// ------------------------ EXTRA STYLES ---------------------------------------

const GameTitle = styled(Typography)`
	text-transform: capitalize;
	font-size: 14px;
	font-weight: 500;
	margin-top: 12px;
	width: 100px;
	margin-bottom: 16px;
	text-align: center;
	margin-bottom: 0;
`

// -----------------------------------------------------------------------------

type GameSectionProps = {
	game: TransformedGame
}
const GameSection = ({ game }: GameSectionProps) => {
	return (
		<Box>
			<ExpandableItem
				environments={game.game_env}
				gameName={game.game_code}
				image={game.image}
			/>
			<GameTitle variant='h5'>{game.game_code}</GameTitle>
		</Box>
	)
}
export default GameSection
