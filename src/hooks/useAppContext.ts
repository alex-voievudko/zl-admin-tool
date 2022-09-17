import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const useAppContext = () => {
	const context = useContext(AppContext)
	if (!context) throw new Error('Auth context must be use inside AuthProvider')
	return context
}

export default useAppContext
