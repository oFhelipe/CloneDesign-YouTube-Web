import styled from 'styled-components'

export const Container = styled.nav`
    display: block;
    position: fixed;
    width: 72px;
    top: 56px;
    height: calc(100vh - 56px);
    background-color: #202020;
    @media(max-width:800px) {
        display: none;
    }


    ul {
        margin-top: 4px;
    }

    ul li {
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
    }

    ul li p.active {
        color: #FFF;
    }
    ul li p {
        color: #909090;
        font-size: 10px;
        margin-top: 8px;
    }
`

export const NavItem = styled.li`
    
`