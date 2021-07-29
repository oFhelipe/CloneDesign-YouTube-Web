import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-top: 56px;
    padding-left: 72px;
    @media(max-width:800px) {
        padding-left: 0;
    }
`