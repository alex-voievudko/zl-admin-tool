// MUI
import MUIProvider from './theme'
// route
import Router from './routes'

function App() {
	return (
		<MUIProvider>
			<Router />
		</MUIProvider>
	)
}

export default App
