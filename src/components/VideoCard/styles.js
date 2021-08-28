import styled from 'styled-components'

export const DotsIconContainer = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: background-color 0.1s linear;
	opacity: 0;
	margin-top: -12px;
  &:active {
    background-color: #373737;
  }

	&:hover {
		svg {
			fill: #FFF;
			color: #FFF;
		}
	}

  @media(min-width: 656px) {
    &:not(:first-child) {
      margin-left: 16px;
    }
  }
` 

export const ImageVideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
	position: relative;
	flex: 1;
	@media(min-width:510px) {
        	width: 100%;
    }
`

export const VideoTime = styled.p`
	position: absolute;
	color: #FFF;
	background-color: rgba(0,0,0,0.7);
	padding: 3px 4px;
	font-size: 12px;
	font-weight: 600;
	border-radius:2px;
	bottom: 4px;
	right: 4px;
`

export const LineOrWatchLaterContainer = styled.div`
	position: absolute;
	right: 4px;
	top: 4px;
`


export const LineOrWatchLater = styled.div`
	background-color: rgba(0,0,0,0.7);
	min-height: 28px;
	min-width: 28px;
	border-radius:3px;
	bottom: 4px;
	right: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const LineOrWatchLaterText = styled.div`
	background-color: rgba(0,0,0,0.7);
	height: 28px;
	border-top-left-radius:3px;
	border-bottom-left-radius:3px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 0;
	padding-left: 0;
	padding-right: 0;
	color: #FFF;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 12px;
	overflow: hidden;
	transition: width 0.1s linear;
	white-space: nowrap;
`

export const LineOrWatchLaterBox = styled.div`
	display: flex;
	justify-content: flex-end;
	opacity: 0;
	&:not(:first-child) {
		margin-top: 4px;
	}
	&:hover ${LineOrWatchLaterText}{
		width:100%;
		padding-left: 8px;
		padding-right: 8px;
		transition: width 0.2s linear;
	}
`

export const Container = styled.div`
    cursor: pointer;
    width: 320px;
    margin: auto;
	margin-bottom: 32px;	

		&:hover ${DotsIconContainer}{
			opacity: 1;
		}
		
		&:hover ${LineOrWatchLaterBox}{
			opacity: 1;
		}

		@media(min-width:510px) {
        	width: 95%;
			height: ${(props) => props.width + 'px'};
		}
`

export const Thumbnail = styled.div`
		min-height: 180px;
        width: 320px;
        object-fit: cover;
		position: relative;
		@media(min-width:510px) {
			width: 100%;
			min-height: 180px;
			height: 10vw;
    	}
		@media(min-width:888px) {
			min-height: 160px;
    	}

`

export const InfoAndChannelContainer = styled.div`
    cursor: pointer;
    display: flex;
		margin-top: 16px;
`

export const ChannelIcon = styled.div`
    height: 36px;
    width: 36px;
    border-radius: 50%;
    background-color: #474747;
`

export const VideoInfo = styled.div`
    display: flex;
		flex-direction: column;
		flex: 1;
		margin-left: 10px;

		h3 {
			color: #FFF;
			font-weight: medium !important;
			font-size: 14px;
			margin-bottom: 8px;
			max-height: 28px;
			width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}

		p {
			color: #AAA;
			font-size: 14px;
			
			&:first-child { 
				margin-bottom: 2px;
			}
		}
`