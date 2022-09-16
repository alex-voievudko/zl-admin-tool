import { useEffect, useReducer } from 'react'
import axios from '../utils/axios'

type State<T> = {
	data?: T | null
	loading?: boolean
	error?: Error | null
}

type Action<T> =
	| { type: 'loading' }
	| { type: 'fetched'; payload: T }
	| { type: 'error'; payload: Error }

function useFetch<T = unknown>(url?: string): State<T> {
	const initialState: State<T> = {
		data: null,
		loading: false,
		error: null,
	}

	// reducer
	const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
		switch (action.type) {
			case 'loading':
				return {
					...state,
					loading: true,
				}
			case 'fetched':
				return {
					...state,
					loading: false,
					data: action.payload,
				}
			case 'error':
				return {
					...state,
					loading: false,
					error: action.payload,
				}
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(fetchReducer, initialState)

	useEffect(() => {
		// Do nothing if the url is not given
		if (!url) return

		const fetchData = async () => {
			dispatch({ type: 'loading' })

			try {
				const response = await axios.get<T>(url)
				const data = response.data
				dispatch({ type: 'fetched', payload: data })
			} catch (error) {
				dispatch({ type: 'error', payload: error as Error })
			}
		}

		// call the function
		fetchData()
	}, [url])

	return state
}

export default useFetch
