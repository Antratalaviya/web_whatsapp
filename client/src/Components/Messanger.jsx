import React, { useContext } from 'react'
import LoginComponent from './Loginpage/LoginComponent'
import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { AuthContext } from './Context/useAuth';
import ChatDialog from './ChatPage/ChatDialog';

const Component = styled(Box)`
height : 100vh;
background: rgb(222, 221, 220);
`
const Header = styled(AppBar)`
height : 220px;
background-color : #00a884;
box-shadow : unset;
position : relative;
`
const Messanger = () => {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <Component>
        {auth ? (
          <Header sx={{
            height: '130px'
          }}>
            <Toolbar>
              <ChatDialog />
            </Toolbar>
          </Header>
        ) : (
          <Header>
            <Toolbar>
              <Box sx={{
                height: "12%",
                display: 'flex',
                alignItems: 'center',
                mt: '40px',
              }}>
                <WhatsAppIcon
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{
                    marginLeft: '260px',
                    fontSize: '45px',
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 700,
                    ml: '10px',
                    fontSize: '15px',
                  }}
                >
                  WHATSAPP WEB
                </Typography>
              </Box>
              <LoginComponent />
            </Toolbar>
          </Header>
        )}
      </Component>

    </>
  )
}

export default Messanger