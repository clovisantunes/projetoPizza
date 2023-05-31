import { useContext, FormEvent, useState } from 'react';
import Head from 'next/head'
import logoIMg from '../../public/logo.svg';
import styles from '../../styles/Home.module.scss';
import Image from 'next/image';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/Button/Index';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

import Link from 'next/link';
import { canSSRGuest } from '../utils/canSSRGuest';

export default function Home() {
  const {signIn} = useContext(AuthContext);

  const [ email, setEmail ] = useState('');
  const [ password, setPassword] = useState('');

  const [ loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent ){
    event.preventDefault();

    if(email == '' || password == ''){
    toast.warning("Preencha todos os campoas")
      return;
    }
    setLoading(true)

    let data = {
      email,
      password
    }
    await signIn(data)

    setLoading(false)
  }

  return (
   <>
    <Head>
      <title>
        Login - Pizzaria
      </title>
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoIMg} alt=" Logo pizzaria" />

      <div className={styles.login}>
        <form onSubmit={handleLogin}>
          <Input
          placeholder='Digite seu email'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <Input
          placeholder='Digite sua senha'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

          <Button
          type="submit"
          loading={false}
          >
            Acessar
          </Button>
        </form>
        <Link href='/signup' legacyBehavior>
          <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
        </Link>
      </div>
    </div>
   </>
  )
}


export const getServerSideProps = canSSRGuest(async (ctx) =>{
  return{
    props: {}
  }
})