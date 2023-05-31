import Head from "next/head";
import style from './styles.module.scss';
import { canSSRAuth } from "../../utils/canSSRAuth";
import { Header } from "../../components/Header";
import { Button } from "../../components/ui/Button/Index";
import { Input } from "../../components/ui/input";

export default function Product(){
    return(
        <>
        <Head>
            <title>
                Novo produto - Pizzaria
            </title>
            <div>
                <Header />
                <main className={style.container}>
                    <h1>Novo produto</h1>
                    <form className={style.form}>
                        <select>
                            <option>
                                Bebida
                            </option>
                            <option>
                                Pizzas
                            </option>
                        </select>
                        <Input
                        type="text"
                        placeholder="Digite o nome do produto"
                       
                        />
                        <Input
                        type="text"
                        placeholder="Preço do produto"
                      
                        />
                        <textarea
                        placeholder="Descreva o produto"
                        />
                        <Button
                        className={style.buttonAdd}>
                            Cadastrar
                        </Button>
                    </form>
                </main>
                
            </div>
        </Head>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async(ctx) =>{
    return{
        props:{}
    }
})