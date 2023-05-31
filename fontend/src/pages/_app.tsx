import  '../../styles/globals.scss'
import { AuthProvider  } from '../contexts/AuthContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return( 
  <AuthProvider >
    <Component {...pageProps} />
    <ToastContainer autoClose={3000} />
  </AuthProvider>
  )
}
