import  '../../styles/globals.scss'
import { AuthProvider  } from '../contexts/AuthContext'
export default function App({ Component, pageProps }) {
  return( 
  <AuthProvider >
    <Component {...pageProps} />
  </AuthProvider>
  )
}
