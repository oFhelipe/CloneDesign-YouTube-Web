import { useRef, useEffect, useState } from 'react'
import Image from "next/image";
import { 
    Container,
    ImageVideoContainer,
    Thumbnail,
    InfoAndChannelContainer,
    ChannelIcon,
    VideoInfo,
    DotsIconContainer,
    VideoTime,
    LineOrWatchLaterContainer,
    LineOrWatchLaterBox,
    LineOrWatchLater,
    LineOrWatchLaterText
 } from './styles'
 import { BiDotsVerticalRounded } from 'react-icons/bi'
 import { AiFillClockCircle } from 'react-icons/ai'
 import { HiOutlineMenuAlt3 } from 'react-icons/hi'

function VideoCard() {
    const videoCardRef = useRef(null)
    const [ width, setWidth ] = useState(0)
    useEffect(()=>{
        console.log(videoCardRef.current.offsetWidth)
        setWidth(videoCardRef.current.offsetWidth)
    },[videoCardRef])
    return (
        <Container ref={videoCardRef} width={width}>

            <ImageVideoContainer>
                <Thumbnail>
                    <Image className="thumbnail" alt="thumbnail" layout='fill' src="thumbnail.png" loader={()=> "https://images.unsplash.com/photo-1627442033472-a0eea0c96f98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"}/>
                </Thumbnail>
                <LineOrWatchLaterContainer>

                    <LineOrWatchLaterBox>
                        <LineOrWatchLaterText>Assistir mais tarde</LineOrWatchLaterText>
                        <LineOrWatchLater>
                            <AiFillClockCircle color="#FFF" size={20}/>
                        </LineOrWatchLater>
                    </LineOrWatchLaterBox>
                    <LineOrWatchLaterBox>
                    <LineOrWatchLaterText>Adicionar à fila</LineOrWatchLaterText>
                        <LineOrWatchLater>
                            <HiOutlineMenuAlt3 color="#FFF" size={18}/>
                        </LineOrWatchLater>
                    </LineOrWatchLaterBox>
                </LineOrWatchLaterContainer>
                <VideoTime>10:20</VideoTime>
            </ImageVideoContainer>
            
            <InfoAndChannelContainer>
                <ChannelIcon />
                <VideoInfo>
                    <h3>Brasil tem 19.797.086 casos confirmados e 553.17 mortes por</h3>
                    <p>Cadê a chave?</p>
                    <p>2,2 mi de visualizações • há 2 anos</p>
                </VideoInfo>
                <DotsIconContainer>
                    <BiDotsVerticalRounded color="#AAA" size={24}/>
                </DotsIconContainer>
            </InfoAndChannelContainer>
        
        </Container>
    )    
}

export default VideoCard