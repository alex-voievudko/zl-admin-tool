import { Game } from './game'
import { Event } from './event'

export type State = {
	games: Game[] | null
	game: Game | null
	events: Event[] | null
	eventsNames: Event[] | null
	loading: boolean
	error: Error | null
}
