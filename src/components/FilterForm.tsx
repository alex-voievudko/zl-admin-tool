import { useState } from 'react'
import validator from '@rjsf/validator-ajv6'
import Form from '@rjsf/mui'
import { RJSFSchema } from '@rjsf/utils'
import styled from 'styled-components'
// MUI
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
// types
import { FormData, Event } from '../types'

// ------------------------ EXTRA STYLES ---------------------------------------

const FiterForm = styled(Form)`
	position: relative;

	& .MuiGrid-root {
		& > div.MuiGrid-item {
			flex-basis: calc((100% - 72px) / 3);
		}

		& > div.MuiGrid-item:first-child {
			flex-basis: 100%;
		}
	}
`

const SubmitButton = styled(IconButton)`
	background: rgba(150, 199, 53, 1);
	border-radius: 4px;
	width: 56px;
	height: 56px;
	position: absolute;
	bottom: 10px;
	right: 0;
	transition: background 0.5s ease-out;

	&:hover {
		background: rgba(150, 199, 53, 0.75);
	}
`

// -----------------------------------------------------------------------------

type FilterFormProps = {
	initFormData: FormData
	events: Event[]
	loading: boolean
	onSubmit: (data: any) => void
}

const FilterForm = ({
	initFormData,
	events,
	loading,
	onSubmit,
}: FilterFormProps) => {
	const [formData, setFormData] = useState<FormData>(initFormData)

	const eventList = events.map((event) => event.type)

	const schema: RJSFSchema = {
		type: 'object',
		required: ['profileId', 'dateFrom', 'dateTo'],
		properties: {
			profileId: {
				type: 'string',
				title: 'Profile Id',
			},
			dateFrom: {
				type: 'string',
				title: 'Date From',
				format: 'date',
			},
			dateTo: {
				type: 'string',
				title: 'Date To',
				format: 'date',
			},
			eventType: {
				type: 'string',
				title: 'Event Type',
				enum: ['all', ...eventList],
			},
		},
	}

	return (
		<FiterForm
			schema={schema}
			validator={validator}
			formData={formData}
			onChange={(e) => {
				setFormData(e.formData)
			}}
			onSubmit={(d) => onSubmit(d.formData)}
		>
			<SubmitButton type='submit' disabled={loading}>
				<SearchIcon sx={{ width: 32, height: 32, color: '#fff' }} />
			</SubmitButton>
		</FiterForm>
	)
}
export default FilterForm
