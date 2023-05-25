import prismaClient from "../../prisma/Index";




class ListOrderService{
    async execute(){
        const orders = await prismaClient.order.findMany({
            where:{
                draft:false,
                status:false
            },
            orderBy:{
                create_at:'desc'
            }
        })
        return orders;
    }
}

export { ListOrderService }