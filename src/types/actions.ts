import { Game } from './game'
import { Event } from './event'

export enum ActionTypes {
	FETCH_GAMES_LOADING = 'FETCH_GAMES_LOADING',
	FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS',
	FETCH_GAMES_ERROR = 'FETCH_GAMES_ERROR',
	FETCH_GAME_LOADING = 'FETCH_GAME_LOADING',
	FETCH_GAME_SUCCESS = 'FETCH_GAME_SUCCESS',
	FETCH_GAME_ERROR = 'FETCH_GAME_ERROR',
	FETCH_EVENT_NAMES_LOADING = 'FETCH_EVENT_NAMES_LOADING',
	FETCH_EVENT_NAMES_SUCCESS = 'FETCH_EVENT_NAMES_SUCCESS',
	FETCH_EVENT_NAMES_ERROR = 'FETCH_EVENT_NAMES_ERROR',
	FILTER_EVENTS_LOADING = 'FILTER_EVENTS_LOADING',
	FILTER_EVENTS_SUCCESS = 'FILTER_EVENTS_SUCCESS',
	FILTER_EVENTS_ERROR = 'FILTER_EVENTS_ERROR',
}

export type Actions =
	| { type: ActionTypes.FETCH_GAMES_LOADING }
	| { type: ActionTypes.FETCH_GAMES_SUCCESS; payload: Game[] }
	| { type: ActionTypes.FETCH_GAMES_ERROR; payload: Error }
	| { type: ActionTypes.FETCH_GAME_LOADING }
	| { type: ActionTypes.FETCH_GAME_SUCCESS; payload: Game }
	| { type: ActionTypes.FETCH_GAME_ERROR; payload: Error }
	| { type: ActionTypes.FETCH_EVENT_NAMES_LOADING }
	| { type: ActionTypes.FETCH_EVENT_NAMES_SUCCESS; payload: Event[] }
	| { type: ActionTypes.FETCH_EVENT_NAMES_ERROR; payload: Error }
	| { type: ActionTypes.FILTER_EVENTS_LOADING }
	| { type: ActionTypes.FILTER_EVENTS_SUCCESS; payload: Event[] }
	| { type: ActionTypes.FILTER_EVENTS_ERROR; payload: Error }
