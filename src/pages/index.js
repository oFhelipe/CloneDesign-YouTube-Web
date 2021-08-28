import HeadConfig from "../components/HeadConfig";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import VideoCard from "../components/VideoCard";
import VideoList from "../components/VideoList";


export default function Home() {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <HeadConfig />
      <Menu />
      <Nav />
      <VideoList>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </VideoList>
    </div>
  )
}
