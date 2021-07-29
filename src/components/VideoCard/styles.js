import styled from 'styled-components'

export const Container = styled.div`
    cursor: pointer;

`

export const ImageVideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Thumbnail = styled.div`
    * {
        position: relative !important;
        height: 180px !important;
        width: 320px !important;
        object-fit: cover !important;
    }
`

export const VideoChannelContainer = styled.div`
    cursor: pointer;
`