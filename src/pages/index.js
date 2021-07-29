import HeadConfig from "../components/HeadConfig";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import VideoCard from "../components/VideoCard";
import VideoList from "../components/VideoList";


export default function Home() {
  return (
    <div>
      <HeadConfig />
      <Nav />
      <Menu />
      <VideoList>
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </VideoList>
    </div>
  )
}
