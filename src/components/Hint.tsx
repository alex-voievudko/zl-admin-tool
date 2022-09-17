// MUI
import { Typography } from '@mui/material'

type HintProps = {
	gameName: string
}

const Hint = ({ gameName }: HintProps) => {
	const getText = (gameName: string): string => {
		switch (gameName) {
			case 'cats':
				return 'Please use id: 92860d7a-780a-445b-ae07-2554d113dfd9 and date range: 01-01-2022 ---> 17-09-2022 to test filters'
			case 'king-of-thieves':
				return 'Please use id: c221f3fe-66c9-49cf-9413-0688316590f0 and date range: 01-01-2022 ---> 17-09-2022 to test filters'
			case 'overcrowded-tycoon':
				return 'Please use id: bf911f9a-71b6-49ac-990f-0f98370693ea and date range: 01-01-2022 ---> 17-09-2022 to test filters'
			case 'downhill-smash':
				return 'Please use id: 9e74c119-99f6-4eb5-8150-d1809c068e6b and date range: 01-01-2022 ---> 17-09-2022 to test filters'
			case 'bullet-echo':
				return 'Please use id: 16a0584f-1eba-4838-844a-3f7a19ea3bb9 and date range: 01-01-2022 ---> 17-09-2022 to test filters'
			case 'om-nom-run':
				return 'Please use id: 69f30bf3-a270-44b7-a1b4-bbaca355cf55 and date range: 01-01-2022 ---> 17-09-2022 to test filters'
			case 'cut-the-rope':
				return 'Please use id: 333603e5-af0e-4556-ab65-0550c9268877 and date range: 01-01-2022 ---> 17-09-2022 to test filters'

			default:
				return gameName
		}
	}

	return (
		<Typography
			variant='caption'
			display='block'
			sx={{ backgroundColor: '#ebebeb', padding: '4px 12px' }}
		>
			{getText(gameName!)}
		</Typography>
	)
}
export default Hint
