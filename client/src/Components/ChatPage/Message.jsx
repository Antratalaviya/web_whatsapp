import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { downloadMedia, formatDate } from '../../Utils/common-utils'
import { AuthContext } from '../Context/useAuth'
import pdfIcon from '../../img/pdf-file.svg';
import GetAppIcon from '@mui/icons-material/GetApp';
import MsgDelete from './MsgDelete'

const Own = styled(Box)`
max-width : 60%;
margin-left : auto;
width : fit-content;
background : #D0FAD1;
display : flex;
word-break : break-word;
line-height : 1.1rem;
border-radius : 7px;
margin-bottom : 2px;
box-shadow : 0 1px 0 #91919138;
}

`
const Text = styled(Typography)`
font-size : 13px;
padding : 6px 7px 8px 9px;
`
const Time = styled(Typography)`
font-size : 10px;
padding-right : 5px;
color : #667781;
margin-top : 13px;
word-break : keep-all;
`

const Wrapper = styled(Box)`
background : #ffffff;
max-width : 60%;
width : fit-content;
display : flex;
word-break : break-word;
line-height : 1.1rem;
border-radius : 7px;
margin-bottom : 2px;
box-shadow : 0 1px 0 #91919138;
`
const DowldIcon = styled(GetAppIcon)({
    margin: '0 20px',
    fontSize: '20px',
    padding: '3px',
    color: '#979696',
    border: '1px solid #979696',
    borderRadius: '50%'
})

const Message = ({ message }) => {
    const { auth } = useContext(AuthContext);

    return (
        <div key={message._id}>
            {
                auth.sub === message.senderId ?
                    <Own sx={{
                        '&:hover > :last-child': {
                            display: 'block',
                            transition: '1s easy 2s'
                        },
                        position: 'relative',
                    }}>
                        {
                            message.type === 'file' ?
                                <ImageMessage
                                    message={message}
                                    background='#a6ca9f4f'
                                    color='#D0FAD1'
                                />
                                :
                                <TextMessage message={message} />
                        }
                        <Box sx={{
                            display: 'none',
                            position: 'absolute',
                            top: 1,
                            right: 1,
                            cursor: 'pointer'
                        }}>
                            <MsgDelete color='#a3a3a3' message={message} />
                        </Box>
                    </Own>
                    :
                    <Wrapper sx={{
                        '&:hover > :last-child': {
                            display: 'block',
                            transition: '1s easy 2s'
                        },
                        position: 'relative',
                    }}>
                        {
                            message.type === 'file' ?
                                <ImageMessage message={message} background='#EBE9E9' color='#EBE9E9' />
                                :
                                <TextMessage message={message} />
                        }
                        <Box sx={{
                            display: 'none',
                            position: 'absolute',
                            top: 1,
                            right: 1,
                            cursor: 'pointer'
                        }}>
                            <MsgDelete color='#9a9a9a' message={message} />
                        </Box>
                    </Wrapper>
            }

        </div>
    )
}

const TextMessage = ({ message }) => {
    return (
        <>
            <Text>{message.text}</Text>
            <Time>{formatDate(message.createdAt)}</Time>
        </>
    )
}
const ImageMessage = ({ message, background, color }) => {
    return (
        <>
            {
                message.text.includes('pdf') ?
                    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', margin: '2px 2px 15px 2px', background: background, borderRadius: '10px', paddingRight: '10px' }}>
                            <img src={pdfIcon} alt='pdf' style={{ width: 80 }} />
                            <Typography sx={{ fontSize: '14px' }}>{(message.text.split('/').pop()).split('-').pop()}</Typography>
                            <DowldIcon onClick={(e) => downloadMedia(e, message.text)} />
                        </Box>
                        <Time sx={{ position: 'absolute', right: 0, bottom: '0' }}>{formatDate(message.createdAt)}</Time>
                    </Box>
                    :
                    <Box sx={{ position: 'relative', border: `2px solid ${color}`, borderRadius: '7px' }}>
                        <DowldIcon
                            sx={{ position: 'absolute', right: '0px', bottom: '20px' }}
                            onClick={(e) => downloadMedia(e, message.text)}
                        />
                        <img style={{ width: 300, height: '100%', borderRadius: '10px', objectFit: 'cover' }} src={message.text} alt={message.text} />
                        <Time sx={{ position: 'absolute', right: '2px', bottom: '0', }}>{formatDate(message.createdAt)}</Time>
                    </Box>
            }
        </>
    )
}

export default Message