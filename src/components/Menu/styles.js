import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  height: 56px;
  width: 100%;
  background-color: #202020;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  img {
    height: 20px;
    padding-left: 16px !important;
    cursor: pointer;
  }
  padding-left: 8px;
  padding-right: 22px;
`

export const MenuIconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const MenuIcon = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: all 0.1s linear;
  &:active {
    background-color: #373737;
  }

  @media(min-width: 656px) {
    &:not(:first-child) {
      margin-left: 16px;
    }
  }
` 

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  @media(min-width: 656px) {
    justify-content: center;
    margin-left: 9%;
    margin-right: 5%;
    & ${MenuIcon}.lupa {
      display:none;
    }
  }
`

export const SearchInputContainer = styled.div`
  display: none;
  @media(min-width: 656px) {
    display: flex;
    flex: 1;
    min-width: 60px;
  }
`

export const SearchInput = styled.input`
  background-color: #121212;
  border: #313131 1px solid;
  font-size: 16px;
  color: #FFF;
  display: flex;
  flex: 1;
`

export const SearchButton = styled.button`
  background-color: #313131;
  width: 64px;
  height: 30px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const UserIcon = styled.div `
  height: 32px;
  width: 32px;
  border-radius: 16px;
  background-color: #474747;
  margin-left: 11px;
`