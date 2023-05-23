import prismaClient from "../../prisma/Index";
import { compare } from "bcryptjs";
import {sign} from 'jsonwebtoken'

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

        // gerar token jwt para usuario 

        const  token = sign(
            {
            name: user.name,
            email:user.email,
            },
            process.env.JWT_SECRET,
            {
                subject:user.id,
                expiresIn:'30d'
            }
        )

        return{
            id:user.id,
            name:user.name,
            email:user.email,
            token: token
        }


        return {ok :true }
    }
}

export { AuthUserService};