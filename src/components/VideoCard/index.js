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

 import thumbnail from '../../../public/assets/images/thumbnail.png'

function VideoCard() {
    const videoCardRef = useRef(null)
    const videoElement = useRef(null)
    const [ width, setWidth ] = useState(0)
    useEffect(()=>{
        setWidth(videoCardRef.current.offsetWidth)
    },[videoCardRef])
    var timeout
    function playOnHover(){
        timeout = setTimeout(()=> videoElement.current.style.display = "flex", 1000)
    }

    function pauseOnleftHover(){
        if(timeout){
            clearTimeout(timeout)
        }
        videoElement.current.style.display = "none"
    }

    return (
        <Container  ref={videoCardRef} width={width}>
            <ImageVideoContainer>
                <Thumbnail onMouseEnter={playOnHover} onMouseLeave={pauseOnleftHover} >
                    <Image className="thumbnail" alt="thumbnail" layout='fill' src={thumbnail}/>
                    <video autoPlay muted ref={videoElement}>
                        <source src="https://firebasestorage.googleapis.com/v0/b/iscool-api-upload.appspot.com/o/youtube-clone%2Fvideo.mp4?alt=media&token=142bfb3f-607a-4f38-b9d4-b2aab82cd8b5" type="video/mp4"/>
                    </video>
                </Thumbnail>
                <LineOrWatchLaterContainer onMouseEnter={playOnHover} onMouseLeave={pauseOnleftHover}>

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
                    <h3>O Maior Segredo da Nilce! - Hora de Pôr Café (Parte 67)</h3>
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