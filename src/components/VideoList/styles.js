import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex: 1;
    align-self: center;
    flex-direction: column;
    padding-top: 80px;
    padding-left: 72px;
    max-width:  750px;
    @media(max-width:800px) {
        padding-left: 0;
    }
    
    @media(min-width:510px) {
        display: grid;
        position: relative;
        margin-left: 8px;
        margin-right: 8px;
        margin-bottom: 40px;
        grid-template-columns: 1fr 1fr;
        max-width: 680px;
    }
    
    @media(min-width:888px) {
        width: calc( 100% / 3 - 16 - 0.01px );
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 1057px;
    }

    @media(min-width:1127px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        max-width: 1830px;
    }
  
    @media(min-width:1952px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        max-width: 2145px;
    }
    
    @media(min-width:2288px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        max-width: 98vw;
    }

    @media(min-width:1312px) {
        padding-left: 240px;
    }
`