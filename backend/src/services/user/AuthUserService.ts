import prismaClient from "../../prisma/Index";
import { compare } from "bcryptjs";


interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({email, password}: AuthRequest){
        // verificar se email exite
        
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error ("User/password incorrect")
        }

        // verificar se a senha esta correta   
        
        const passwordMath = await compare(password, user.password)

        if(!passwordMath){
            throw new Error ("User/password incorrect")
        }

        
        return {ok :true }
    }
}

export { AuthUserService};