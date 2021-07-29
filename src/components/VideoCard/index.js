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
                    <Image className="thumbnail" alt="thumbnail" layout='fill' src="thumbnail.png" loader={()=> "https://images.unsplash.com/photo-1627442033472-a0eea0c96f98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"}/>
                </Thumbnail>
            </ImageVideoContainer>
            <VideoChannelContainer>
                
            </VideoChannelContainer>
        </Container>
    )    
}

export default VideoCard