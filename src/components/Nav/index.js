import { IoMdHome, IoMdCompass } from 'react-icons/io'
import { MdSubscriptions, MdVideoLibrary } from 'react-icons/md'
import { Container } from './styles'

export default function Nav(){
    return (
        <Container>
            <ul>
                <li>
                    <IoMdHome color="#FFF" size={24} />
                    <p className="active">Início</p>
                </li>
                <li>
                    <IoMdCompass color="#909090" size={24} />
                    <p>Explorar</p>
                </li>
                <li>
                    <MdSubscriptions color="#909090" size={24} />
                    <p>Inscrições</p>
                </li>
                <li>
                    <MdVideoLibrary color="#909090" size={24} />
                    <p>Biblioteca</p>
                </li>
            </ul>
        </Container>
    );
}