import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #aaa;
    padding: 1rem;
    div {
        flex: 1;
        
    }
    img {
        height: 120px;
    
    }
    .information,
    .buttons {
        display: flex;
        justify-content-space-between;
        
    }
    .buttons {
        display:flex;
        justify-content;space-between;
        align-items:center;
    }
    .buttons p {
        margin:1rem;
    }
`;
