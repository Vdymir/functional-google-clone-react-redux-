import styled from 'styled-components';

export const GoogleInput = styled.div`
    display: flex;
    aling-items: center;
    border: 1px solid lightgray;
    height: 20px;
    padding: 10px 20px;
    border-radius: 999px;
    width: 65vw;
    max-width: 560px;
    margin: 0 auto;
    margin-top: 20px;

    &:hover {
        -webkit-box-shadow: 0px 4px 8px 6px rgba(232, 232, 232, 0.7);
        box-shadow: 4px 4px 8px 6px  rgba(232, 232, 232, 0.7);
    }

    & > .search__inputIcon {
        color: gray;
    }
    & > .search__inputIcon:hover {
        cursor: pointer;
        color: rgba(0,0,0,0.8);
        transition: color .3s ease-in-out;
    }

    & > input {
        flex: 1;
        padding: 10px 20px;
        font-size: medium;
        border: none;

        
    }

    & > input:focus {
        outline: 0px;
    }

`;