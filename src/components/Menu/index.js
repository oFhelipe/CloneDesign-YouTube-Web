import { MdMenu, MdFileUpload } from 'react-icons/md'
import { IoMdSearch, IoMdMic } from 'react-icons/io'
import { CgMenuGridR } from 'react-icons/cg'
import { FaBell } from 'react-icons/fa'
import { 
  Header,
  MenuIcon, 
  MenuIconsContainer, 
  SearchButton, 
  SearchContainer, 
  SearchInput, 
  SearchInputContainer, 
  UserIcon
} from './styles.js'

import logo from '../../../public/assets/images/logo.svg'

import Image from 'next/image'
import Link from 'next/link'

function Menu() {
    return (
      <Header>

        <MenuIconsContainer>
          <MenuIcon>
            <MdMenu color="#FFF" size={24}/>      
          </MenuIcon>
          <Link passHref href="/"><Image alt="logo" src={logo}/></Link>
        </MenuIconsContainer>

        <SearchContainer>
            <SearchInputContainer>
                <SearchInput size="1" type="text" placeholder="Pesquisar"/>
                <SearchButton>
                  <IoMdSearch color="#606060" size={20}/>
                </SearchButton>
              </SearchInputContainer>
            <MenuIcon className="lupa">
              <IoMdSearch color="#FFF" size={24}/>
            </MenuIcon>
            <MenuIcon>
              <IoMdMic color="#FFF" size={24}/>
            </MenuIcon>
          </SearchContainer>

        <MenuIconsContainer>
          <MenuIcon>
            <MdFileUpload color="#FFF" size={24}/>
          </MenuIcon>
          <MenuIcon>
            <CgMenuGridR color="#FFF" size={24}/>
          </MenuIcon>
          <MenuIcon>
            <FaBell color="#FFF" size={18}/>
          </MenuIcon>
          <UserIcon />
        </MenuIconsContainer>
        
      </Header>
    )
}

export default Menu