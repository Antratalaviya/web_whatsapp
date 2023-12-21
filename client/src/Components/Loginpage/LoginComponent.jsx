import { Box, Dialog, List, ListItem, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import qrImage from '../../img/qr.png'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { AuthContext } from '../Context/useAuth';
import { addUser } from '../../Service/app';


const dialogstyle = {
    height: '96%',
    width: '70%',
    marginTop: '13%',
    maxWidth: '70%',
    maxHeight: '100%',
    minWidth: '525px',
    overflow: 'hidden',
    boxShadow: 'unset',
}

const Hr = styled('hr')({
    width: '90%',
    border: 'unset',
    borderTop: '0.1px solid #8080801f',
    marginTop: '20px'
})

const ListStyled = styled(List)`
padding-left : 150px;
color : #3d4845;
font-weight : 500;
font-size : 18px;
& > * {
    padding-bottom : 20px;
}
`
const Title = styled(Typography)`
font-size : 27px;
font-weight : 400;
padding : 70px 0 30px 160px;
color : #3d4845;
`

const ImgBox = styled(Box)`
height : 350px;
width : 350px;
margin-top : 20px;
padding-left : 180px
`

const Image = styled('img')({
    height: '100%',
    width: '100%'
})
const LoginComponent = () => {
    const { setAuth } = useContext(AuthContext);
    const handleSuccess = async (res) => {
        const decoded = jwt_decode(res.credential);
        await addUser(decoded);
        setAuth(decoded);
    };

    const handleError = (res) => {
        console.log('login failed', res)
    }

    return (
        <>
            <Dialog
                open={true}
                PaperProps={{ sx: dialogstyle }}
                hideBackdrop={true}>
                <Box sx={{
                    display: 'flex',
                    position: 'relative',
                    width: '100%'
                }}>
                    <Box>
                        <Title>
                            Use WhatsApp on your computer
                        </Title>
                        <ListStyled>
                            <ListItem>1. Open WhatsApp on your computer</ListItem>
                            <ListItem>2. Tap Manu or Settings and select Linked Device</ListItem>
                            <ListItem>3. Tap on Link a Device</ListItem>
                            <ListItem>4. Point your phone to this screen to capture the QR code</ListItem>
                        </ListStyled>
                    </Box>
                    <ImgBox>
                        <Image src={qrImage} alt="qr_img" />
                        <Box sx={{
                            position: 'absolute',
                            top: '45%',
                            right: '17%'
                        }}>
                            <GoogleLogin
                                onSuccess={handleSuccess}
                                onError={handleError}
                            />
                        </Box>
                    </ImgBox>

                </Box>
                <Hr />
            </Dialog>
        </>
    )
}

export default LoginComponent