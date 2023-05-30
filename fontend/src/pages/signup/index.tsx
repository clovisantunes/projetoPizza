import Head from 'next/head'
import logoIMg from '../../../public/logo.svg';
import styles from '../../../styles/Home.module.scss';
import Image from 'next/image';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/Button/Index';
import { FormEvent, useState } from 'react';

import Link from 'next/link';
import { Value } from 'sass';
export default function SignUp() {

  const [ name, setName] = useState('');
  const [ email, setEmail] = useState('');
  const [ passowrd, setPassword] = useState('');

  const [ loading, setLoading] = useState(false);

 async function handleSignUp(event: FormEvent){
  event.preventDefault();

  if (name =='' || email == '' || passowrd == ''){
    alert('Preencha todos os campos!!!')
    return;
  }
  setLoading(true);

 }

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
        <form onSubmit={handleSignUp}>
          <Input
          placeholder='Digite seu nome'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)
          }
          />
          <Input
          placeholder='Digite seu email'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)
          }
          />
          <Input
          placeholder='Digite sua senha'
          type='password'
          value={passowrd}
          onChange={(e) => setPassword(e.target.value)
          }
          />

          <Button
          type="submit"
          loading={loading}
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
