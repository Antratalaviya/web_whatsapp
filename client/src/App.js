import './App.css';
import AuthProvider from './Components/Context/useAuth';
import Messanger from './Components/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientId = '960051072640-mkbpa0o75fvnbbtimcq0i2mvbdcr2b0i.apps.googleusercontent.com';
  return (

    <>
      <AuthProvider>
        <GoogleOAuthProvider
          clientId={clientId}
        >
          <Messanger />
        </GoogleOAuthProvider>
      </AuthProvider>

    </>
  );
}

export default App;
