// MUI
import { Box, Container, Stack, Grid } from '@mui/material'
// hooks
import useFetch from '../hooks/useFetch'
// types
import { Game } from '../types/game'
// components
import PageTitle from '../components/PageTitle'
import FilterForm from '../components/FilterForm'

type Props = {}
const GamePage = (props: Props) => {
	return (
		<Container maxWidth='lg'>
			<Stack direction='column'>
				<Box marginTop={8} marginBottom={4}>
					<PageTitle>Search profile events</PageTitle>
				</Box>
				<Grid container spacing={4}>
					<Grid item xs={2}></Grid>
					<Grid item xs={10}>
						<FilterForm />
					</Grid>
				</Grid>
			</Stack>
		</Container>
	)
}
export default GamePage
