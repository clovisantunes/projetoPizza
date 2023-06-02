import { useState } from "react";
import { canSSRAuth } from "../../utils/canSSRAuth"
import Head from "next/head"
import { Header } from "../../components/Header"
import style from './styles.module.scss';
import { setupAPIClient } from "../../services/api";
import Modal from 'react-modal';
import { ModalOrder } from "../../components/ModalOrder";
import { FiRefreshCcw } from 'react-icons/fi';
type OrderProps = {
    id: string;
    table: string | number;
    status: boolean;
    draft: boolean;
    name: string | null;
}

interface HomeProps{
    orders: OrderProps[];
}

 export type OrderItemProps = {
    id: string;
    amount:number;
    order_id: string;
    product_id:string;
    product:{
        id:string;
        name:string;
        description: string;
        price:string;
        banner:string;
    }
    order:{
        id:string;
        table: string | number;
        status: boolean;
        name: string | null;
    }
}



export default function Dashboard({orders}: HomeProps){

    const [orderList, setOrderList] = useState(orders || [])

    const [modalItem, setModalItem] = useState<OrderItemProps[]>();
    const [modalVisible, setModalVisible] = useState(false)

    function handleCloseModal(){
        setModalVisible(false);
    }

    async  function handleOpenModal(id: string){
        const apiClient = setupAPIClient();
        const response = await apiClient.get('/order/detail',)
        params: {
            order_id:id;
        }
        setModalItem(response.data);
        setModalVisible(true)
    }

    async function handleFinishItem(id: string){
        const apiClient = setupAPIClient();
        await apiClient.put('/order/finish',{
            order_id: id,
        })

        const response = await apiClient.get('/order/list');

        setOrderList(response.data);
        setModalVisible(false);
    }


    async function handleRefreshOrder(){
        const apiClient = setupAPIClient();
        const response = await  apiClient.get('/order/list')
        setOrderList(response.data);
    }

    Modal.setAppElement('#__next');

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
                    <button onClick={handleRefreshOrder}>
                        <FiRefreshCcw color="#3fffa3" size={25} />
                    </button>
                </div>
                <article className={style.listOrder}>
                    {orderList.length === 0 &&(
                        <span className={style.emptyList}>
                            Nenhum pedido encontrado.
                        </span>
                    )}

                    {orderList.map(item => (
                        
                    <section key={item.id} className={style.orderItem}>
                        <button onClick={() => handleOpenModal(item.id)}>
                            <div className={style.tag} />
                                <span>Mesa {item.table}</span>
                        </button>
                    </section>
                    ))}
                </article>
               </main>
               {modalVisible && (
                <ModalOrder 
                isOpen={modalVisible}
                onRequestClose={handleCloseModal}
                order={modalItem}
                handleFinishOrder={handleFinishItem}
                />
               )}
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async(ctx) =>{
    const apiClient= setupAPIClient(ctx);

    const response = await apiClient.get('/order/list');

    //console.log(response.data)
    return{
        props: {
            orders:response.data
        }
    }
})