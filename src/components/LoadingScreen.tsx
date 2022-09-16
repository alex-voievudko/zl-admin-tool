import styled from 'styled-components'
// MUI

// aditional styles  -----------------------------------------------------------

const RootStyle = styled.div`
	right: 0;
	bottom: 0;
	z-index: 99999;
	width: '100%';
	height: '100%';
	position: 'fixed';
	display: 'flex';
	align-items: 'center';
	justify-content: 'center';
`

const LoadingScreen = () => {
	return <RootStyle>LoadingScreen</RootStyle>
}
export default LoadingScreen
