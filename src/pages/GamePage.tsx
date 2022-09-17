import { useEffect, useMemo } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
// MUI
import { Box, Container, Stack, Grid, Typography, Chip } from '@mui/material'
// hooks
import useAppContext from '../hooks/useAppContext'
// types
import { FormData } from '../types'
// components
import PageTitle from '../components/PageTitle'
import FilterForm from '../components/FilterForm'
import LoadingScreen from '../components/LoadingScreen'
import EventTable from '../components/EventTable'
import Hint from '../components/Hint'
import EmptyState from '../components/EmptyState'
import ErrorState from '../components/ErrorState'

const GamePage = () => {
	console.log('GAME PAGE')
	const [searchParams, setSearchParams] = useSearchParams()
	const { gameName, gameEnv } = useParams()
	const {
		game,
		eventsNames,
		events,
		loading,
		error,
		fetchGameByName,
		fetchEventNames,
		filterEvents,
	} = useAppContext()

	const initFormData = useMemo<FormData>(() => {
		return {
			profileId: searchParams.get('profileId') || '',
			dateFrom: searchParams.get('dateFrom') || '',
			dateTo: searchParams.get('dateTo') || '',
			eventType: searchParams.get('eventType') || 'all',
		}
	}, [searchParams])

	useEffect(() => {
		fetchGameByName(gameName!, gameEnv!)
		fetchEventNames()
	}, [])

	// runs on start only if we have params in url
	useEffect(() => {
		if (
			initFormData.profileId !== '' &&
			initFormData.eventType !== '' &&
			initFormData.dateFrom !== '' &&
			initFormData.dateTo !== ''
		) {
			filterEvents(gameName!, initFormData)
		}
	}, [])

	const handleFormSubmit = async (formData: any) => {
		setSearchParams(formData)
		filterEvents(gameName!, formData)
	}

	return (
		<>
			{loading && <LoadingScreen />}

			<Container maxWidth='lg'>
				{error && <ErrorState />}
				{game && eventsNames && (
					<Stack direction='column'>
						<Box marginTop={8} marginBottom={4}>
							<PageTitle>Search profile events</PageTitle>
						</Box>
						<Grid container spacing={4}>
							<Grid item xs={2}>
								<Box
									component='img'
									src={game.image}
									width='100%'
									borderRadius='24px'
								/>
							</Grid>
							<Grid item xs={10}>
								<Stack direction='row' gap={2}>
									<Typography variant='body1'>
										{game.game_code.toUpperCase()}
									</Typography>
									<Chip
										size='small'
										label={game.game_env.toUpperCase()}
										sx={{
											backgroundColor: '#95c634',
											fontWeight: 600,
										}}
									/>
									<Hint gameName={gameName!} />
								</Stack>

								<FilterForm
									initFormData={initFormData}
									events={eventsNames}
									loading={loading}
									onSubmit={handleFormSubmit}
								/>
							</Grid>
						</Grid>
						{events && (
							<EventTable title='Profile events found' events={events} />
						)}
						{events && events.length === 0 ? <EmptyState /> : null}
					</Stack>
				)}
			</Container>
		</>
	)
}
export default GamePage
