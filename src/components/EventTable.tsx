// MUI
import {
	Typography,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Chip,
} from '@mui/material'
// types
import { Event } from '../types'

type EventTableProps = {
	title: string
	events: Event[]
}

const EventTable = ({ title, events }: EventTableProps) => {
	return (
		<>
			<Typography variant='h5' sx={{ marginTop: 4, marginBottom: 4 }}>
				{title}: {events.length}
			</Typography>
			<TableContainer sx={{ overflowY: 'scroll', maxHeight: '420px' }}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Type</TableCell>
							<TableCell>Time</TableCell>
							<TableCell sx={{ width: '37%' }}>Parameters</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{events.map((event) => (
							<TableRow key={event.id}>
								<TableCell>{event.type}</TableCell>
								<TableCell>{event.time}</TableCell>
								<TableCell>
									{event.parameters?.map((param, index) => (
										<Chip
											key={param + index}
											label={param}
											sx={{ marginRight: 1 }}
										/>
									))}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}
export default EventTable
