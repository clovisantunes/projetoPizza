import { canSSRAuth } from "../../utils/canSSRAuth"
import Head from "next/head"
import { Header } from "../../components/Header"
import style from './styles.module.scss';

import { FiRefreshCcw } from 'react-icons/fi';
export default function Dashboard(){
    return(
        <>  
            <Head>
                <title> Painel - Pizzaria</title>
            </Head>
            <div>
                <Header />
               <main className={style.container}>
                <div className={style.containerHeader}>
                    <h1>Ultimos pedidos</h1>
                    <button>
                        <FiRefreshCcw color="#3fffa3" size={25} />
                    </button>
                </div>
                <article className={style.listOrder}>
                    <section className={style.orderItem}>
                        <button>
                            <div className={style.tag} />
                                <span>Mesa 30</span>
                        </button>
                    </section>
                </article>
               </main>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async(ctx) =>{
    return{
        props: {}
    }
})