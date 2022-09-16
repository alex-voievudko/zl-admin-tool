import { useRoutes } from 'react-router-dom'
// pages
import HomePage from '../pages/HomePage'
import GamePage from '../pages/GamePage'
import Page404 from '../pages/Page404'

const Router = () => {
	return useRoutes([
		{ path: '/', element: <HomePage /> },
		{ path: ':gameName/:gameEnv', element: <GamePage /> },
		{ path: '*', element: <Page404 /> },
	])
}

export default Router
