import Head from 'next/head'
import logoIMg from '../../../public/logo.svg';
import styles from '../../../styles/Home.module.scss';
import Image from 'next/image';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/Button/Index';

import Link from 'next/link';
export default function SignUp() {

  return (
   <>
    <Head>
      <title>
        Cadastro - Pizzaria
      </title>
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoIMg} alt=" Logo pizzaria" />

      <div className={styles.login}>
        <h1>Criando sua conta</h1>
        <form>
          <Input
          placeholder='Digite seu nome'
          type='text'
          />
          <Input
          placeholder='Digite seu email'
          type='text'
          />
          <Input
          placeholder='Digite sua senha'
          type='password'
          />

          <Button
          type="submit"
          loading={false}
          >
            Cadastrar
          </Button>
        </form>
        <Link href='/' legacyBehavior>
          <a className={styles.text}>Ja possui uma conta?Faça login!</a>
        </Link>
      </div>
    </div>
   </>
  )
}
