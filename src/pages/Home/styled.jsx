import styled from 'styled-components'

export const Container = styled.div`
    background-color: #fff;
    border: 1px solid #cfcfcf;
    border-radius: 10px;
    padding: 20px;

    h1 {
        color: #3d3d3d;
    }

    input {
        height: 35px;
        border-radius: 50px;
        border: 1px solid #cfcfcf;
        margin-top: 30px;
        outline: none;
        padding-left: 15px;
    }
`

export const AddButton = styled.button`
    background-color: #91ff36;
    color: #181818;
    height: 35px;
    padding: 10px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin-left: 10px;

    &:hover {
        opacity: 0.8;
    }
`

export const Product = styled.div`
    background-color: #d6d6d6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25px;
    border-radius: 10px;
    margin-top: 10px;
    padding: 0 10px;

    p {
        text-transform: capitalize;
        color: #3d3d3d;
    }
`

export const TrushButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 15px;
`
