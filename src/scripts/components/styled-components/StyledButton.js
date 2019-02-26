import styled from 'styled-components';

const StyledButton = styled.button.attrs(({ frontColor }) => {
    return {
        color: frontColor || 'white',
    };
})`
    display: flex;

    width: 34%;

    padding: 5px;

    justify-content: center;
    align-items: center;

    font-size: 14px;

    @media all and (min-width:1024px) {
        width: 24.5%;

        font-size: 1rem;
    }
`;

export default StyledButton;
