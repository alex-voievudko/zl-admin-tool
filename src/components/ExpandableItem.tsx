import styled from 'styled-components'
import Link from './Link'
// ------------------------ EXTRA STYLES ---------------------------------------

const ButtonGroup = styled.div`
	opacity: 0;
	position: absolute;
	z-index: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	transform-origin: 0% 0%;
	right: 8px;
	width: 84px;
	height: 84px;
	transition: opacity 0.8s ease-in-out;
`

const Wrapper = styled.div`
	position: relative;
	display: flex;
	width: 100px;
	height: 100px;
	padding: 8px;
	border-radius: 8px;
	background: #ffffff;
	transition: width 0.4s ease-in-out;
	overflow: hidden;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

	&:hover {
		cursor: pointer;
		width: 192px;
		transition: width 0.4s ease-in-out;
	}

	&:hover ${ButtonGroup} {
		opacity: 1;
		transition: opacity 0.3s ease-in-out;
	}
`

const Image = styled.img`
	position: relative;
	z-index: 100;
	width: 84px;
	height: 84px;
	border-radius: 20px;
`

// -----------------------------------------------------------------------------

type Props = {
	image: string
	environments: string[]
	gameName: string
}

const ExpandableItem = ({ gameName, image, environments }: Props) => {
	return (
		<Wrapper>
			<Image src={image} />
			<ButtonGroup>
				{environments.map((item) => (
					<Link url={`/${gameName}/${item}`}>{item}</Link>
				))}
			</ButtonGroup>
		</Wrapper>
	)
}
export default ExpandableItem
