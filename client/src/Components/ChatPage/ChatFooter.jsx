import { Box, InputBase, styled } from '@mui/material'
import React, { useEffect } from 'react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { uploadFile } from '../../Service/app';

const Component = styled(Box)`
padding-left : 10px;
& > * {
    padding-right : 15px;
    font-size : 27px;
    color : #54656f;
}
`
const InputContainer = styled(Box)`
width : 80%;
background : #ffffff;
padding : 2px 12px;
border-radius : 8px;
border : 1px solid #ffffff;
`
const InputField = styled(InputBase)`
font-size : 13px;
.css-yz9k0d-MuiInputBase-input{
    color : #54656f;
}
`
const ChatFooter = ({ setValue, sendText, value, file, setFile, setImage }) => {
    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append('name', file.name);
                data.append('file', file)

                const res = await uploadFile(data);
                setImage(res?.data);
            }
        }
        getImage();
    }, [file, setImage])

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }

    return (
        <Box sx={{
            width: '100%',
            height: '52px',
            bgcolor: '#F0F2F5',
            display: 'flex',
            alignItems: 'center',
            borderLeft: '1px solid #d1d7db',
            padding: '0 16px'
        }}>
            <Component>
                <InsertEmoticonIcon />
                <label htmlFor='fileInput'>
                    <AddIcon />
                </label>
                <input
                    type='file'
                    id='fileInput'
                    style={{ display: 'none' }}
                    onChange={(e) => onFileChange(e)
                    }
                />
            </Component>
            <InputContainer>
                <InputField
                    placeholder='Type a message'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => sendText(e)} />
            </InputContainer>
            <Component>
                <KeyboardVoiceIcon />
            </Component>
        </Box>
    )
}

export default ChatFooter