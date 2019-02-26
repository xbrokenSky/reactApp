import styled from 'styled-components';

const StyledErrorMessage = styled.p.attrs()`
    padding: 5px;
    margin-top: 5px;
    color: red;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid red;
    border-radius: 3px;
    box-shadow: 0 0 1.5px 2px red;
    transition: color 150ms ease, background-color 150ms ease;

    &:hover {
        color: white;
        background-color: red;
    }

    @media all and (min-width:1024px) {
        padding: 5px 15px;
    }
`;

export default StyledErrorMessage;
