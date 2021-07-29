import Image from "next/image";
import { 
    Container,
    ImageVideoContainer,
    Thumbnail,
    VideoChannelContainer
 } from './styles'

function VideoCard() {
    return (
        <Container>
            <ImageVideoContainer>
                <Thumbnail>
                </Thumbnail>
            </ImageVideoContainer>
            <VideoChannelContainer>
                
            </VideoChannelContainer>
        </Container>
    )    
}

export default VideoCard