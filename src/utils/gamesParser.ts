import { Game } from '../types'

type NewGame = {
	[key: string]: {
		id: string
		image: string
		game_code: string
		game_env: string[]
	}
}

export const gamesParser = (games: Game[] | null) => {
	const transformedGames = games?.reduce((acc: NewGame, game, index) => {
		const { id, game_code, game_env, image } = game
		return {
			...acc,
			[game_code]: {
				id,
				image,
				game_code,
				game_env: [...(acc[game_code]?.game_env || []), game_env],
			},
		}
	}, {})

	return Object.values(transformedGames!)
}
