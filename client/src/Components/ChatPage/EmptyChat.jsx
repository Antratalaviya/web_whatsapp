import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const Container = styled(Box)`
height : 100vh;
display : flex;
align-items : center;
justify-content : center;
flex-direction : column;
background : #f0f2f5;
`

const Image = styled('img')({
    width: '400px',
    marginTop: '-100px',
    mixBlendMode: 'darken'
})

const Title = styled(Typography)`
font-size : 32px;
color : #41525d;
font-family : inherit;
margin : 10px 0;
`
const Text = styled(Typography)`
color : #667781;
font-size : 14px;
`
const EmptyChat = () => {
    return (
        <>
            <Container>
                <Image src="https://blog.ultramsg.com/wp-content/uploads/2022/01/1_.webp" alt="welcome_page" />
                <Title>WhatsApp Web</Title>
                <Text>Send and receive messages without keeping your phone online.</Text>
                <Text>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</Text>
            </Container>
        </>
    )
}

export default EmptyChat