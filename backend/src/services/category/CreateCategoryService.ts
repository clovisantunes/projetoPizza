import prismaClient from "../../prisma/Index";


interface CategoryRequest{
    name:string;
}

class CreateCategoryService{
    async execute({name}: CategoryRequest){
        if(name === ''){
            throw new Error ("Name Invalid")
        }

        const category = await prismaClient.category.create({
            data:{
                name: name,
            },
            select:{
                id: true,
                name: true,
            }
        })

        return category
    }
}

export { CreateCategoryService }