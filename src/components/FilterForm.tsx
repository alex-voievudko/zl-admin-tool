import React, { useEffect, useState } from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'
import qs from 'qs'
import validator from '@rjsf/validator-ajv6'
import Form from '@rjsf/mui'
import { IChangeEvent } from '@rjsf/core'
import { RJSFSchema, UiSchema } from '@rjsf/utils'
import styled from 'styled-components'
// MUI
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
// types
import { FormData } from '../types/formData'
// aditional styles  -----------------------------------------------------------

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

type FilterFormProps = {}

const FilterForm = (props: FilterFormProps) => {
	console.log('Form rendered')
	const [searchParams, setSearchParams] = useSearchParams()
	const [formData, setFormData] = useState<FormData>({
		profileId: searchParams.get('profileId') || '',
		dateFrom: searchParams.get('dateFrom') || '',
		dateTo: searchParams.get('dateTo') || '',
		eventType: searchParams.get('eventType') || '',
	})

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
				enum: ['foo', 'bar', 'fuzz', 'qux'],
			},
		},
	}

	const handleFormSubmit = (
		{ formData }: IChangeEvent,
		event: React.FormEvent<HTMLFormElement>,
	) => {
		setSearchParams(formData)
	}

	return (
		<FiterForm
			schema={schema}
			validator={validator}
			formData={formData}
			onChange={(e) => {
				setFormData(e.formData)
			}}
			onSubmit={handleFormSubmit}
		>
			<SubmitButton type='submit'>
				<SearchIcon sx={{ width: 32, height: 32, color: '#fff' }} />
			</SubmitButton>
		</FiterForm>
	)
}
export default FilterForm
