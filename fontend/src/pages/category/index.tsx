import { useState, FormEvent } from 'react';
import Head from "next/head";
import { Header } from "../../components/Header";
import style from './styles.module.scss';
import { setupAPIClient } from '../../services/api';
import { toast } from 'react-toastify';
import { canSSRAuth } from '../../utils/canSSRAuth';

export default function Category(){
    const [ name, setName] = useState('');

    async function handleRegister(event: FormEvent){
        event.preventDefault();
       if(name === ''){
        return;
       }
       const apiClient = setupAPIClient();
       await apiClient.post('/category', {
        name: name
       })
       toast.success('Categoria cadastrada com sucesso!')
       setName('');
    }

    return(
        <>
        <Head>
            <title>Nova Categoria - Pizzaria</title>
        </Head>

        <div>
            <Header />
            <main className={style.container}>
                <h1> Cadastrar Categorias</h1>
                <form className={style.form} onSubmit={handleRegister}>
                    <input type="text"
                    placeholder="Digite o nome da categoria"
                    className={style.input}
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    />
                    <button className={style.buttonAdd} type="submit">
                        Cadastrar
                    </button>
                </form>
            </main>
        </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) =>{
    return{
        props: {}
    }
})