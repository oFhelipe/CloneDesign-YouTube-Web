import { IoCompassOutline } from 'react-icons/io5'
import { MdOutlineWatchLater, MdVideoLibrary, MdHomeFilled, MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineHistory, MdOutlinePlaylistPlay } from 'react-icons/md'
import { CgPlayButtonR } from 'react-icons/cg'
import { AiOutlineLike } from 'react-icons/ai'
import { Container, NavItem, Separator } from './styles'

export default function Nav(){
    return (
        <Container>
            <ul>
                <NavItem>
                    <MdHomeFilled color="#FFF" size={24} />
                    <p className="active">Início</p>
                </NavItem>
                <NavItem>
                    <IoCompassOutline color="#909090" size={24} />
                    <p>Explorar</p>
                </NavItem>
                <NavItem>
                    <MdOutlineSubscriptions color="#909090" size={24} />
                    <p>Inscrições</p>
                </NavItem>
                <Separator />
                <NavItem>
                    <MdOutlineVideoLibrary color="#909090" size={24} />
                    <p>Biblioteca</p>
                </NavItem>
                <NavItem className="opitional">
                    <MdOutlineHistory color="#909090" size={24} />
                    <p>Histórico</p>
                </NavItem>
                <NavItem className="opitional">
                    <CgPlayButtonR color="#909090" size={24} />
                    <p>Seus videos</p>
                </NavItem>
                <NavItem className="opitional">
                    <MdOutlineWatchLater color="#909090" size={24} />
                    <p>Assistir mais tarde</p>
                </NavItem>
                <NavItem className="opitional">
                    <AiOutlineLike color="#909090" size={24} />
                    <p>Vídeos marcados como {'"Gostei"'}</p>
                </NavItem>
                <NavItem className="opitional">
                    <MdOutlinePlaylistPlay color="#909090" size={24} />
                    <p>Favoritos</p>
                </NavItem>
                <Separator />
            </ul>
        </Container>
    );
}