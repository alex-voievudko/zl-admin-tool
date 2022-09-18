import React, { createContext, useReducer } from 'react'
import qs from 'qs'
import {
	Event,
	FormData,
	Game,
	State,
	ActionTypes,
	Actions,
	AppContextType,
} from '../types'
import axios from '../utils/axios'

type AppProviderProps = {
	children: React.ReactNode
}

// -----------------------------------------------------------------------------
// INITIAL STATE
const initialState: State = {
	games: null,
	game: null,
	events: null,
	eventsNames: null,
	loading: false,
	error: null,
}

// REDUSER. Maybe I should have used Redux instead as the logic of the reducer
// is a bit complicated here. I was not planning to go with any global state manager
// but there is a case when I need to load events in case link with params is pasted
// to browser window.
const reducer = (state: State, action: Actions): State => {
	switch (action.type) {
		// FETCH ALL GAMES
		case ActionTypes.FETCH_GAMES_LOADING:
			return {
				...state,
				loading: true,
			}
		case ActionTypes.FETCH_GAMES_SUCCESS:
			return {
				...state,
				loading: false,
				games: action.payload,
			}
		case ActionTypes.FETCH_GAMES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		// FETCH GAME BY NAME
		case ActionTypes.FETCH_GAME_LOADING:
			return {
				...state,
				loading: true,
			}
		case ActionTypes.FETCH_GAME_SUCCESS:
			return {
				...state,
				loading: false,
				game: action.payload,
			}
		case ActionTypes.FETCH_GAME_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		// FETCH EVENT NAMES
		case ActionTypes.FETCH_EVENT_NAMES_LOADING:
			return {
				...state,
				loading: true,
			}
		case ActionTypes.FETCH_EVENT_NAMES_SUCCESS:
			return {
				...state,
				loading: false,
				eventsNames: action.payload,
			}
		case ActionTypes.FETCH_EVENT_NAMES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		// FETCH EVENT NAMES
		case ActionTypes.FILTER_EVENTS_LOADING:
			return {
				...state,
				loading: true,
			}
		case ActionTypes.FILTER_EVENTS_SUCCESS:
			return {
				...state,
				loading: false,
				events: action.payload,
			}
		case ActionTypes.FILTER_EVENTS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			}

		default:
			return state
	}
}

// -----------------------------------------------------------------------------
// CONTEXT
const AppContext = createContext<AppContextType>({
	...initialState,
	fetchAllGames: () => Promise.resolve(),
	fetchGameByName: (gameName: string, gameEnv: string) => Promise.resolve(),
	fetchEventNames: () => Promise.resolve(),
	filterEvents: (gameName: string, filterParams: FormData) => Promise.resolve(),
})

// -----------------------------------------------------------------------------
// PROVIDER
const AppProvider = ({ children }: AppProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const fetchAllGames = async () => {
		dispatch({ type: ActionTypes.FETCH_GAMES_LOADING })

		try {
			const response = await axios.get<Game[]>('/games')
			console.log(response.data)
			dispatch({
				type: ActionTypes.FETCH_GAMES_SUCCESS,
				payload: response.data,
			})
		} catch (error) {
			dispatch({ type: ActionTypes.FETCH_GAMES_ERROR, payload: error as Error })
		}
	}

	const fetchGameByName = async (gameName: string, gameEnv: string) => {
		dispatch({ type: ActionTypes.FETCH_GAME_LOADING })
		try {
			const response = await axios.get<Game[]>(
				`/games?game_code=${gameName}&game_env=${gameEnv}`,
			)
			dispatch({
				type: ActionTypes.FETCH_GAME_SUCCESS,
				payload: response.data[0],
			})
		} catch (error) {
			dispatch({ type: ActionTypes.FETCH_GAME_ERROR, payload: error as Error })
		}
	}

	const fetchEventNames = async () => {
		dispatch({ type: ActionTypes.FETCH_EVENT_NAMES_LOADING })
		try {
			const response = await axios.get<Event[]>('/event_names')
			dispatch({
				type: ActionTypes.FETCH_EVENT_NAMES_SUCCESS,
				payload: response.data,
			})
		} catch (error) {
			dispatch({
				type: ActionTypes.FETCH_EVENT_NAMES_ERROR,
				payload: error as Error,
			})
		}
	}

	// I have implemented this function to solve one major issue with API data.
	// Unfortunately, my mock API doesn't support date range filter within a call,
	// so I am getting data by params that API support and then do filtering.
	// This is not the perfect solution I think as I would expect to get filtered
	// data from the server.
	const filterEvents = async (gameName: string, params: FormData) => {
		dispatch({ type: ActionTypes.FILTER_EVENTS_LOADING })
		try {
			const urlParams = {
				game_code: gameName,
				profile_id: params.profileId?.trim(),
				type: params.eventType === 'all' ? null : params.eventType,
			}

			const link = `/events?${qs.stringify(
				{ ...urlParams },
				{ skipNulls: true },
			)}`

			const response = await axios.get<Event[]>(link)

			const startDate = new Date(params.dateFrom!)
			const endDate = new Date(params.dateTo!)

			// filtering the events array based on data range and sorting them
			// to display from recent to oldest.
			const filteredEvents = response.data
				.filter((event) => {
					const date = new Date(event.time!)
					return date >= startDate && date <= endDate
				})
				.sort((a, b) => {
					if (a.time! > b.time!) {
						return -1
					}

					if (a.time! < b.time!) {
						return 1
					}

					return 0
				})

			dispatch({
				type: ActionTypes.FILTER_EVENTS_SUCCESS,
				payload: filteredEvents,
			})
		} catch (error) {
			dispatch({
				type: ActionTypes.FILTER_EVENTS_ERROR,
				payload: error as Error,
			})
		}
	}

	return (
		<AppContext.Provider
			value={{
				...state,
				fetchAllGames,
				fetchGameByName,
				fetchEventNames,
				filterEvents,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

export { AppContext, AppProvider }
