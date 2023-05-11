import prismaClient from "../../prisma/Index";

interface UserRequest{
    name: string;
    email: string;
    password: string;
}


class CreateUserService{
    async execute({name, email, password}:UserRequest){
        // verificar se foi enviando email
        if(!email){
            throw new Error("email Incorret")
        }
        //verificar se o email ja esta cadastrado
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })
        if(userAlreadyExists){
            throw new Error("User already exists")
        }

        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: password,
            },
            select:{
                id: true,
                name:true,
                email:true,
            }
        })

        return user;
    }
}

export {CreateUserService}