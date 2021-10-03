import styled from 'styled-components'

export const Container = styled.nav`
    display: block;
    position: fixed;
    width: 72px;
    top: 56px;
    height: calc(100vh - 56px);
    background-color: #202020;
    z-index: 2;
    @media(max-width:800px) {
        display: none;
    }

    @media(min-width:1312px) {
        width: 240px;
    }

    ul {
        margin-top: 4px;
        @media(min-width:1312px) {
            margin-top: 12px;
        }
    }
`

export const NavItem = styled.li`
    width: 100%;
        height: 72px;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
            background-color:#373737;
        }
        @media(min-width:1312px) {
            flex-direction: row;
            justify-content: flex-start;
            padding-left: 32px;
            height: 40px;
        }
        p.active {
        color: #FFF;
    }
    p {
        color: #909090;
        font-size: 10px;
        margin-top: 8px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        @media(min-width:1312px) {
            font-size: 14px;
            margin-left: 24px;
        }
    }
    &.opitional {
        @media(max-width:1312px) {
            display: none;
        } 
    }
`

export const Separator = styled.li`
    width: 95%;
    height: 1px;
    background-color: rgba(255,255,255,0.1);
    margin-top: 8px;
    margin-bottom: 8px;
    @media(max-width:1312px) {
            display: none;
    } 
`