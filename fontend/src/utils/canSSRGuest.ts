import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from "nookies";

//Função para paginas de visitantes não logados

export function canSSRGuest<P>(fn: GetServerSideProps<P>){
 return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> =>{
    const cookies = parseCookies(ctx);

    // Redirecionar caso o usuario ja esteja logado
    if(cookies['@nextauth.token']){
        return{
            redirect:{
                destination: '/dashboard',
                permanent: false,
            }
        }
    }
    return await fn(ctx);
 }
}