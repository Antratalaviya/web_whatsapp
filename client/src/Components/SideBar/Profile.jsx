import { Box, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/useAuth'

const Component = styled(Box)`
background : #F0F2F5;
height : 100%
`

const ImageContainer = styled(Box)`
display : flex;
justify-content : center;
`;

const Image = styled('img')({
    height: '200px',
    width: '200px',
    borderRadius: '50%',
    margin: '28px 0'
});

const BoxWrapper = styled(Box)`
height : 60px;
background : #fff;
box-shadow : 0 1px 3px #f0f2f5;
padding : 10px 0;
& > :first-of-type {
    color : #008069;
    padding : 0 30px 10px 30px;
    font-size : 14px;
}
& > :last-child {
    font-size : 14px;
    padding : 7px 30px 14px 30px;
    color : #3b4a54;
}
`
const Profile = () => {

    const { auth } = useContext(AuthContext);

    return (
        <>
            <Component>
                <ImageContainer>
                    <Image src={auth.picture} alt="dp" />
                </ImageContainer>
                <BoxWrapper>
                    <Typography>Your name</Typography>
                    <Typography>{auth.name}</Typography>
                </BoxWrapper>
                <Box sx={{
                    height: '60px',
                    padding: '10px 30px 0 30px'
                }}>
                    <Typography sx={{
                        color: '#667781',
                        fontSize: '12px'
                    }}>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
                </Box>
                <BoxWrapper>
                    <Typography>About</Typography>
                    <Typography>Be the one and only</Typography>
                </BoxWrapper>
            </Component>
        </>
    )
}

export default Profile