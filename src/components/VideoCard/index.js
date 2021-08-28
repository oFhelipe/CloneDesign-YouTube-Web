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
                        <source src="https://vod-progressive.akamaized.net/exp=1630202866~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3782%2F21%2F543910236%2F2579406034.mp4~hmac=47de881b883f2f2fc06fd76202e7a4ed2a46c7d704cd9cb1610068439c03e12a/vimeo-prod-skyfire-std-us/01/3782/21/543910236/2579406034.mp4?filename=Bike+-+72566.mp4" type="video/mp4"/>
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