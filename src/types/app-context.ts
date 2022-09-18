import { Game } from './game'
import { Event } from './event'
import { FormData } from './formData'

export type AppContextType = {
	games: Game[] | null
	game: Game | null
	events: Event[] | null
	eventsNames: Event[] | null
	loading: boolean
	error: Error | null
	fetchAllGames: () => Promise<void>
	fetchGameByName: (gameName: string, gameEnv: string) => Promise<void>
	fetchEventNames: () => Promise<void>
	filterEvents: (gameName: string, params: FormData) => Promise<void>
}
