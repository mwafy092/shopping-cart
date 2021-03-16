import styled from 'styled-components';

export const Wrapper = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
    border: 1px solid #777;
    border-radius: 10px;
    height: 90%;
    padding: 1rem;
    margin: 1rem;
    button {
        border-radius: 5px;
        background-color: dodgerblue;
        color: #fff;
    }
    button:hover {
        color: dodgerblue;
    }
    img {
        max-width: 200px;
        object-fit: cover;
        border-radius: 5px;
        margin: auto;
    }
`;
