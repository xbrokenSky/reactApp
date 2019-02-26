// import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form.attrs(({ backColor }) => {
    return {
        method: 'POST',
        backgroundColor: backColor || 'rgb(245, 248, 248)',
    };
})`
    display: flex;
    width: 100%;
    margin-top: 10px;
    justify-content: space-between;
    margin-bottom: ${(props) => {
        return props.mrgBtm;
    }};
    background-color: ${(props) => {
        return props.backgroundColor;
    }};
`;

export default StyledForm;
