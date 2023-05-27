import Head from 'next/head'
import logoIMg from '../../public/logo.svg';
import styles from '../../styles/Home.module.scss';
import Image from 'next/image';
import { Input } from '../components/ui/input';

export default function Home() {
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
        <form>
          <Input
          placeholder='Digite seu email'
          type='text'
          />
          <Input
          placeholder='Digite sua senha'
          type='password'
          />
        </form>
      </div>
    </div>
   </>
  )
}
