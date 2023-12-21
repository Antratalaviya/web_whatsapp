import { Box, InputBase, styled } from '@mui/material'
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const SearchBox = styled(Box)`
display : flex;
align-items : center;
height : 35px;
border-radius : 8px;
background-color : #F0F2F5;
padding : 0px 10px 0 15px;
width : 100%;
margin-left : 10px;
& > svg{
    font-size : 17px;
}
`
const InputField = styled(InputBase)`
font-size : 12px;
letter-space : 1px;
width : 100%;
padding-left : 25px;
& > .css-yz9k0d-MuiInputBase-input {
    color : #54656f;
}

`
const Component = styled(Box)`
height : 49px;
width : 100%;
display : flex;
color : #54656f;
align-items : center;
& > svg {
    font-size : 17px;
    padding : 0 10px;
}
`
const Hr = styled('hr')({
    border: 'unset',
    borderBottom: '.1px solid #F0F2F5',
    margin: 'unset'
})
const Search = ({ setText }) => {

    return (
        <>
            <Component>
                <SearchBox>
                    <SearchIcon />
                    <InputField
                        placeholder='Search or start new chat'
                        onChange={(e) => setText(e.target.value)} />
                </SearchBox>
                <FilterListIcon />
            </Component>
            <Hr />
        </>
    )
}

export default Search