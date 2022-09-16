import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'
// MUI
import { Grid, Box, Typography } from '@mui/material'

// types
import { Game } from '../types/game'

// aditional styles  -----------------------------------------------------------

const Link = styled(RouterLink)`
	display: flex;
	flex-direction: column;
	text-decoration: none;
	cursor: pointer;
	align-items: center;
	justify-content: center;
	width: 84px;
	color: inherit;
	position: relative;
	transition: all 0.2s ease-in-out;

	img {
		width: 100%;
		border-radius: 24px;
	}

	h6 {
		text-transform: capitalize;
		font-weight: 500;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		text-align: center;
		color: #ffffff;
		background-color: rgba(0, 0, 0, 0.8);
		border-bottom-left-radius: 24px;
		border-bottom-right-radius: 24px;
	}

	&:hover {
		transform: scale(1.1);
	}
`

type Props = {
	game: Game
}

const GameItem = ({ game }: Props) => {
	return (
		<Grid item xs={4}>
			<Link to={`/${game.game_code}/${game.game_env}`}>
				<Box component='img' src={game.image}></Box>
				<Typography variant='subtitle1'>{game.game_env}</Typography>
			</Link>
		</Grid>
	)
}
export default GameItem
